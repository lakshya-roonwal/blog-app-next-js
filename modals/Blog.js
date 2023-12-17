const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    blogType:{
        type:String,
        required:true   
    },
    content: {
        type: Array,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
});
const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;