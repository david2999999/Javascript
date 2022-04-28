function Car(make, model , year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

function Motorcycle(make, model, year) {
    //using call
    Car.call(this, make, model, year);
    this.numWheels = 2;
}

function Motorcycle2(make, model, year) {
    // using apply
    Car.apply(this, [make, model, year]);
    this.numWheels = 2;
}

function Motorcycle3() {
    Car.apply(this, arguments);
    this.numWheels = 2;
}