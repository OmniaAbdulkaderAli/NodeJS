const fs = require('fs')
const charlk = require('chalk')

const readFile = ()=>{

    try{ const tasks = JSON.parse(fs.readFileSync('todo.json'))
    return(tasks)}
    
    catch(e){
        return []
    }
}
const writeFile =(tasks)=> {
    fs.writeFileSync('todo.json' , JSON.stringify(tasks))
}

const addTodo =(title, content )=>{
const tasks = readFile()
let searchVal= tasks.find(task=> task.title ==title)
if (!searchVal){
tasks.push({title, content , status:false})
writeFile(tasks)
console.log(charlk.green.inverse(' added'))
}

else{console.log(charlk.red.inverse('this title alrady exist'))}
}

const deleteTodo =(titleTitle) =>{
    let tasks = readFile()
     let tasksAftetDelete = tasks.filter( task=> task.title !== titleTitle)
    if ( tasks.length > tasksAftetDelete.length){
        writeFile(tasksAftetDelete)
    }else
    console.log(charlk.red('task not exist'))
}
 

module.exports = {addTodo, deleteTodo}