const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const port = 5678
const DefPATH = `${__dirname}/static/html/` // Default Path
const SaveData = require('./Other Services/saveData')
const SaveToServer = require('./Server/SendToMongoDbatlas')

app.listen(port, ()=>{console.log(`app listening at port No ${port}`)}); // listening port 
app.use(bodyParser.urlencoded({extended:true})) //form data encoding
app.use(bodyParser.json()) //Json Data Encoding
app.use('/static', express.static('static')) // serving static files

// Endpoint
app.get('/', (request, response)=>{
    var UserIP = request.socket.remoteAddress
    SaveData.SaveIPAddress(UserIP)
    response.sendFile(`${DefPATH}index.html`)
})

app.get('/project', (request, response)=>{
    console.log(request.socket.remoteAddress)
    response.sendFile(`${DefPATH}projects.html`)
})

app.get('/certificate', (request, response)=>{
    console.log(request.socket.remoteAddress)
    response.sendFile(`${DefPATH}certificates.html`)
})

app.get('/socialmedia', (request, response)=>{
    console.log(request.socket.remoteAddress)
    response.sendFile(`${DefPATH}SocialMedia.html`)
})

app.get('/contactus', (request, response)=>{
    console.log(request.socket.remoteAddress)
    response.sendFile(`${DefPATH}buyaccesskey.html`)
})

// Request handle
app.post('/contactus', (request, response)=>{
    var name = request.body.name
    var email = request.body.email
    var massage = request.body.message
    var  Final = `Hello Sir, I am ${name}. i am facing some problem in your website. my query is ${massage}. please reply me on my email address. my email address is ${email}.`
    var FileName = `${request.body.name}(${email})`
    var SaveStatus = SaveData.SaveUserRequest(FileName, Final)
    SaveToServer(name, email, massage,Final)
    if(SaveStatus =='success'){
        response.sendFile(`${DefPATH}buyaccesskey.html`)
    }
    else if(SaveStatus != 'success'){
        response.send({status:"Unexpacted Error Found"})
    }
})
