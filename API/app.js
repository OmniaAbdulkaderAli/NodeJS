//const request = require('request')
const https = require('https')

const url = 'https://jsonplaceholder.typicode.com/albums'

// request({url:apiUrl, json:true} ,(error, {body})=>{
//     if(error) console.log(error.message)
//     else console.log(body)
   
// })


const myRequest = https.request(url , (response)=>{
    let data = ''
    response.on('data', (chunk)=>{
        data = data + chunk.toString()
    })
    response.on('end',()=>{
        const body = JSON.parse(data)
        console.log(body)
    })  
})
myRequest.on('error', (error)=> console.log('error'))
 
myRequest.end()