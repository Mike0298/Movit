const express = require("express");
const router = express.Router();

const Profile = require("../../models/Profile");
const User = require("../../models/User");
const Movie = require("../../models/Movie");
const auth = require("../../util/auth");
const {
  validateNewMovieData,
  validateCommentData,
} = require("../../util/validation");

const data = require("../../data");

const { dataDict } = require("../../config/config");

//@route    POST    /api/movies/
//@desc     Add a movie
//@access   Private

router.post("/", async (req, res) => {
  const {
    title,
    imageUrl,
    description,
    releaseYear,
    rating,
    country,
    genres,
    director,
    writers,
    stars,
    content,
  } = req.body;
  //validate req data
  const movieData = { title, releaseYear, genres, imageUrl, director };
  const { valid, errors } = validateNewMovieData(movieData);
  if (!valid) return res.status(400).json(errors);

  const movieFields = {};
  if (title) movieFields.title = title;
  if (director) movieFields.director = director;
  if (imageUrl) movieFields.imageUrl = imageUrl;
  if (description) movieFields.description = description;
  if (content) movieFields.content = content;
  if (releaseYear) movieFields.releaseYear = releaseYear;
  if (rating) movieFields.rating = rating;
  if (country) movieFields.country = country;
  if (genres)
    movieFields.genres = genres.split(",").map((genre) => genre.trim());
  if (writer)
    movieFields.writers = writers.split(",").map((writer) => writer.trim());
  if (stars) movieFields.stars = stars.split(",").map((star) => star.trim());

  try {
    let movie = await Movie.findOne({ title: title, releaseYear: releaseYear });
    if (movie)
      return res.status(400).json({
        error: "Already exist a movie with the same title and release year",
      });
    movie = new Movie(movieFields);
    await movie.save();
    return res.status(200).json(movie);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    PUT    /api/movies/:movie_id
//@desc     Update a movie
//@access   Private

router.put("/:movie_id", auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  if (user.accountType === dataDict.member)
    return res.status(401).json({
      error: "Insufficient permission",
    });

  const {
    title,
    imageUrl,
    description,
    releaseYear,
    rating,
    country,
    genres,
    director,
    writers,
    stars,
    content,
  } = req.body;
  //validate req data
  const movieData = { title, releaseYear, genres, imageUrl, director };
  const { valid, errors } = validateNewMovieData(movieData);
  if (!valid) return res.status(400).json(errors);

  const movieFields = {};
  if (title) movieFields.title = title;
  if (director) movieFields.director = director;
  if (imageUrl) movieFields.imageUrl = imageUrl;
  if (description) movieFields.description = description;
  if (content) movieFields.content = content;
  if (releaseYear) movieFields.releaseYear = releaseYear;
  if (rating) movieFields.rating = rating;
  if (country) movieFields.country = country;
  if (genres)
    movieFields.genres = genres.split(",").map((genre) => genre.trim());
  if (writer)
    movieFields.writers = writers.split(",").map((writer) => writer.trim());
  if (stars) movieFields.stars = stars.split(",").map((star) => star.trim());

  try {
    const movie = await Movie.findByIdAndUpdate(
      req.params.movie_id,
      { $set: movieFields },
      { new: true }
    );
    return res.status(200).json(movie);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.status(500).send("Server Error");
  }
});

//@route    GET    /api/movies/
//@desc     Get all movie
//@access   Public

router.get("/", async (req, res) => {
  try {
    let movies = await Movie.find().sort({ date: -1 }).select(["-date"]);
    return res.status(200).json(movies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    DELETE    /api/movies/:movid_id
//@desc     Delete a movie
//@access   Private

router.delete("/:movie_id", auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  if (user.accountType === "member")
    return res.status(401).json({
      error:
        "Insufficient permission, only admin and moderator can modify a movie",
    });

  try {
    const profilesWithMovie = await Profile.find({
      likedMovies: { $elemMatch: { movie: req.params.movie_id } },
    });

    for (let profile of profilesWithMovie) {
      const profileToRemoveFrom = await Profile.findOne({ user: profile.user });
      const removeIndex = profileToRemoveFrom.likedMovies
        .map((likedMovie) => likedMovie.movie.toString())
        .indexOf(req.params.movie_id);
      profileToRemoveFrom.likedMovies.splice(removeIndex, 1);
      profileToRemoveFrom.save();
    }
    const movie = await Movie.findById(req.params.movie_id);
    if (!movie) return res.status(404).json({ error: "Movie not found" });
    await movie.remove();
    return res.status(200).json({ success: "Movie deleted" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.status(500).send("Server Error");
  }
});

//@route    GET    /api/movies/:movie_id
//@desc     Get movie by movie id
//@access   Public

router.get("/:movie_id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.movie_id).select("-date");
    if (!movie) return res.status(404).json({ error: "Movie not found" });
    return res.status(200).json(movie);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.status(500).send("Server Error");
  }
});

//@route    GET    /api/movies/genres/:genre
//@desc     Get movies by a genre
//@access   Public

router.get("/genres/:genre", async (req, res) => {
  try {
    const movie = await Movie.find({
      genres: {
        $in: [req.params.genre],
      },
    })
      .sort({ date: -1 })
      .select("-date");
    return res.status(200).json(movie);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    GET    /api/movies/get/random
//@desc     Get a random movie
//@access   Public

router.get("/get/random", async (req, res) => {
  try {
    const movies = await Movie.aggregate([{ $sample: { size: 1 } }]);
    return res.status(200).json({ movies: movies });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    PUT    /api/movies/:movie_id/like
//@desc     Like a movie
//@access   Private

router.put("/:movie_id/like", auth, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.movie_id);
    const profile = await Profile.findOne({ user: req.user.id });

    //check if user like the movie yet
    if (
      profile.likedMovies.filter(
        (likedMovie) => likedMovie.movie.toString() === req.params.movie_id
      ).length > 0
    )
      return res.status(400).json({ error: "Movie already liked" });

    movie.likeCounter++;
    profile.likedMovies.unshift({ movie: movie.id });

    await movie.save();
    await profile.save();
    return res.status(200).json(movie);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.status(500).send("Server Error");
  }
});

//@route    PUT    /api/movies/:movie_id/unlike
//@desc     Unlike a movie
//@access   Private

router.put("/:movie_id/unlike", auth, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.movie_id);
    const profile = await Profile.findOne({ user: req.user.id });

    if (
      profile.likedMovies.filter(
        (likedMovie) => likedMovie.movie.toString() === req.params.movie_id
      ).length === 0
    )
      return res.status(400).json({ error: "Movie have not been like" });

    movie.likeCounter--;
    const removeIndex = profile.likedMovies
      .map((likedMovie) => likedMovie.movie.toString())
      .indexOf(req.params.movie_id);
    profile.likedMovies.splice(removeIndex, 1);

    await movie.save();
    await profile.save();
    return res.status(200).json(movie);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.status(500).send("Server Error");
  }
});

//@route    POST    /api/movies/:movie_id/
//@desc     Comment on a movie
//@access   Private

router.post("/:movie_id", auth, async (req, res) => {
  const { valid, errors } = validateCommentData(req.body);
  if (!valid) return res.status(400).json(errors);

  try {
    const user = await User.findById(req.user.id).select("-password");
    const movie = await Movie.findById(req.params.movie_id);

    const newComment = {
      text: req.body.text,
      name: user.name,
      avatar: user.avatar,
      user: user.id,
    };

    movie.comments.unshift(newComment);
    await movie.save();
    return res.status(200).json(movie.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    DELETE    /api/movies/:movie_id/:comment_id
//@desc     Delete a comment on a movie
//@access   Private

router.delete("/:movie_id/:comment_id", auth, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.movie_id);

    if (!movie) return res.status(404).json({ error: "Movie not found" });

    const comment = movie.comments.find(
      (comment) => comment.id === req.params.comment_id
    );

    if (!comment) return res.status(404).json({ error: "Comment not found" });

    if (comment.user.toString() !== req.user.id)
      return res.status(401).json({ error: "User not authorized" });

    const removeIndex = movie.comments
      .map((comment) => comment.user.toString())
      .indexOf(req.user.id);
    movie.comments.splice(removeIndex, 1);
    movie.save();
    return res.status(200).json(movie.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    POST    /api/movies/admin/massupload
//@desc     Load mass movies data
//@access   Private

router.post("/admin/massupload", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.accountType !== dataDict.admin)
      return res.status(401).json({
        error: "Insufficient permission",
      });
    const dataToAdd = req.body.data;
    for (let movie of dataToAdd) {
      let x = await Movie.findOne({
        title: movie.title,
        releaseYear: movie.releaseYear,
      });
      if (!x) {
        let x = new Movie(movie);
        await x.save();
      }
    }
    const movies = await Movie.find()
      .sort({ date: -1 })
      .select(["-date", "-comments"]);
    return res.status(200).json(movies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.purge("/admin/massdelete", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.accountType !== dataDict.admin)
      return res.status(401).json({
        error: "Insufficient permission",
      });
    await Movie.deleteMany();
    res.status(200).json({ msg: "Success" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
