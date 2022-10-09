const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5678
const DefPATH = `${__dirname}/static/` // Default Path
const SaveData = require('./Other Services/saveData')
const SaveToServer = require('./Server/SendToMongoDbatlas');
const CORS = require('cors');
// Cors Configuration
 /* Cors Allowed Domains*/ let Domain = ['*'] 
app.use(CORS(Domain))

app.listen(port, ()=>{console.log(`app listening at port No ${port}`)}); // listening port 
app.use(bodyParser.urlencoded({extended:true})) //form data encoding
app.use(bodyParser.json()) //Json Data Encoding
app.use(express.static('static')) // serving static files

// Endpoint
app.get('/', (request, response)=>{
    var UserIP = request.socket.remoteAddress
    SaveData.SaveIPAddress(UserIP)
    response.sendFile(`${DefPATH}index.html`)
})

// Request handle
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
