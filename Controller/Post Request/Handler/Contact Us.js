const express = require("express");
const app = express.Router();
const SaveData = require("../../../Other Services/saveData");
const ServerRequest = require("../../../Server/SendToMongoDbatlas.js");

// Endpoint
app.post("/contactus", (request, response) => {
    var name = request.body.name;
    var email = request.body.email;
    var massage = request.body.message;
    var Time = new Date();
    var Final = `Hello Sir, I am ${name}. my query is ${massage}. please reply me on my email address. my email address is ${email}.( Request Time : ${Time})`;
    var FileName = `${request.body.name}(${email})`;
    SaveData.SaveUserRequest(FileName, Final);
    ServerRequest.SaveToServer(name, email, massage, Final, response);
  });

  module.exports = { ConstactUS : app };