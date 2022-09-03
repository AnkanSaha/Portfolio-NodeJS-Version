function SaveToServer(Name, email, message, finalMessage){
    var mongoose = require('mongoose');
    var MongoModel = require('../Server/MongoModel')
    mongoose.connect('mongodb+srv://AutoBot:AuToBot1567@ankansaha.qr3jo2v.mongodb.net/UserRequests?retryWrites=true&w=majority').then(()=>{
        console.log('Database Connected Successfully')
        //Insert Data to Final
        var FinalData = new MongoModel({
            name:Name,
            Email:email,
            Message:message,
            FinalMessage:finalMessage,
            RequestDate:new Date()
        })
        FinalData.save().then(()=>{
            console.log('Data saved To Server Successfully')
            mongoose.connection.close().then(()=>{
                console.log('Connection with database server has Closed Successfully')
            }).catch(()=>{
                console.log('Unable To Close Connection with Database Server')
            })
        }).catch((error)=>{
            console.log('unable to save request data to database');
            throw error
        })
    }).catch((error)=>{
        console.log('Unable To Connect To Server Database')
        throw error
    })
}
module.exports = SaveToServer