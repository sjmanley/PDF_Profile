// const fs =  require ("fs");
const inquirer = require("inquirer");

function promptUser() {
    return inquirer.prompt([
        {
            type: "checkbox",
            name: "color",
            message: "What is your favorite color?",
            choices: ["pink", "blue", "red", "green"]

        },
        {
            type: "input",
            name: "gitHub userNamen",
            message: "What is your GitHub username?"
        }])};

    promptUser()
        .then(function(answers) {
            const html = generateHTML(answers);
        
            return writeFileAsync("index.html", html);
          })
          .then(function() {
            console.log("Successfully wrote to index.html");
          })
          .catch(function(err) {
            console.log(err);
          });