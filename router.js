const express = require("express");
const app = express.Router();
const DefPATH = `${__dirname}/static/`; // Default Path
const IPS = require('request-ip');
const SaveData = require("./Other Services/saveData");

const SaveToServer = require("./Server/SendToMongoDbatlas");

// 404 Page error handler
const blogHandler = require("./blogHandler");
const AdminManager = require("./adaminManager");
app.use(AdminManager);
app.use(blogHandler);
app.get('*', (request, response) => {
  response.status(404).render('404', { title: '404 : Page Not Found', routes:'/', exit: 'Go To Home'});
});

// Endpoint
app.get("/", (request, response) => {
  var UserIP = IPS.getClientIp(request);
  SaveData.SaveIPAddress(UserIP);
  response.sendFile(`${DefPATH}index.html`);
});


app.post("/contactus", (request, response) => {
  var name = request.body.name;
  var email = request.body.email;
  var massage = request.body.message;
  var Time = new Date();
  var Final = `Hello Sir, I am ${name}. my query is ${massage}. please reply me on my email address. my email address is ${email}.( Request Time : ${Time})`;
  SaveToServer.SaveToServer(name, email, massage, Final, response);
  var FileName = `${request.body.name}(${email})`;
  SaveData.SaveUserRequest(FileName, Final);
});

module.exports = { FastRouter: app };
