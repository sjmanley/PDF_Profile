const fs =  require ("fs");
const fs =  require ("inquirer");

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "color",
        message: "What is your favorite color?"
      },
      {
        type: "input",
        name: "gitHub userNamen",
        message: "What is your GitHub username?"
      }
    /* Pass your questions in here */
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  });
];


function writeToFile(fileName, data) {

}

function init() {

init();
