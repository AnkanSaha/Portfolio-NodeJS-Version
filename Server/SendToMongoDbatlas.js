function SaveToServer(Name, email, message, finalMessage, response){
    const SaveData = require('../Other Services/saveData');
    var status = {
        success:"Your Request Successfully Saved To Our Database",
        fail:"Currently Server not acceping request, Try again later ..."
    }
    var mongoose = require('mongoose')
    var url = 'mongodb+srv://Ankan157:Ankan1567@freeprojectdb.ykbaz7c.mongodb.net/UserRequest?retryWrites=true&w=majority'
    var MongoModel = require('../Server/MongoModel')
    mongoose.connect(url).then(()=>{
        console.log('Database Connected Successfully')
        //Insert Data to Final
        var FinalScheema ={
            name:Name,
            Email:email,
            Message:message,
            FinalMessage:finalMessage,
            RequestDate:new Date()
        }
        var FinalData = new MongoModel(FinalScheema)
        FinalData.save().then(()=>{
            console.log('Data saved To Server Successfully')
            SaveData.SaveJSON(Name, finalMessage)
            response.json({status:status.success});
            mongoose.connection.close().then(()=>{
                console.log('Connection with database server has Closed Successfully')
            }).catch(()=>{
                console.log('Unable To Close Connection with Database Server')
            })
        }).catch((error)=>{
            console.log('unable to save request data to database & ', error)
            response.json({status:status.fail})
        })
    }).catch((error)=>{
        console.log('Unable To Connect To Server Database & ', error)
        response.json({status:status.fail})
    })
}
module.exports.SaveToServer = SaveToServer


