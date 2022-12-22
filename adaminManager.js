const express = require("express");
const app = express.Router();
const DefPATH = `${__dirname}/static/`; // Default Path
const Auth_Code = ["Daluabari@7063355213", "Ankan@157", "Ankan@1567"]; // Admin Code
let ExtraUser = [];
let ExtraUSerPass = [];
let ExtraUserEmail = [];
const mongoose = require("mongoose");
const Request = require("./Server/MongoModel.js");
const DB_URL = require("./Server/DB_Config.js");

app.get("/admin", (request, response) => {
  response.status(200).sendFile(`${DefPATH}admin/html/signin.html`);
});

app.get("/admin/dashboard", (request, response) => {
  response.status(200).sendFile(`${DefPATH}admin/html/dashboard.html`);
});
app.get("/admin/post/SeeExtraUser", (request, response) => {
  response.status(200).sendFile(`${DefPATH}admin/html/allextrauserlist.html`);
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
app.post("/admin/post/ExtraUserVerify", (request, response) => {
  var Extra = request.body.Extra;
  var ResStatus = ExtraUser.includes(Extra);
  var ExtraPass = request.body.ExtraPass;
  var ResPass = ExtraUSerPass.includes(ExtraPass);;
  if (ResStatus == true && ResPass == true) {
    response.status(200).json({ status: "success", userCode: Extra });
  } else if (ResStatus == false && ResPass == false) {
    response.status(200).json({ status: "failed" });
  }
});

app.post("/admin/post/adduser", (request, response) => {
  var usercodes = request.body.username;
  var pass = request.body.password;
  var email = request.body.email;
  var userres = ExtraUser.includes(usercodes);
  if (userres == true) {
    response.status(200).json({ status: "User Already Exist" });
  } else if (userres == false) {
    ExtraUser.push(usercodes);
    ExtraUSerPass.push(pass);
    ExtraUserEmail.push(email);
    var resuser = ExtraUser.includes(usercodes);
    var respass = ExtraUSerPass.includes(pass);
    var resemail = ExtraUserEmail.includes(email);
    if (resuser == true && respass == true && resemail == true) {
      response.status(200).json({ status: "User Added" });
    } else if (resuser == false && respass == false && resemail == false) {
      response.status(200).json({ status: "Not Added" });
    }
  }
});

// sending all extra user
app.post("/admin/post/getusers", (request, response) => {
    var user = ExtraUser;
    var pass = ExtraUSerPass;
    var email = ExtraUserEmail;
    var final = [];
    user.forEach((element1, index) => {
      var element2 = pass[index];
      var element3 = email[index];
          final.push(
            {
              username: element1,
              password: element2,
              email: element3,
            }
          );
        });
    var reqTocken = request.body.token;
    var resTocken = Auth_Code.includes(reqTocken);
    if (resTocken == true) {
      response.status(200).json({ status: "success", data: final });
    }
    else if(resTocken == false){
      response.status(200).json({ status: "failed" });
    }
});

// delete user
app.post("/admin/post/deleteuser", (request, response) => {
  var user = request.body.username;
  var pass = request.body.password;
  var email = request.body.email;
  var userres = ExtraUser.includes(user);
  var passres = ExtraUSerPass.includes(pass);
  var emailres = ExtraUserEmail.includes(email);
  if (userres == true && passres == true && emailres == true) {
    var index = ExtraUser.indexOf(user);
    ExtraUser.splice(index, 1);
    ExtraUSerPass.splice(index, 1);
    ExtraUserEmail.splice(index, 1);
    response.status(200).json({ status: "success" });
  } else if (userres == false && passres == false && emailres == false) {
    response.status(200).json({ status: "failed" });
  }
});

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
  mongoose.connect(DB_URL).then(() => {
    Request.Request.deleteOne({ _id: request.body.Id }, (err, data) => {
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
