// ES6

//class User {
//   constructor(username, email, password){
//        this.username = username;
//        this.email = email;
//        this.password = password;
//    }

//    encryptpassword(){
//        return `${this.password}abc`
//    }
//    changeUsername(){
//        return `${this.username.toUpperCase()}`
//    }
//}

//const coffee = new User("coffee", "coffee@gmail.com", "123")

//console.log(coffee.encryptpassword());
//console.log(coffee.changeUsername());

// behind the scene

function User(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
}


User.prototype.encryptpassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptpassword());
console.log(tea.changeUsername());