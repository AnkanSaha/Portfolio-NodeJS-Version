const express = require('express')
const GetRequest = express.Router()
const Admin_Page = require('./Handler/Admin Page')
const Blog_Page = require('./Handler/Blog Page')

// assemble the routes
GetRequest.use(Admin_Page)
GetRequest.use(Blog_Page)

module.exports = GetRequest
