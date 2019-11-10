const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");


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
        console.log(res);
      const repoNames = res.data.map(function(repo) {
          //data is array that contains all repos
        return repo.name;
      });

    //   const repoNamesStr = repoNames.join("\n");

    //   fs.writeFile("repos.txt", repoNamesStr, function(err) {
    //     if (err) {
    //       throw err;
    //     }

        // console.log(`Saved ${repoNames.length} repos`);
        console.log(res)
      });
    });
  