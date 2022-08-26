var fs=require("fs");
var data='This is node.js class';
//crate a writable stream
var writer=fs.createWriteStream('test.txt');
//write the datab to stream with encoding to utf8
writer.write(data,'UTF8');
//mark the end of file
writer.end();
//handle the stream events-->finish and error 
writer.on('finish',function(){
    console.log("Write Completed");
});
writer.on('error',function(err){
    console.log(err);
});