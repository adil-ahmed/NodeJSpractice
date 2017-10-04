/*********Taking object and converting it into string*********/
// var obj = {
//     name: 'Adil'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);



/*********Taking String and converting it into object ********/

// var personString = '{"name": "Adil","age": 23}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);



const fs = require('fs');

var originalNote = {
    title : 'Some title',
    body : 'Body of the object'
};
var originalNoteString = JSON.stringify(originalNote);
console.log(typeof originalNoteString);
console.log(originalNoteString);
fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);