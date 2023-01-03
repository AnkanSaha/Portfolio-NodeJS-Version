const express = require("express"); // express
const app = express(); // initilize express
const CORS = require("cors"); // CORS
const {Router} = require("./router"); // General Routing
const PostRequests = require('./Controller/Post Request/Post')
const GetRequests = require('./Controller/Get Request/Get')
const credential = require("./Secret/credential.js"); // credential
const port = credential.PORT || 5678 // Port

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
app.use(Router); // linking File Routing
app.use(PostRequests); // Linking All Post Requests Routing
app.use(GetRequests); // Linking All Get Requests Routing

// pug engine configuration
app.set("view engine", "pug");
app.set("views", "./static/blogs");

// 404 Page
app.get('*', (request, response) => {
  response.status(404).render('404', { title: '404 : Page Not Found', routes:'/', exit: 'Go To Home'});
});

