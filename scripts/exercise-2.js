"use strict";
 
class Person{

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person{

    constructor(firstName, lastName, id, jobTitle, payRate){
        super(firstName, lastName);
        this.id = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
    getGrossPay(hourWorked){
        this.hourWorked = hourWorked;
        return this.hourWorked * this.payRate;
    }

}

let person1 = new Person("Ian", "Nduta");
let person2 = new Employee("john", "kevin",1, "UX Designer", 10.00);

let fullName = person1.getFullName();
let fullName2 = person2.getFullName();
let hoursWorked = person2.getGrossPay(20);
console.log(fullName);
console.log(fullName2);
console.log(hoursWorked);