const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

const colors = {
    red: {

    },
    orange: {

    },
    yellow: {

    },
    green: {

    },
    blue: {

    },
    purple: {

    },
    black: {

    },
    white: {
        
    }
}

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
    const x = res.data;
    const avatar =  x.avatar_url;
    const login = x.login;
    const location = x.location;
    const htmlURL = x.html_url;
    const blog = x.blog;
    const bio = x.bio;
    const repos = x.public_repos;
    const followers = x.followers;
    const following = x.following;
    const name = x.name


    }
  