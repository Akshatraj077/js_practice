function user(name, age, isloggedin) {
    this.name = name;
    this.age = age;
    this.isloggedin = isloggedin;
    //return this; //we may/may-not write this line it automatically assigns the value as we are using new keyword
}

const user1 = new user("akshat", 20, true); //new keyword creates a new instance of the user and assigns it to user1 if we dont write new it'll overwrite the values given by user2 onto user1
const user2 = new user("archita", 23, false); //similary it creates a new instance for this user2
console.log(user1);
console.log(user2);
