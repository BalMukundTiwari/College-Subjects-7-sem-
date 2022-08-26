const buf1=Buffer.from('buffer');
const buf2=Buffer.from(buf1);
// console.log(buf1);     // it will print the ascii values of each element of the string 

console.log(buf1.toString());  // prints : buffer

console.log(buf2.toString()); // prints : buffer