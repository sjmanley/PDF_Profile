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

    promptUser();

/* Pass your questions in here */
//   ])
//   .then(answers => {
//     // Use user feedback for... whatever!!
//   });


