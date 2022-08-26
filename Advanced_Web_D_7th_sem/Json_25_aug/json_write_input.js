const fs=require('fs');
var prompt=require('prompt-sync')();
var student=new Object();
student.name=prompt("Enter the name of student : ");
student.age=prompt("Enter the age of student :");
student.gender=prompt("Enter the gneder of student :");

let data=JSON.stringify(student,null,2);

fs.appendFile('student0.json',data,(err)=>{
    if(err) throw err;
    console.log('Data updated to file');
})