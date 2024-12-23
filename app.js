const chalk = require ('chalk');
const yargs = require('yargs');
const notes =  require('./notes.js')

// const msg = getNotes();
// console.log(msg);

// const greenMsg = chalk.blue.bold('Success!')
// console.log(greenMsg);

yargs.command ({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
});

yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        // body: {
        //     describe: 'Note Body',
        //     demandOption: true,
        //     type: 'string'
        // }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
});

yargs.command({
    command: 'List',
    describe: 'List a new note',
    builder: {
        title: {
            describe: 'Note list',
            demandOption: true,
            type: 'string'
        }
        // body: {
        //     describe: 'Note Body',
        //     demandOption: true,
        //     type: 'string'
        // }
    },
    handler() {
        notes.listNotes()
    }
    
});

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title: ' + argv.title)
        console.log('body: ' + argv.body)
    }
});

yargs.parse()

// console.log(yargs.argv)


// console.log(chalk.blue.bgred.bold('Hello world!'));



// const validator = require('validator');
// console.log(validator.isEmail('example.com'));
// console.log(validator.isURL('http://www.google.com'));
// // const fs = require('fs')
// fs.writeFileSync('write.txt', 'This is the first calls of Node.js.\n')
// fs.appendFileSync('write.txt', 'My name is Raheem.\n')