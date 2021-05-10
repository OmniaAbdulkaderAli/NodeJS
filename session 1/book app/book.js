const yargs = require('yargs')
const chalk = require('chalk')
const myMethods = require('./functions')

yargs.command({ 
    command:'addBook',
    describe: ' add new books',
    builder:{ Title: {type:'string', demandOption: true}, auther:{type:'string', demandOption: true}},
    handler:function(argv){
        //  console.log(argv)
        let book ={ title: argv.Title, auther: argv.auther}
        myMethods.newBook(book)
    }
})       
yargs.command({ 
    command:'showAll',
    handler:function(){
        // console.log(`addbook : ${argv}`)
        myMethods.showAll()
    }
}) 

yargs.command({ 
    command:'delBook',
    builder: 
    {title: {type:'string',demandOption :true }},
    handler:function(argv){
        myMethods.deleteBook(argv.title)
    }
}) 


yargs.argv