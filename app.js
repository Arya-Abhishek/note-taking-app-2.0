const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./utils.js')

console.log(yargs.argv)

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new Note!!')
    }
})