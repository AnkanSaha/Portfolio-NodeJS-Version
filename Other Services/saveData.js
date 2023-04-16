// Description: This file is used to save the data in the file
const Admin_Code = ["Daluabari@7063355213", "Ankan@157", "Ankan@1567"]; // Admin Code

function SaveRequestData(FILENAME, Data) {
  let fs = require("fs");
  let DefPATHS = `${__dirname}/requests/`;
  fs.writeFileSync(`${DefPATHS}${FILENAME}.txt`, Data);
  return "success";
}

// Add Extra User in JSON file
function ReadExtraUserJSONWhileAddUser(UserName, pass, email, res) {
  let fs = require("fs");
  // Reading JSON data
  fs.readFile(`${__dirname}/ExtraUserList.json`, `utf-8`, (err, JSONdata) => {
    // Parsing JSON data
    let ParsedData = JSON.parse(JSONdata);

    // Checking if the user is already in the list
    let UserVarified = ParsedData.filter((user) => {
      return user.ExtraUser == UserName || user.ExtraUserEmail == email;
    });

    // If the user is not in the list, then add the user
    if (UserVarified.length > 0) {
      res.status(200).json({ status: "User Already Exist" });
    } else if (UserVarified.length === 0) {
      ParsedData.push({
        ExtraUser: UserName,
        ExtraUserPass: pass,
        ExtraUserEmail: email,
      });
      // Writing the new data to the JSON file
      fs.writeFile(
        `${__dirname}/ExtraUserList.json`,
        JSON.stringify(ParsedData),
        (err) => {
          if (err) {
            res.status(200).json({ status: "Not Added" });
          } else if (!err) {
            res.status(200).json({ status: "User Added" });
          }
        }
      );
    }
  });
}

// Checking if the user is already in the list or not
function ExtraUserVerify(UserName, Password, res) {
  let fs = require("fs");
  // Reading JSON data
  fs.readFile(`${__dirname}/ExtraUserList.json`, `utf-8`, (err, JSONdata) => {
    // Parsing JSON data
    let ParsedData = JSON.parse(JSONdata);

    // Checking if the user is already in the list
    let UserVarified = ParsedData.filter((user) => {
      return user.ExtraUser == UserName && user.ExtraUSerPass == Password;
    });

    // If the user is not in the list, then add the user
    if (UserVarified.length > 0) {
      res
        .status(200)
        .json({ status: "success", userCode: UserVarified[0].ExtraUser });
    } else if (UserVarified.length === 0) {
      res.status(200).json({ status: "failed" });
    }
  });
}

// Delete Extra User in JSON file
function DeleteExtraUser(UserName, Password, Email, res) {
  let fs = require("fs");
  // Reading JSON data
  fs.readFile(`${__dirname}/ExtraUserList.json`, `utf-8`, (err, JSONdata) => {
    // Parsing JSON data
    let ParsedData = JSON.parse(JSONdata);

    // Checking if the user is already in the list
    let UserVarified = ParsedData.filter((user) => {
      return (
        user.ExtraUser == UserName &&
        user.ExtraUserPass == Password &&
        user.ExtraUserEmail == Email
      );
    });

    // If the user is not in the list, then add the user
    if (UserVarified.length > 0) {
      var index = ParsedData.findIndex((userName) => {
        return (
          userName.ExtraUser == UserName &&
          userName.ExtraUSerPass == Password &&
          userName.ExtraUserEmail == Email
        );
      });
      ParsedData.splice(index, 1);
      // Writing the new data to the JSON file
      fs.writeFile(
        `${__dirname}/ExtraUserList.json`,
        JSON.stringify(ParsedData),
        (err) => {
          if (err) {
            res.status(200).json({ status: "failed" });
          } else if (!err) {
            res.status(200).json({ status: "success" });
          }
        }
      );
    } else if (UserVarified.length === 0) {
      console.log("User Not Found");
      res.status(200).json({ status: "failed" });
    }
  });
}

// Sending all user data to the front end
function SendAllUserData(req, res) {
  let fs = require("fs");
  // Reading JSON data
  fs.readFile(`${__dirname}/ExtraUserList.json`, `utf-8`, (err, JSONdata) => {
    // Parsing JSON data
    let ParsedData = JSON.parse(JSONdata);
    //  Getting all the user name
    var final = [];
    ParsedData.forEach((element) => {
      var element1 = element.ExtraUser;
      var element2 = element.ExtraUserPass;
      var element3 = element.ExtraUserEmail;
      final.push({
        username: element1,
        password: element2,
        email: element3,
      });
    });
    var reqTocken = req.body.token;
    var resTocken = Admin_Code.includes(reqTocken);
    if (resTocken == true) {
      res.status(200).json({ status: "success", data: final });
    } else if (resTocken == false) {
      res.status(200).json({ status: "failed" });
    }
  });
}

// Exporting Functions
module.exports = {
  SaveUserRequest: SaveRequestData,
  ReadExtraUserJSONWhileAddUser: ReadExtraUserJSONWhileAddUser,
  ExtraUserVerify: ExtraUserVerify,
  DeleteExtraUser: DeleteExtraUser,
  SendAllUserData: SendAllUserData,
  Auth_Code: Admin_Code,
};
