// JavaScript Dynamically-typed language

// primitive

// 7 type: String, Number, Boolearn, null, undefind, Symbol, BigInt.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 468765132946549764n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Aarti",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof scoreValue);
console.log(typeof heros);
console.log(typeof anotherId);