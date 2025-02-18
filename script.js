class Car{
    constructor(make, model){
        this._make = make;
        this._model = model;
    }
    getMakeModel(){
        return console.log(`${this._make} ${this._model}`);
    }
}
class SportsCar extends Car{
    constructor(make, model, topSpeed){
        super(make,model);
        this._topSpeed = topSpeed;

    }
    getTopSpeed(){
        return console.log(this._topSpeed);
    }
}
const car = new Car("ferrari","new");
car.getMakeModel();
const sports = new SportsCar("tata","mata",200);
sports.getTopSpeed();

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
