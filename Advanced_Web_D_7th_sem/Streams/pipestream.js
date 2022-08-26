var fs=require("fs");

//if creating .js file
var reader=fs.createReadStream('array2.js');
var writer=fs.createWriteStream('test1.js');


//if creating .jpg file
// var reader=fs.createReadStream('imge.jpg');
// var writer=fs.createWriteStream('test1.jpg');

//if creating .txt file
// var reader=fs.createReadStream('imge.txt');
// var writer=fs.createWriteStream('test1.txt');

writer.on('pipe',()=>{
    console.log('Something is piping into the reader');
});
reader.pipe(writer);