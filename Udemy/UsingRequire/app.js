const fs = require('fs'); 
const os = require('os'); 
const _ = require('lodash'); 
const app2 = require('./app2.js'); // including new file created by me

//fs.appendFileSync('Hello.txt', 'Hello world!'); // create a file and insert a data into newly created file
// var userInfo = os.userInfo();// tooks user information
// fs.appendFileSync('Hello.txt', `Hello ${userInfo.username} !`); // inserting data of user using OS module
//console.log(userInfo);

// var result = app2.add(3,8); //call function which is in differnt module
// console.log(result);//printing that

/**************if string then will print true,otherwise false *************/
console.log(_.isString('Node')); // checking wheather the value is sting or not by lodash module
console.log(_.isString(1)); // checking wheather the value is sting or not by lodash module



/*******if array has duplicate value then this function will remove that duplicates********/

let removeDuplicate = _.uniq(['Node', 1, 2, 1, 3, 4, 'Node', 4]);
console.log(removeDuplicate);