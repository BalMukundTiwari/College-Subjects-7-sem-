var buf1=Buffer.from('wow');
var buf2=Buffer.from('hello');
var buf3=Buffer.concat([buf1,buf2],10);
console.log("The contents are "+buf3.toString());