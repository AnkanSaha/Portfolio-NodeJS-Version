const mongoose = require("mongoose");
var Request_Scema = {
  name: { type: String, required: true },
  Email: { type: String, required: true },
  Message: { type: String, required: true },
  FinalMessage: { type: String, required: true },
  RequestDate: String,
};
// Converting Object to sceema
var Final_Sceema = mongoose.Schema(Request_Scema);
// Converting Sceema to Model
module.exports = mongoose.model("Request", Final_Sceema);
