const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String, // String is shorthand for {type: String}
    content: String,
    postNum: Number,
  },
  { timestamps: true, collection: "posts" }
);

const Post = mongoose.model("Post", postSchema);
module.exports = { Post };
