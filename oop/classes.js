class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const user1 = new User("chai", "chai@gmail.com", "123")

console.log(user1.encryptPassword());
console.log(user1.changeUsername());

// behind the scene

function Userex(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

Userex.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
Userex.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const user2 = new Userex("user2", "tea@gmail.com", "123")

console.log(user2.encryptPassword());
console.log(user2.changeUsername());