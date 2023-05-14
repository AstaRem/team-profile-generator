// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name, id, email){
        this._name = name;
        this._id = id;
        this._email = email;
    }
    getName(){
        return this._name;
    }

    getId(){
        return this._id;
    }

    getEmail(){
        return this._email;
    }


}

const rasma = new Employee("Rasma", "2", "rasma@rasma.com");
console.log(rasma.getName());

module.exports = Employee;