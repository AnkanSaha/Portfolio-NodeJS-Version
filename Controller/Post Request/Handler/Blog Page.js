const express = require('express')
const app = express.Router()
const BlogManager = require('../../../Server/Blog.DB.Manager.js')

// Endpoint
app.post('/blogs/publish/new', (req, res) => {
  BlogManager.BlogSave(
    req.body.BlogName,
    req.body.AuthorName,
    req.body.BlogCatagory,
    req.body.PublishDate,
    req.body.Content,
    req.body.SlugLink,
    res
  )
})

module.exports = app
