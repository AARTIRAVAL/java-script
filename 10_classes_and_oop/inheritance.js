class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const Tea = new Teacher("Tea", "Tea@gmail.com", "123")
Tea.addCourse()
const coffee =new User("coffee")
coffee.logMe()

console.log(Tea instanceof User);