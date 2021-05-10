
const fs= require('fs')


const writeFile =(customers) =>{fs.writeFileSync('customer.json', JSON.stringify(customers))
return customers}
const readFile =()=>{
    try{
        customers =JSON.parse(fs.readFileSync('customer.json').toString())
    } catch(e){
        customers= [ ]
    }
    return customers
}


const addNew =(customer)=> {
    readFile();
    customers.push(customer)
    writeFile(customers)

}

const fCustomer=(findcustomer)=>{
   let customers = readFile();
    Element = customers.find(customer =>{return customer.id == findcustomer})
    console.log(Element)

}

const deleteCustomer =(customerId)=>{
  
    let customers = readFile();
    index = customers.findIndex( customer => {return customer.id == customerId})
    if (index == -1) console.log ('customer not exist');
   else {customers.splice(index, 1)
       writeFile(customers)
       console.log('deleted')}
   }


module.exports= {addNew,fCustomer, deleteCustomer} 