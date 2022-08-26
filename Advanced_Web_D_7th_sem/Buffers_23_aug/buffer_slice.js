var buffer1 = Buffer.from('Classofnodejs');
var buffer2 = buffer1.slice(0, 13);  // first parameter is the starting index and second one is the last index of buffer 1
console.log(buffer2.toString());