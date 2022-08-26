// const buf=Buffer.alloc(4,'9');    // IT WILL CREATE A VARIABLE NAMED buf OF SIZE 4 AND store the ascii value of second parameter.

// //  const buf=Buffer.alloc(4,9); //it will store the value passed a s second parameter 
// console.log(buf);


// second program for buffer fill
const buf=Buffer.alloc(5);
console.log(buf.fill('a'));
