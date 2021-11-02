const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  locationn: {
    type: String,
  },
  bio: {
    type: String,
  },
  favGenres: {
    type: [String],
    require: true,
  },
  likedMovies: [
    {
      movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "movie",
      },
    },
  ],
  social: {
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
