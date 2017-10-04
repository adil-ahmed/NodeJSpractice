const fs = require('fs');

// var addNotes = (title,body) => {
//     console.log('Adding note',title,body);
    

// };

var fetchNotes = () =>
{
    try{
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);

    } catch(e)
    {
        return [];

    }

};
var saveNotes = (notes) =>
{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));

};
var addNotes = (title,body) => {
    //var notes = [];
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    

    // try{
    //     var noteString = fs.readFileSync('notes-data.json');
    //     notes = JSON.parse(noteString);

    // } catch(e)
    // {

    // }

    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });

    if(duplicateNotes.length === 0)
    {
        notes.push(note);
        // fs.writeFileSync('notes-data.json', JSON.stringify(notes));
        saveNotes(notes);
        return note;
    }

    


    
};
var getAll = () => {
    //console.log('Getting all notes');
    return fetchNotes();
}
var readNotes = (title) => {
    //console.log('Reading notes ', title);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => {
        return note.title === title;

    });

    return filteredNotes[0];
}
var removeNotes = (title) => {
    //console.log('Removing notes', title);
    //fetching notes
    var notes = fetchNotes();
    //removing notes from array by providing title
    var filteredNotes = notes.filter((note) => {
        return note.title !== title;
    });
    //saving array
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
    

}
var logNote = (note) =>
{
    console.log('--');
    console.log(`Title: ${note.title}\n Body: ${note.body}`);
}

module.exports = {
    addNotes,
    getAll,
    readNotes,
    removeNotes,
    logNote
}