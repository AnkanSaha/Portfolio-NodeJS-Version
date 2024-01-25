const express = require('express')
const app = express.Router()
const BlogManager = require('../../../Server/Blog.DB.Manager.js')

// Endpoint
app.get('/blogs/gettitles', (req, res) => {
  BlogManager.GetBlogs(res)
})

app.get('/blogs/:slug', (req, res) => {
  const Slug = `/blogs/${req.params.slug}`
  BlogManager.GetBlog(Slug, res)
})

module.exports = app
