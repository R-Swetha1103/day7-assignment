// Person details

class Person {
    constructor(name, age, gender, designation) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.designation = designation;
    }
    get pName() { return this.name; }
    set pName(p) { this.name = p; }
    get pAge() { return this.age; }
    set pAge(p) { this.age = p; }
    get pId() { return this.id; }
    set pId(p) { this.Id = p; }
    get pCompany() { return this.company; }
    set pCompany(p) { this.company = p; }
}
let person = new Person('Swetha', 24, 667,'wipro');
console.log(person);


//calculate the uber prize

class Uber {
    constructor(distanceInKm, timeInMinutes, waitingcharge) {
        this.distance = distanceInKm;
        this.time = timeInMinutes;
        this.waitingcharge = waitingcharge;
        this.basecharge = 20; 
        this.costPerKm = 10; 
       
    }
    calculatedPrice() {
        let charge = this.basecharge + (this.distance * this.costPerKm);
        let totalcost = charge * this.waitingcharge;
        return totalcost;
    }
}
let calculate = new Uber(10, 20, 1.2); 
let price = calculate.calculatedPrice();
console.log(`Estimated Uber price in INR: ₹${price}`);


