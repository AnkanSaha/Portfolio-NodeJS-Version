const express = require("express"); // express
const rateLimit = require("express-rate-limit"); // Rate Limit
const app = express.Router();
const DefPATH = `${__dirname}/static/`; // Default Path
const DirName = `${__dirname}/static/blogs`; // Blog Path

// Apply Rate Limit
app.use(
  rateLimit({
    windowMs: 60 * 1000, // 1 minute
    statusCode: 429,
    max: 15, // 15 requests
    message: {
        status: false,
        statusCode: 429,
        Title: "Too many requests",
        message: "Too many requests, please try again later",
        response: undefined,
    },
    standardHeaders: true, // Include standard headers for request limit
    legacyHeaders: false, // Include legacy headers for request limit
})
);

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
