function SaveIPAddress(IPAddress) {
  let fs = require("fs");
  let DefPATHS = `${__dirname}/IP Address/`;
  fs.writeFileSync(
    `${DefPATHS}${IPAddress}.txt`,
    `I Visited Your Site & My IP Address is ${IPAddress}`
  );
  console.log(IPAddress);
}

function SaveRequestData(FILENAME, Data) {
  let fs = require("fs");
  let DefPATHS = `${__dirname}/requests/`;
  fs.writeFileSync(`${DefPATHS}${FILENAME}.txt`, Data);
  return "success";
}

function SaveJSON(name, data) {
  let fs = require("fs");
  fs.readFile(`${__dirname}/requests/request.json`, "utf-8", (err, Fileata) => {
    if (err) {
      console.log("Error");
    } else if (Fileata) {
      console.log(Fileata);
      let JsonOBJ = JSON.parse(Fileata);
      console.log(JsonOBJ);
      JsonOBJ[`${name}`] = data;
      console.log(JsonOBJ);
      let ValidJSON = JSON.stringify(JsonOBJ);
      console.log(ValidJSON);
      fs.writeFile(
        `${__dirname}/requests/request.json`,
        ValidJSON,
        (err, info) => {
          if (err) {
            console.log(err);
          } else if (info) {
            console.log(info);
          }
        }
      );
    }
  });
}
// Exporting Functions
module.exports = {
  SaveJSON: SaveJSON,
  SaveIPAddress: SaveIPAddress,
  SaveUserRequest: SaveRequestData,
};
