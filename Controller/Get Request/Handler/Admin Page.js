const express = require("express");
const app = express.Router();
const mongoose = require("mongoose");
const Request = require("../../../Server/MongoModel.js");
const credential = require("../../../Secret/credential.js");

// Endpoint
// sending all messages
app.get("/admin/message", (request, response) => {
    // variable for storing all messages
    mongoose.connect(credential.MOngoDB_URI).then(() => {
      Request.Request.find({}, (err, data) => {
        if (err) {
          response.status(200).json({ status: "failed" });
        } else if (data) {
          response.status(200).json({ status: "success", data: data });
        }
      });
    });
  });

module.exports = app;