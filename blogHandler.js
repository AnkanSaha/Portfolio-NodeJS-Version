const express = require("express");
const blogHandler = express.Router();
const DirName = `${__dirname}/static/blogs`;

// sending blog list file
blogHandler.get("/blogs", (req, res) => {
    res.status(200).sendFile(`${DirName}/html/blogTitle.html`);
});



module.exports = blogHandler;