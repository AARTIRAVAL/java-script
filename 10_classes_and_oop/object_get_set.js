const User = {
    _email: 'a@aa.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const coffee = Object.create(User)
console.log(coffee.email);
