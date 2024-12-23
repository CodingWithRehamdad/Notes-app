const { default: chalk } = require('chalk');
const fs = require('fs');

const getNotes = function(){
    return 'Write Notes....'
}

const addNote = function(title, body) {
    const notes = loadNotes()
    const duplicatNotes = notes.filter(function (note){
        return note.title === title
})

    debugger
    
    if (duplicatNotes.length === 0){
        notes.push({
            title: title,
            body: body
    });
    saveNotes(notes)
    console.log('New note added')
}
else{
    console.log('Note title taken')
}
}

const removeNote = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note){
        return note.title !== title
    })
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your Notes'))
    notes.forEach(note => {
    console.log(note.title)    
    });  
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
    try {
        const dataBuffer = fs.readFileSync('notes.json')
    const dataJson = dataBuffer.toString()
    return JSON.parse(dataJson)
    }
     catch (error) {
        return[]
    }
    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}