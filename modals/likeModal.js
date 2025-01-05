// Import Mongoose 
const mongoose = require('mongoose');

// Route Handler 
const likeSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post" // Reference to the Post model
    },
    user: {
        type: String,
        required: true,
    },    
});

// Export 
const Like = mongoose.models.Like || mongoose.model("Like", likeSchema);
module.exports = Like;
