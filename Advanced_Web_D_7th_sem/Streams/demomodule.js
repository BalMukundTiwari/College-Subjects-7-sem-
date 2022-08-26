var http=request('http');
var dt=require('./myfirstmodule');

http.createserver(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("The date and time are :"+dt)
})