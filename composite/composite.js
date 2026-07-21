class Employee {
    constructor(lastname, firstname, salary) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.salary = salary;
    }
    calculerSalaire() {
        return this.salary;
    }
    afficher() {
        console.log(`${this.lastname} ${this.firstname} - ${this.salary} €`);
    }
}

class Service {
    constructor(name) {
        this.name = name;
        this.elements = [];
    }

    add(element) {
        if (typeof element.calculerSalaire !== 'function') {
            throw new Error('Élément invalide');
        }
        this.elements.push(element);
    }

    calculerSalaire() {
        return this.elements.reduce((total, element) => total + element.calculerSalaire(), 0);
    }

    afficher() {
        console.log(this.name);
        this.elements.forEach(el => el.afficher());
    }
}


const serviceDSIN = new Service("DSIN");
const serviceBigData = new Service("Big Data");
const serviceJava = new Service("Java Dev");

const employee1 = new Employee("Cécile", "RASPEY", 10000);
const employee2 = new Employee("Bilel", "BECHKAR", 8000);
serviceDSIN.add(employee1);
serviceDSIN.add(employee2);
serviceDSIN.afficher();

const employee3 = new Employee("JB", "RANMEY", 7500);
const employee4 = new Employee("Jane", "DOE", 3500);
serviceBigData.add(employee3);
serviceBigData.add(employee4);
serviceBigData.afficher();

const employee5 = new Employee("Kevin", "GUINEAU", 7500);
const employee6 = new Employee("Paul", "MARTIN", 3500);
serviceJava.add(employee5);
serviceJava.add(employee6);
serviceJava.afficher();

totalSalaire = serviceDSIN.calculerSalaire() + serviceBigData.calculerSalaire() + serviceJava.calculerSalaire();
console.log(`Total salaire : ${totalSalaire} €`);
