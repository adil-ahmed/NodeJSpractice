const fs = require('fs'); 
const _ = require('lodash');
const yargs = require('yargs');

const app2 = require('./app2.js');
var titleOptions = {
    describe : 'Title of a note',
    demand : true,
    alias : 't'
};
var bodyOptions = {
    describe : 'Body of a note',
    demand : true,
    alias : 'b'

}

const argv = yargs
    .command('add', 'Add a new note', {
    // title : {
    //     describe : 'Title of a note',
    //     demand : true,
    //     alias : 't'
    // },
    // body : {
    //     describe : 'Body of a note',
    //     demand : true,
    //     alias : 'b'
    // }
    title : titleOptions,
    body : bodyOptions

})
.command('list', 'List of all notes')
.command('read','Read a note', {
    title : titleOptions
})
.command('remove', 'Remove a note', {
    title : titleOptions
})
.help()
.argv;
//var command = process.argv[2];
var command = argv._[0];
console.log('Command: ' ,command);
//console.log('Process: ',process.argv);
console.log('Yargs', argv);

if(command === 'add')
{
    //console.log("Adding notes");
    var note = app2.addNotes(argv.title,argv.body);
    if(note)
    {
        console.log('Note created\n');
        //console.log(`Title: ${note.title} \n Body: ${note.body}`);
        app2.logNote(note);
    }
    else{
        console.log('Title already taken');
    }
}
else if(command === 'list')
{
    //console.log("Listing all notes");
    var allNotes = app2.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((note) => {
        return app2.logNote(note);
    });
}
else if(command === 'read')
{
    //console.log('Fetching notes');
    var note = app2.readNotes(argv.title);
    if(note)
    {
        console.log('Note found\n');
        //console.log(`Title: ${note.title}\n Body: ${note.body}`);
        app2.logNote(note);
    }
    else{
        console.log('Note not found');
    }
}
else if(command === 'remove')
{
    //console.log('Removing notes');
    var notesRemoved = app2.removeNotes(argv.title);
    var message = notesRemoved ? "Note was removed" : "note not found";
    console.log(message);
}
else
{
    console.log("Command not recognized");
}