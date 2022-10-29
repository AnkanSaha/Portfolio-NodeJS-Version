const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5678
const DefPATH = `${__dirname}/static/` // Default Path
const SaveData = require('./Other Services/saveData')
const SaveToServer = require('./Server/SendToMongoDbatlas');
const CORS = require('cors');
const Routing = require('./router')
// Cors Configuration
 /* Cors Allowed Domains*/ let Domain = ['*'] 
app.use(CORS(Domain))

app.listen(port, ()=>{console.log(`app listening at port No ${port}`)}); // listening port 
app.use(bodyParser.urlencoded({extended:true})) //form data encoding
app.use(bodyParser.json()) //Json Data Encoding
app.use(express.static('static')) // serving static files
app.use(Routing.FastRouter)