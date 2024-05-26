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

//console.log(typeof bigNumber);
//console.log(typeof outsideTemp);
//console.log(typeof myFunction);
//console.log(typeof scoreValue);
//console.log(typeof heros);
//console.log(typeof anotherId);


// *********************************************

// stack Memory (Primitive), and Heap Memory (Non-Primitive)

let myname = "AartiRaval"

let anothername = myname
anothername = "ravalaarti"

//console.log(anothername);
//console.log(myname);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "aarti@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

