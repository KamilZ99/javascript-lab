/*
* Zdefinuj funkcję która odszuka pola obiektu typu array i zwróci sumę tablicy
dla elementów typu number

*/

let obj =
{

    a: 34,
    b:"abcd",
    fun: function(){
        return null;
    }
}
obj.arr = [1,3, "abcd", true, null, {prop: 3}];

function sumOfArray(obj) {
    let sum = 0;
    for (let prop in obj) {
        if (Array.isArray(obj[prop])) {
            for (let value of obj[prop]) {
                if (typeof value === 'number') {
                    sum += value;
                }
            }
        }
    }
    return sum;
}

console.log(sumOfArray(obj))