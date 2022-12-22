const express = require("express");
const blogHandler = express.Router();
const DirName = `${__dirname}/static/blogs`;
const BlogManager = require('./Server/Blog.DB.Manager.js')

// sending blog list file
blogHandler.get("/blogs", (req, res) => {
    res.status(200).sendFile(`${DirName}/html/blogTitle.html`);
});
// sending blog publish area
blogHandler.get('/blogs/publish', (req, res)=>{
    res.status(200).sendFile(`${DirName}/html/BlogPublish.html`)
})

// handle the blog posting request
blogHandler.post('/blogs/publish/new', (req, res)=>{
    BlogManager.BlogSave(req.body.BlogName, req.body.AuthorName ,req.body.BlogCatagory, req.body.PublishDate, req.body.Content, req.body.SlugLink, res)
})


// SEND ALL BLOG TITLES
blogHandler.get('/blogs/gettitles', (req, res)=>{
    BlogManager.GetBlogs(res)
})


// send specific blog with pug
blogHandler.get('/blogs/:slug', (req, res)=>{
    var Slug = `/blogs/${req.params.slug}`
    BlogManager.GetBlog(Slug, res)
})

module.exports = blogHandler;