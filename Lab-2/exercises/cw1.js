let arr = ["adam", "ewa", "karol"];
let r1 = arr
.filter(item => item.endsWith("a"))
.map(item => item.toUpperCase());
console.log(r1);


let arr2 = [2, 5, 7, 2, 3, 6];

let r2 = arr2
.filter(num => num % 3 === 0 )
.map (num => num * num);
console.log(r2);
r2 = arr2.reduce((a, i) => a += i, 0)
console.log(r2);


// z tablicy arr2 wybierz liczby wększe od 5 które są w drugiej połówce


let second = arr2
.filter((number, index, arr) => number >5 && index > arr.length /2 )
console.log(second);


let a = 0;
let reduceFun = (a, i) => a += i;
for(let i of arr2){
    a = reduceFun(a,i);
}


