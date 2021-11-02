const express = require("express");
const router = express.Router();

const Profile = require("../../models/Profile");
const auth = require("../../util/auth");
const { validateProfileData } = require("../../util/validation");

//@route    GET    /api/profile/me
//@desc     Get user profile
//@access   Private

router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id })
      .populate("user", ["name", "avatar", "accountType"])
      .populate("likedMovies.movie", ["title", "imageUrl", "releaseYear"]);

    if (!profile) return res.status(404).json({ error: "Profile not found" });

    return res.status(200).json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//@route    POST    /api/profile/
//@desc     Create or update user profile
//@access   Private

router.post("/", auth, async (req, res) => {
  const { location, bio, favGenres, twitter, facebook } = req.body;

  //validate request
  const profileData = { favGenres };
  const { valid, errors } = validateProfileData(profileData);
  if (!valid) return res.status(400).json(errors);

  //build profile object
  const profileFields = {};
  profileFields.user = req.user.id;
  if (location) profileFields.location = location;
  if (bio) profileFields.bio = bio;
  if (favGenres)
    profileFields.favGenres = favGenres.split(",").map((genre) => genre.trim());

  profileFields.social = {};
  if (twitter) profileFields.social.twitter = twitter;
  if (facebook) profileFields.social.facebook = facebook;

  try {
    let profile = await Profile.findOne({ user: req.user.id });
    //update profile
    if (profile) {
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      return res.status(200).json(profile);
    }

    profile = new Profile(profileFields);
    await profile.save();
    return res.status(200).json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    GET    /api/profile/
//@desc     Get all profile
//@access   Public

router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", [
      "name",
      "avatar",
      "accountType",
    ]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    GET    /api/profile/:user_id
//@desc     Get profile by user_id
//@access   Public

router.get("/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    })
      .populate("user", ["name", "avatar", "accountType"])
      .populate("likedMovies.movie", ["title", "imageUrl", "releaseYear"]);

    if (!profile) {
      return res.status(400).json({ error: "Profile not found" });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ error: "Profile not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
