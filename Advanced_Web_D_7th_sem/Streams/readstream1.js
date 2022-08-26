const fs=require('fs');
const http=require('http');
const server=http.createServer();
// const server=require('http').createServer();

server.on('request',(req,res)=>{
    const src=fs.createReadStream('test.txt');
    src.pipe(res);   //piping the content to response.
});
server.listen(5000);  //server will respond to the port no 2000

