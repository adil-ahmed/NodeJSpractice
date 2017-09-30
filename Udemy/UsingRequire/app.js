const fs = require('fs');
const os = require('os');
const app2 = require('./app2.js'); // including new file created by me

//fs.appendFileSync('Hello.txt', 'Hello world!'); // create a file and insert a data into newly created file
// var userInfo = os.userInfo();// tooks user information
// fs.appendFileSync('Hello.txt', `Hello ${userInfo.username} !`); // inserting data of user using OS module

var result = app2.add(3,8);
console.log(result);
//console.log(userInfo);