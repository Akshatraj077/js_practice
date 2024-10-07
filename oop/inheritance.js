class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const teach1 = new Teacher("akshat", "akshat@teacher.com", "123")
teach1.logMe()
teach1.addCourse()

const user1 = new User("archita")
user1.logMe()
//user1.addCourse() //will give error

console.log(teach1 instanceof User);

//static keyword //helps in defining the private section of the class

class user2 {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

const user3 = new User("akschita")
user3.logMe();
//console.log(user3.createId()) //error give as accessing private function

class Teacher1 extends user2 {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher1("iphone", "i@phone.com")
iphone.logMe();
//console.log(iphone.createId()); //error give as accessing private function