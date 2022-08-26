var buf1=Buffer.from('ABCD');
var buf2=Buffer.from('ABCD');
var result=buf1.compare(buf2);

if(result==0)

{
    console.log("Equal variables");
}
else{
    console.log("Unequal");
}

console.log(result);  // three posible values : 0(when equal) , 1(when the ascii val of first var is greater than that if second) , -1(if unequal)
