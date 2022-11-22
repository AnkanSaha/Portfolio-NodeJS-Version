const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5678;
const CORS = require("cors");
const Routing = require("./router");
const AdminManager = require("./adaminManager.js");
const BlogHandler = require('./blogHandler.js');
// Cors Configuration
/* Cors Allowed Domains*/ let Domain = ["http://localhost:5678", "http://127.0.0.1:5678" ,"https://theankan.live"];

app.use(CORS(Domain));

app.listen(port, () => {
  console.log(`app listening at port No ${port}`);
}); // listening port
app.use(bodyParser.urlencoded({ extended: true })); //form data encoding
app.use(bodyParser.json()); //Json Data Encoding
app.use(express.static("static")); // serving static files
app.use(Routing.FastRouter);
app.use(AdminManager);
app.use(BlogHandler)
