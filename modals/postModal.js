const mongoose = require("mongoose");

// Define the schema
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Like",
  }],
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  }],
});

// Check if the model already exists, and only define it if it doesn't
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

module.exports = Post;
