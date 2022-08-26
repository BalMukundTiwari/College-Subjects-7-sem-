const buf=Buffer.from('this is a buffer');
console.log(buf.includes('this'));  //prints true

console.log(buf.includes('is'));  // prints true

console.log(buf.includes(Buffer.from('a buffer')));  // prints true

console.log(buf.includes(97));  // prints true as 97 is the ascii value of a