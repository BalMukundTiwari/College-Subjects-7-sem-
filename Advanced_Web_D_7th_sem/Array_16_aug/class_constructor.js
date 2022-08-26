class Person{
    constructor(firstName,lastName,email){
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
    }
    info(){
        return `${this.firstName} ${this.lastName} and is email is ${this.email}`;
    }
}

let person=new Person('John' ,'Doe','doe@example.com');
console.log(person.info());