
function sayMyName () {
console.log("A");
console.log("a");
console.log("r");
console.log("t");
console.log("i");
}

//sayMyName()

//function addTwoNumbers(number1, number2){
//    console.log(number1 + number2)
//}

addTwoNumbers(5, 7)
const result = addTwoNumbers(5, 7)

//console.log("Result: ", result)

function addTwoNumbers(number1, number2){
    //let result = number1 + number2
    //return result
    return number1 + number2
}

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please Enter a Username ");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Aarti"))
//console.log(loginUserMessage("Aarti"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Aarti",
    Price: 199
}

function handaleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.Price}`)

}

//handaleObject(user)
handaleObject({
    username: "sam",
    Price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));