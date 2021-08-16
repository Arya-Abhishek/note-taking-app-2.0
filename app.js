const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

yargs.command({
    command: 'add', 
    describe: 'Add a new note', 
    handler: function() {
        console.log('Adding notes');
    }
})


yargs.command({
    command: 'remove', 
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note')
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function() {
        console.log('Displaying all the notes!')
    }
})

yargs.command({
    command: 'read',
    describe: 'reading the notes',
    handler: function() {
        console.log('Reading a note')
    }
})

yargs.argv
// imp to run