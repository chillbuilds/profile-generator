const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const pdf = require("html-pdf");
// var html = require("./generateHTML")
// var html = fs.readFileSync('./index.html', 'utf8');
var options = { format: "Letter" };

inquirer
  .prompt([
    // {type: "input",
    // message: "What's your GitHub username?",
    // name: "username"},
    // {type: "input",
    // message: "What's your favorite color?",
    // name: "color"}
  ])

  .then(function({ username }) {
    //${username}
    const queryUrl = `https://api.github.com/users/heliumface770`;

    axios.get(queryUrl).then(function(res) {
      html(res);
    });
  });

function html(res) {
  const x = res.data;
  const avatar = x.avatar_url;
  const login = x.login;
  const location = x.location;
  const htmlURL = x.html_url;
  const blog = x.blog;
  const bio = x.bio;
  const repos = x.public_repos;
  const followers = x.followers;
  const following = x.following;
  const name = x.name;
  console.log(avatar);

  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet">
  <style>
      body {
        font-family: 'Oswald', sans-serif;
      }

      .pageTxt {
          position: absolute;
          font-size: 300%;
          top: 2%;
          left: 25%;
        }
        #avatarJPG {
            position: relative;
            float: left;
            border-radius: 50%;
            width: 27%;
            padding: 4%;
            right: 20px;
            bottom: 20px;
            background: #00abe7;
        }
        #github-icon {
            position: absolute;
            width: 8%;
            top: 214px;
            right: 740px;
        }
        #loc-icon {
            position: absolute;
            width: 20px;
            right: 100px;
            left: 22%;
            top: 220px;
        }
        #loc {
            position: absolute;
            top: 224px;
            left: 130px;
            font-size: 30px;
        }
        #name {
            position: absolute;
            text-align: left;
            left: -200px;
            top: -15px;
            font-size: 50px;
            padding: 10px 500px;
            background: #F8A447;
            z-index: -10;
        }
        #ref {
            position: absolute;
            float: left;
            top: 800px;
            right: 20px;
            width: 100%;
        }
        </style>
        </head>
        <body>
        <div id="avatar-container">
        <div id="avatar">
        <img
        id="avatarJPG"
        src="${avatar}"
        />
        <img
        class="icon"
        id="github-icon"
        src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-256.png"
        />
        <img id="loc-icon" src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/94-256.png" />
        <div class="pageTxt" id="loc">${location}</div>
        <div id="name">${login}</div>
        </div>
        </div>
        <!-- <img id="ref" src="./images/design.png" /> -->
        <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
        <script src="./index.js"></script>
        </body>
        </html>
        `;

  pdf.create(html, options).toFile("./test2.pdf", function(err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
  });
}
