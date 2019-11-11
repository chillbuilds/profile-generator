const axios = require("axios");
const inquirer = require("inquirer");
const pdf = require("html-pdf");
const colors = require("./colors");
var options = { "height": "3in",
                "width": "8in"};

inquirer
  .prompt([
    {type: "input",
    message: "What's your GitHub username?",
    name: "username"},
    {type: "list",
    name: "color",
    message: "What's your favorite color?",
    choices: ["red", "orange", "yellow", "green", "blue", "purple", "black"]}
  ])

  .then(function(data) { 
                 
    const queryUrl = `https://api.github.com/users/${data.username}`;
    axios.get(queryUrl).then(function(res) {
      html(res, data);
      const num = 45;
      module.exports = num;
    });
  });

function html(res, data) {
    const y = data.color;
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
        background: ${colors[data.color].main};
        height: 100%;
      }

      a {
          text-decoration: none;
          color: black;
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
            padding-left: 140px;
            left: -120px;
            bottom: 20px;
            background: ${colors[data.color].avatar};
        }
        #github-icon {
            position: absolute;
            width: 8%;
            top: 214px;
            left: 5px;
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
            top: 227px;
            left: 130px;
            font-size: 26px;
        }
        #name {
            position: absolute;
            text-align: left;
            left: -215px;
            top: -15px;
            font-size: 50px;
            padding: 10px 500px;
            padding-bottom: 0px;
            background: ${colors[data.color].header};
            z-index: -10;
        }
        #bio {
            font-size: 20px;
            position: absolute;
            top: 85px;
            left: 290px;
        }

        #followers {
            font-size: 24px;
            position: absolute;
            top: 228px;
            left: 275px;
            padding-bottom: 19px;
        }

        #following {
            font-size: 24px;
            position: absolute;
            top: 228px;
            right: 240px;
        }

        #repos {
            font-size: 24px;
            position: absolute;
            top: 228px;
            right: 60px;
        }

        #portfolio {
            position: absolute;
            font-size: 24px;
            top: 190px;
            left: 275px;
        }

        .link-icon {
            position: relative;
            top: -2px;
            width: 4%;

        }

        #github {
            position: absolute;
            font-size: 24px;
            top: 190px;
            left: 475px;
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
        <img id="loc-icon" src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/94-256.png" />
        <div class="pageTxt" id="loc">
        <a target="_blank" href="https://www.google.com/maps/place/${location}">${location}</a></div>
        <div id="name">${login}</div>
        </div>
        </div>
        <div id="headerTxt">
            <div id="bio">Bio: ${bio}</div>
            <div id="portfolio"><a href="${blog}" target="_blank"><img class="link-icon" src="https://cdn0.iconfinder.com/data/icons/entypo/80/link5-256.png">
            Portfolio</a></div>
            <div id="github"><a href="${htmlURL}" target="_blank"><img class="link-icon" src="https://cdn0.iconfinder.com/data/icons/entypo/80/link5-256.png">
            GitHub</a></div>
            <div id="followers">Followers: ${followers}</div>
            <div id="following">Following: ${following}</div>
            <div id="repos">Repositories: ${repos}</div>
        </div>

        <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
        <script src="./index.js"></script>
        </body>
        </html>
        `;

  pdf.create(html, options).toFile("./test2.pdf", function(err, res) {
    if (err) return console.log(err);
    console.log("\n****************************\n  PDF successfully created\n****************************");
  });
}