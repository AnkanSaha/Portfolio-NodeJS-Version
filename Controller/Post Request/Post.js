const express = require('express')
const apps = express.Router()
const constactUs = require('./Handler/Contact Us')
const { app } = require('./Handler/Admin Page')
const Blog_Page = require('./Handler/Blog Page')

// assemble the routes
apps.use(constactUs.ConstactUS)
apps.use(app)
apps.use(Blog_Page)

module.exports = apps
