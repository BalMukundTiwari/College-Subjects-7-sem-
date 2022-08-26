const person={
    firstName:'John',
    lastName:'Doe',
    email:'jdoe@example.com',

    info:function(){
        return `${this.firstName} ${this.lastName} and his email id is ${this.email}`
    }
  

};
console.log(person.info());