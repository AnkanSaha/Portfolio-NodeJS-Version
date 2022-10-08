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
module.exports.SaveIPAddress = SaveIPAddress
module.exports.SaveUserRequest = SaveRequestData