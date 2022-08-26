const buf1=Buffer.from('This is node.js class');
// console.log(buf1);
console.log(buf1.toString('hex'));

const buf2=Buffer.from('54686973206973206e6f64652e6a7320636c617373','hex'); // second parameter is the encoding method used to decode the first parameter
// console.log(buf2);
console.log(buf2.toString('utf8'));  // we can pass the encoding format in which we want output , by default its utf8

buf=new Buffer.alloc(50);
n=buf.write('This');
console.log('The number of octets are:' + n);