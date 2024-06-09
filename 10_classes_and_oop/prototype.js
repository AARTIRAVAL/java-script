//let myName = "Aarti"
//let mycast = "Raval"
//console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Aarti = function(){
    console.log(`Aarti is present in all objects`);
}

Array.prototype.heyAarti = function(){
    console.log(`Aarti says hello`);
}

heroPower.Aarti()
myHeros.Aarti()
myHeros.heyAarti()
//heroPower.heyAarti()

// inheritance

const User = {
    name: "Aarti",
    email: "Aa@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__=User

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "AartiRaval     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    //console.log('${this.name}');
    console.log(`True length is: ${this.trim().length}`);
}
 
anotherUsername.trueLength()
"Aarti".trueLength()
//coffee.trueLength()
