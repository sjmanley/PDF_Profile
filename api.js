const axios = require("axios");

const api = {
    getGitHubUser(userName) {
        return axios
            .get(`https://api.github.com/users/${userName}`)
            .catch(err => {
                console.log(err + "user not found");
                process.exit(1);
            });
    },

    getUserStars(userName) {
        return axios
            .get(`https://api.github.com/users/${userName}/repos`)
    //get total number from star gazers
    
            .catch(err => {
                console.log(err + "user not found");
                process.exit(1);
            });
}}
module.exports = api

