const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
var x = "";


inquirer.prompt([  
    // {type: "input",
    // message: "What's your GitHub username?",
    // name: "username"},
    // {type: "input",
    // message: "What's your favorite color?",
    // name: "color"}
])

.then(function({ username }) {                     //${username}
    const queryUrl = `https://api.github.com/users/heliumface770`;

    axios.get(queryUrl).then(function(res) {
        html(res);
    });
});

function html(res){
    let x = res.data;
    var avatar =  x.avatar_url;
    console.log(avatar);
    }
  