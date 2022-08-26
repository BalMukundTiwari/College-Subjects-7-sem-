const data = {

    name: "Mukund Tiwary",
    age: 23,
    title: "Software development enthusiasist",
}

const jsonStr = JSON.stringify(data, ["age", 'name']);   // ['age','name'] -> onlt the keys passed in square bracket will be stringified.
console.log(data);
console.log(jsonStr);