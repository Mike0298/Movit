const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  releaseYear: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    default: 0,
  },
  country: {
    type: String,
  },
  likeCounter: {
    type: Number,
    default: 0,
  },
  genres: {
    type: [String],
    required: true,
  },
  content: {
    type: String,
  },
  director: {
    type: String,
    required: true,
  },
  writers: {
    type: [String],
  },
  stars: {
    type: [String],
  },
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      text: {
        type: String,
        require: true,
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Movie = mongoose.model("movie", MovieSchema);
