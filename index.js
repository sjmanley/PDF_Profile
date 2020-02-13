const genHTML = require('./genHTML');
const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');
const pdf = require('html-pdf');

const gitHubData = {
  user: "", name: "", color: "", location: "", company: "", bio: "", following: "", followers: "", public_repos: "", public_gists: "", html_url: "", avatar_url: "", blog: ""
};

function userPrompt() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'user',
      message: 'GitHub username?',
    },
    {
      type: 'checkbox',
      message: 'Choose color:',
      name: 'color',
      choices: [
        'blue',
        'green',
        'red',
        'pink',
      ],
    },
  ]).then((data) => {
    const filename = data.user.toLowerCase().split(' ').join('') + '.html';
    gitHubData.user = data.user;
    gitHubData.color = data.color;

    axios
      .get(`https://api.github.com/users/${data.user}`)
      .catch(err => {
        console.log(`User not found`);
        process.exit(1)
      })
      .then((res) => {
          gitHubData.name = res.data.name;
          gitHubData.location = res.data.location;
          gitHubData.company = res.data.company;
          gitHubData.bio = res.data.bio;
          gitHubData.public_repos = res.data.public_repos;
          gitHubData.public_gists = res.data.public_gists;
          gitHubData.followers = res.data.followers;
          gitHubData.following = res.data.following;
          gitHubData.html_url = res.data.html_url;
          gitHubData.avatar_url = res.data.avatar_url;
          const html = genHTML.generateHTML(gitHubData);
          writeToFile(filename, html);
      });
  });
}

function writeToFile(fileName, html) {
  fs.writeFile(fileName, html, (err) => {
    if (err) {
      return console.log(err);
    }
  });
  const options = {
    format: 'Letter',
  };
  pdf.create(html, options).toFile(`./${gitHubData.user}.pdf`, (err) => {
    if (err) return console.log(err);
    console.log('PDF Created!');
  });
}

userPrompt();
