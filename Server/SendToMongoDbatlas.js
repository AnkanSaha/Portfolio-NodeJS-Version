function SaveToServer(Name, email, message, finalMessage){
    var mongoose = require('mongoose')
    var url = 'mongodb+srv://Ankan157:Ankan1567@alwaysfreedatabase.cgbiysn.mongodb.net/UserRequest?retryWrites=true&w=majority'
    var MongoModel = require('../Server/MongoModel')
    mongoose.connect(url).then(()=>{
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
            console.log('unable to save request data to database & ', error)
        })
    }).catch((error)=>{
        console.log('Unable To Connect To Server Database & ', error)
    })
}
module.exports.SaveToServer = SaveToServer

