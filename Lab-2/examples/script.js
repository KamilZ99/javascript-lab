
function sum(a, b)
{
    return a + b;
}

console.log(sum(1, 2));

let operation = function(a, b)
{
return a*b;
}


console.log(operation(1, 2))

operation = sum;
console.log(operation(1, 2))

console.log(typeof operation);

let filter = (val) => val === 3;
console.log(filter(3));

// tablica
let arr = [2, 4, 5, 2, 4, 3, 9, 3];

function select(array, filter){

    let result = [];
    for(let item of array){

        if(filter(item))
        {
                result.push(item);
        }
        return result;
    }

}

console.log(select(arr, i=>4));


function Car(prodYear, model, brand)
{

    this.prodYear = prodYear;
    this.model = model;
    this.brand = brand;
    this.format = function(){
        return `rok produkcji: ${this.prodYear}, model: ${this.model} `;
    }

    

}

let car = new Car(2020, 'Audi4', 'Audi');
console.log(car);

let obj = {

    name: 'Adam',
    birth: 2000,
    age: function()
    {
        return 2023 - this.birth;
    }
};
console.log(obj);
console.log(obj.age());


function varargs()
{
    let sum = 0
    for (let item of arguments)
    {
        sum += item;
    }
    return sum;

}
obj.id = 10;
delete obj.name;
delete arr;
console.log(varargs());
eval("2 + 3");



function Car(model, power)
{

        return {
            "model" : model,
            "power" : power
        }
    
}

let audi = Car("audi", 200);
console.log(audi);
audi.drive = function(speed)
{
 console.log("Drive with speed " + speed);
}
console.log(audi.drive(100));

for (prop in audi)
{
    console.log(prop);

}