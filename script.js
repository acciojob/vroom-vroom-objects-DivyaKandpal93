class Car{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    getMakeModel(){
        return `${this.make} ${this.model}`;
    }
}

class SportsCar extends Car{
    constructor(make, model, topSpeed){
        super(make,model);
        this.topSpeed = topSpeed;
    }
    getTopSpeed(){
        return this.topSpeed;
    }
}

const sportsCar = new SportsCar("Ferrari", "Testarossa", 200);
console.log(sportsCar.make); // Output: Ferrari
console.log(sportsCar.model); // Output: Testarossa
console.log(sportsCar.topSpeed); // Output: 200


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
