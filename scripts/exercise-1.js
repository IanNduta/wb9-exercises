"use strict";

class Employee {

    constructor(id, firstName, lastName, jobTitle, payRate){
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
}

let employee1 = new Employee(1, "Ian", "Nduta", "Graphic Artist", 42.50);
console.log(`Employee ${employee1.firstName} ${employee1.lastName} created`)
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`pay rate is ${employee1.payRate}`);