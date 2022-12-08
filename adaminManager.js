const express = require("express");
const app = express.Router();
const DefPATH = `${__dirname}/static/`; // Default Path
const Auth_Code = ["Daluabari@7063355213", "Ankan@157", "Ankan@1567"]; // Admin Code
let ExtraUser = [];
const mongoose = require("mongoose");
const Request = require("./Server/MongoModel.js");
const bodyParser = require("body-parser");
const DB_URL = require("./Server/DB_Config.js");

app.get("/admin", (request, response) => {
  response.status(200).sendFile(`${DefPATH}admin/html/signin.html`);
});

app.get("/admin/dashboard", (request, response) => {
  response.status(200).sendFile(`${DefPATH}admin/html/dashboard.html`);
});

// Admin Login verification
app.post("/CodeVerify", (request, response) => {
  var UserAdminCode = request.body.AdminCode;
  var ResStatus = Auth_Code.includes(UserAdminCode);
  if (ResStatus == true) {
    response.status(200).json({ status: "success" });
  } else if (ResStatus == false) {
    response.status(200).json({ status: "failed" });
  }
});
// Extra User Login verification
app.post("/ExtraUserVerify", (request, response) => {
  var Extra = request.body.Extra;
  var ResStatus = ExtraUser.includes(Extra);
  if (ResStatus == true) {
    response.status(200).json({ status: "success", userCode: Extra});
  }
  else if (ResStatus == false) {
    response.status(200).json({ status: "failed"});
  }
});

app.post('/admin/post/adduser', (request, response) => {
  var usercodes = request.body.username;
  var res = ExtraUser.includes(usercodes);
  if(res == true){
    response.status(200).json({status:"User Already Exist"});
  }
  else if(res == false){
    ExtraUser.push(usercodes)
    var responses = ExtraUser.includes(usercodes)
    if(responses == true){
      response.status(200).json({status:"User Added"});
    }
    else if(responses == false){
      response.status(200).json({status:"Not Added"})
    }
  }
})

// sending all messages
app.get("/admin/message", (request, response) => {
  // variable for storing all messages
  mongoose.connect(DB_URL).then(() => {
    Request.Request.find({}, (err, data) => {
      if (err) {
        response.status(200).json({ status: "failed" });
      } else if (data) {
        response.status(200).json({ status: "success", data: data });
      }
    });
  });
});

// delete message
app.post("/admin/message/delete", (request, response) => {
  console.log(request.body.Id);
  mongoose.connect(DB_URL).then(() => {
    Request.deleteOne({ _id: request.body.Id }, (err, data) => {
      if (err) {
        response.status(200).json({ status: "failed" });
        mongoose.connection.close();
      } else if (data) {
        response.status(200).json({ status: "success" });
        mongoose.connection.close();
      }
    });
  });
});

// read message
app.post("/admin/message/read", (request, response) => {
  var Id = request.body.Id;
  mongoose.connect(DB_URL).then(() => {
    Request.Request.find({ _id: Id }, (err, data) => {
      if (err) {
        response.status(200).json({ status: "failed" });
      } else if (data) {
        response.status(200).json({ status: "success", data: data[0] });
      }
    });
  });
});
module.exports = app;
