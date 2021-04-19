const https = require('https');
const _externalUrl ='https://jsonplaceholder.typicode.com/posts';

const externalApiUSingHttp = (callback)=>{
    https.get(_externalUrl, (resp)=>{
        let data = '';

        //A CHUNK OF DATA HAVE BEEN RECEIVED
        resp.on('data', (chunk)=>{
            data+=chunk;
        })
        //this data was handled asynchronously...
        resp.on('end', ()=>{
            return callback(data)
        })
    }).on('error', (err)=>{
        console.log(`error message: ${err.message}`)
    })
}
//the module was exported to task.js
module.exports.callApi = externalApiUSingHttp;