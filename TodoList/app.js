// console.log(process.env.name)
// console.log(process.env.age)
const myTask= require('./task')
const chalk = require('chalk')
const yargs = require('yargs')
const { argv } = require('yargs')
yargs.command({
    command:'add',
    builder:{title :{type:'string,' , demandOption: true},
             content :{type:'string,' , demandOption: true}},
    handler:function(argv){
     myTask.addTodo(argv.title , argv.content)}
})

yargs.command({
    command:'delete',
    builder:{title :{type:'string,' , demandOption: true}},
    handler:function (argv) {
        myTask.deleteTodo(argv.title)
    }
})

yargs.argv