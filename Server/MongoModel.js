const mongoose = require('mongoose');
var Request_Scema = {
    name : String,
    Email:String,
    Message:String,
    FinalMessage:String,
    RequestDate:String
}
// Converting Object to sceema 
var Final_Sceema = mongoose.Schema(Request_Scema)
// Converting Sceema to Model
module.exports = mongoose.model('Request', Final_Sceema)