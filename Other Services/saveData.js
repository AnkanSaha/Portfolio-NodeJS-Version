function SaveIPAddress (IPAddress){
    var fs = require('fs');
    var DefPATHS = `${__dirname}/IP Address/`
    fs.writeFileSync(`${DefPATHS}${IPAddress}.txt` ,`I Visited Your Site & My IP Address is ${IPAddress}`)
    console.log(IPAddress)
}

function SaveRequestData(FILENAME, Data){
    var fs = require('fs');
    var DefPATHS = `${__dirname}/requests/` 
    fs.writeFileSync(`${DefPATHS}${FILENAME}.txt`, Data)
    return 'success'
}

function SaveJSON(name,data){
    var fs = require('fs');
    fs.readFile(`${__dirname}/requests/request.json`,'utf-8' ,(err, Fileata)=>{
        if(err){
            console.log('Error')
        }
        else if(Fileata){
            console.log(Fileata)
            var JsonOBJ = JSON.parse(Fileata)
            console.log(JsonOBJ)
            JsonOBJ[`${name}`]=data
            console.log(JsonOBJ)
            var ValidJSON = JSON.stringify(JsonOBJ)
            console.log(ValidJSON)
            fs.writeFile(`${__dirname}/requests/request.json`, ValidJSON, (err, info)=>{
                if(err){
                    console.log(err)
                }
                else if(info){
                    console.log(info)
                }
            })
        }
    })
}
// Exporting Functions
module.exports = {SaveJSON:SaveJSON, SaveIPAddress:SaveIPAddress, SaveUserRequest:SaveRequestData}