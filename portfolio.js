const express = require("express"); // express
const app = express(); // initilize express
const port = 5678; // Port
const CORS = require("cors"); // CORS
const {FastRouter} = require("./router"); // General Routing
const AdminManager = require("./adaminManager.js"); // Admin Routing
const BlogHandler = require("./blogHandler.js"); // Blog Routing

// Cors Configuration
/* Cors Allowed Domains*/ let Domain = [
  "http://localhost:5678",
  "http://127.0.0.1:5678",
  "https://theankan.live",
];
app.use(CORS(Domain)); // setting up CORS
app.listen(port, () => {
  console.log(`app listening at port No ${port}`);
}); // listening port
app.use(express.urlencoded({ extended: true })); //form data encoding
app.use(express.json()); //Json Data Encoding
app.use(express.static("static")); // serving static files
app.use(FastRouter); // linking General Routing
app.use(AdminManager); // Linking Admin Routing
app.use(BlogHandler); // Linking Blog Routing

// pug engine configuration
app.set("view engine", "pug");
app.set("views", "./static/blogs");
