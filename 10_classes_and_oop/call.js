function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");
}

function craeteUser(username, email, password){
    SetUsername.call(this, username)


    this.email = email
    this.password = password
}

const coffee = new craeteUser("coffee", "coffee@fb.com", "123")
console.log(coffee);