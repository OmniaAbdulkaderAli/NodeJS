const yargs = require('yargs')
const chalk = require('chalk')
const myMethod = require('./functions')


yargs.command({
    command:'addCustomer',
    describe:' add new customer',
    builder: {id:{trype: 'string' , demandOption:true },
            name:{type:'string', demandOption:true},
            balance:{type:'string', demandOption:true}
   },
    handler:function(argv){
       // console.log(`the id is : ${argv.id } under name ${argv.name} , have ${argv.balance} Kd`)
   let customer = {id: argv.id , name: argv.name , balance: argv.balance}
    myMethod.addNew(customer)
}
})

yargs.command({
    command:'findCustomer',
    builder:{id:{type:'string', demandOption:true}},
    handler:function(argv){
        myMethod.fCustomer(argv.id)
    }
})
yargs.command({
    command:'delCustomer',
    builder: {id: {type:'string',demandOption :true }},
    handler:function(argv){
        myMethod.deleteCustomer(argv.id)
    }
})
yargs.argv

