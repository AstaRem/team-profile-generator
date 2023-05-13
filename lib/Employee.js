// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name = "", id = "", email = ""){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return "Employee";
    }


}

// const rasma = new Employee("Rasma", "2", "rasma@rasma.com");
// console.log(rasma.getName());
// console.log(rasma.getId());
// console.log(rasma.getEmail());



module.exports = Employee;