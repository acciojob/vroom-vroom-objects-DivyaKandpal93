class Car{
    constructor(make, model){
        this._make = make;
        this._model = model;
    }
    getMakeModel(){
        return `${this._make} ${this._model}`;
    }
}
class SportsCar extends Car{
    constructor(make, model, topSpeed){
        super(make,model);
        this._topSpeed = topSpeed;

    }
    getTopSpeed(){
        return this._topSpeed;
    }
}
const car = new Car("ferrari","new");
console.log(car.getMakeModel());
const sports = new SportsCar("tata","mata",200);
console.log(sports.getTopSpeed());

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
