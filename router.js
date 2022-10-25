const express = require('express');
const app = express.Router();
const bodyParser = require('body-parser');
const DefPATH = `${__dirname}/static/` // Default Path
const SaveData = require('./Other Services/saveData')
const SaveToServer = require('./Server/SendToMongoDbatlas');

// Endpoint
app.get('/', (request, response)=>{
    var UserIP = request.socket.remoteAddress
    SaveData.SaveIPAddress(UserIP)
    response.sendFile(`${DefPATH}index.html`)
})

app.post('/contactus', (request, response)=>{
    var name = request.body.name
    var email = request.body.email
    var massage = request.body.message
    var  Final = `Hello Sir, I am ${name}. i am facing some problem in your website. my query is ${massage}. please reply me on my email address. my email address is ${email}.`
    SaveToServer.SaveToServer(name, email, massage,Final)
    var FileName = `${request.body.name}(${email})`
    var SaveStatus = SaveData.SaveUserRequest(FileName, Final)
    if(SaveStatus =='success'){
        response.json({status:"Your Request Successfully Saved To Our Database"})
    }
    else if(SaveStatus != 'success'){
        response.json({status:"Unexpacted Error Found"})
    }
})

module.exports = app