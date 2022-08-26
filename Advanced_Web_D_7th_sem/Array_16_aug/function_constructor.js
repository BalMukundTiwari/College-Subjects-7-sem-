
function Person(first,last,email){
    this.firstname=first;
    this.lastName=last;
    this.email=email;
    this.info=function(){
        return `${this.firstname} ${this.lastName} and his email is ${this.email}`;
    }
}
let person=new Person('John' ,'Doe','jdoe@example.com');
console.log(person.info());