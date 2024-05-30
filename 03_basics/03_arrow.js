const user  = {
    username: "Aarti",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

//console.log(this);

//function one(){
//    let username = "Aarti"
//    //console.log(this);
//}
//one()

//const one = function () {
//    let username = "Aarti"
//    console.log(this.username);
//}

//one()

//const one = () => {
//    let username = "Aarti"
//    console.log(this);
//}

//one()

//const addTwo = (num1, num2) => {
//    return num1 + num2
//}

//const addTwo = (num1, num2) => num1 + num2

//const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Aarti"})

console.log(addTwo(3, 4))

//const myArray = [2, 5, 3, 7, 8]

//myArray.forEach()