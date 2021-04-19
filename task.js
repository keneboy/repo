const http = require('http');
const statusCode = 200;
const port = process.env.PORT || 1000;
const {callApi} = require('./external');
const fs = require('fs')
// A server was created using the http createserver method
http.createServer((req,res)=>{
    if(req.url === '/request'){
        //this is where the promise was handled from the external.js module ...
        callApi((response)=>{
            res.writeHead(statusCode, {"Content-Type":"application/json"});
            res.write(response);
            res.end()
            fs.writeFile('result/posts.json', response, ()=>{
                console.log(`file created...`)
            })
        })
       
    }
})
.listen(port);
console.log(`listening at port ${port}`)
