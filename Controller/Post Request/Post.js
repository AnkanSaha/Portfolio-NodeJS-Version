const express = require("express");
const app = express.Router();
const constactUs = require("./Handler/Contact Us");
const Admin_Page = require("./Handler/Admin Page");
const Blog_Page = require("./Handler/Blog Page");

// assemble the routes
app.use(constactUs.ConstactUS)
app.use(Admin_Page)
app.use(Blog_Page)


module.exports = app;