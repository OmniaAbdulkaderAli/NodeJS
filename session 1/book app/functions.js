const fs = require('fs')

// books = [ {title: 'book title ', author: ' name'}]
// fs.writeFileSync('book.json' , JSON.stringify(books))
// const data= fs.readFileSync('book.json')
// const dataString= data.toString()
// console.log(JSON.parse(dataString))

const writeFile =(books)=>{ 
    fs.writeFileSync('books.json', JSON.stringify(books))
    return books}

const readFile =()=>{
    try{
        books=JSON.parse(fs.readFileSync('books.json'.toString()))
    }
     catch(e){  
         books=[ ]
     }
     return books
}

const newBook =function(book){
   
        books=readFile();
        console.log(book)
        books.push(book)
       writeFile(books);
     
   
}// end function
const showAll =()=>{
    books = readFile()
    books.forEach(book => {
        console.table(book)
    });
  
}
const deleteBook =(bookTitle)=>{
  
        let books = readFile();
        index =books.findIndex( book => {return book.title == bookTitle})
        if (index == -1) console.log(' book not found')
        else  {books.splice(index, 1)
            writeFile(books)
            console.log('deleted')}
        
}
module.exports={newBook,showAll, deleteBook}