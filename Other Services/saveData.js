function SaveRequestData(FILENAME, Data) {
  let fs = require("fs");
  let DefPATHS = `${__dirname}/requests/`;
  fs.writeFileSync(`${DefPATHS}${FILENAME}.txt`, Data);
  return "success";
}


// Exporting Functions
module.exports = {
  SaveUserRequest: SaveRequestData,
};