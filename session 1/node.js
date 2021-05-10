 const chalk = require('chalk')
const { string, argv } = require('yargs')
const  yargs  = require('yargs')

// const fs = require('fs')
// //fs.writeFileSync('text.text','hello from node')
// //fs.appendFileSync('test.js' , '  const omnia = function(){ console.log(chalk.blue(\'hello omnia\'))}; module.exports={omnia}')
// //const test = require('./test')
// //test.omnia()
// console.log(chalk.yellow('hi omnia'))
// console.log(process.argv)

yargs.command({
    command:'add',
    describe:'add data',
    handler:function(){
        console.log(chalk.yellow('inside yargs coomand'))
    }
})

yargs.command({
    command:"firstApp",
    describe:'handel user name via terminal',
    buldier:{
        fName:{describe: 'get user name',
                type: 'string'},
        LName:{describe: 'get user last name',
                type: 'string'}
    },
    handler:function(){
console.log(`your fill name is ${argv.fName} ${argv.LName}`)
    }
})

yargs.argv