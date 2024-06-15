"use strict";

class Employee {

    constructor(id, firstName, lastName, jobTitle, payRate){
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
    promote(newJobTitle, newPayRate){
        this.jobTitle = newJobTitle;
        this.newPayRate = newPayRate;
    }

    getIntro(){
        let intro = `Hi! I'm ${this.firstName} ${this.lastName} and I am a ${this.jobTitle}`
        return intro;
    }

    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

let employee1 = new Employee(1, "Ian", "Nduta", "Graphic Artist", 42.50);
console.log(`Employee ${employee1.firstName} ${employee1.lastName} created`)
console.log("------------------------------------------------")
let fullName = employee1.fullName();
console.log("full name is " + fullName);
console.log("------------------------------------------------")
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`pay rate is ${employee1.payRate}`);

let employee2 = new Employee(7,"john", "jones", "software engineer", 50.80);
console.log(`Employee ${employee2.firstName}`);
console.log("------------------------------------------------")

employee1.promote("senior graphic arist", 60.90);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is ${employee1.newPayRate}`);

console.log("------------------------------------------------")

let intro = employee1.getIntro();
console.log(intro);