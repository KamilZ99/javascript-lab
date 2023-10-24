'use strict'
let vehicle = {

    power : 145,
    serialnumber : "1315231515",
    print: function(){
        return `power: ${this.power}, serialNumber: ${this.serialnumber}`;
    }
}

let car = Object.create(vehicle)
car.gears = 5;
console.log(car);
console.log(car.power);
console.log(car.print());

class Vehicle{

        static vehicleCounter = 0;
        
        #mileage
        #power
    constructor(power, serialnumber){
        this.#power = power;
        this.serialnumber = serialnumber;
        this.#mileage = 0;
    }

    get power(){
        return this.#power;
    }


    get millage(){
        return this.#mileage;
    }
    set serial(value){
        if (value)
        {
            this.serialnumber = value;
        }

    }

    static copy(obj){
        if (obj instanceof Vehicle){
            return new Vehicle(obj.power, obj.serialnumber);
        
        }else{
            throw new Error("Cant copy from other types, obj is note instance of Vehicle");
        }
    }



    print(){
        return `power: ${this.power}, serialNumber: ${this.serialnumber}`;
    }

}

class Car extends Vehicle{
    constructor(gears,power, serialnumber)
    {
        super(power,serialnumber);
        this.gears = gears;
    }
    print(){
        return `power: ${this.power}, serialNumber: ${this.serialnumber} gears: ${this.gears}, millage ${this.millage}`;
    }
}

let vehicle1 = new Vehicle(123, "612331");
console.log(vehicle1)
console.log(vehicle1.power);
vehicle.serialnumber = "";
console.log(vehicle1);
let v2 = new Vehicle(123, "135315131355");
console.log(Vehicle.vehicleCounter);

car = new Car(5, 213, "515531513");
console.log(car.print());
console.log(car.millage);

let copy = Vehicle.copy(car);
console.log(copy);

let map = new Map();
map.set(1, car);
map.set(2, {name: "adam"});
console.log(map.size);
console.log(map);
console.log(map.get(1));
console.log(map.has(3));
map.delete(1);
console.log(map);