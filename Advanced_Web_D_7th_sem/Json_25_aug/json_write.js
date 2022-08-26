const fs = require('fs');
let student = {

    name: "Mukund Tiwary",
    age: 23,
    title: "Software development enthusiasist",
    car: 'tata',
}

let data = JSON.stringify(student, ["age", 'name', 'title']);
fs.writeFile('student0.json', data, (err) => {        //this line is used to create a file named student0.json and save the values.
    if (err) throw err;
    console.log('Data written to file');
})