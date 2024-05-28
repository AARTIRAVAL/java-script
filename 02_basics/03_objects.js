// singleton

// object literals

// object.create

const mySym = Symbol("key1")

const JsUser = {
    name: "Aarti",
    "full name": "Aarti Raval",
    [mySym]: "mykey1",
    age: 21,
    location: "Ahmedabad",
    email: "aarti@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Monday"]
}
//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(JsUser[mySym])

JsUser.email = "aarti@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "aarti@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingtwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingtwo());