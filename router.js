const express = require("express");
const app = express.Router();
const DefPATH = `${__dirname}/static/`; // Default Path
const DirName = `${__dirname}/static/blogs`; // Blog Path

// Endpoint

// Sending Home Page Files
app.get("/", (request, response) => {
  response.sendFile(`${DefPATH}index.html`);
});

// Sending Admin Page Files
app.get("/admin", (request, response) => {
  response.status(200).sendFile(`${DefPATH}admin/html/signin.html`);
});

app.get("/admin/dashboard", (request, response) => {
  response.status(200).sendFile(`${DefPATH}admin/html/dashboard.html`);
});

app.get("/admin/post/SeeExtraUser", (request, response) => {
  response.status(200).sendFile(`${DefPATH}admin/html/allextrauserlist.html`);
});

// Sending Blog Page Files
app.get("/blogs", (req, res) => {
  res.status(200).sendFile(`${DirName}/html/blogTitle.html`);
});

app.get('/blogs/publish', (req, res)=>{
  res.status(200).sendFile(`${DirName}/html/BlogPublish.html`)
})

app.get('/blogs/createaccount', (req, res)=>{
  res.status(200).sendFile(`${DirName}/html/BlogscreateAccount.html`)
})

module.exports = { Router: app };
