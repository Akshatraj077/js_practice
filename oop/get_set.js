class user {
    constructor(username, pass){
        this.username = username,
        this.pass = pass
    }
    
    get password(){
        return this.pass.toUpperCase()
    }
    set password(value){
        this.pass = value;
    }
}

const use1 = new user("akshat", "a123")
console.log(use1.password);
console.log(use1.pass); //will  have to make pass private


//this function will not work if you dont write "_" before pass and username.

function user1(username, pass) {
    this._pass = pass;
    this._username = username

    Object.defineProperty(this, 'username', {
        get: function(){
            return this._username.toUpperCase()
        },
        set: function(value){
            this._username = value
        }
    })

    Object.defineProperty(this, 'pass', {
        get: function(){
            return this._pass.toUpperCase()
        },
        set: function(value){
            this._pass = value
        }
    })
}

const use2 = new user1("akshat", "123a")
console.log(use2.username);
console.log(use2.pass);
