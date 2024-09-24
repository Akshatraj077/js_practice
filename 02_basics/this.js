const user = {
    username : "akshat",
    price : "999",
    msg : function(){
        console.log(`${this.username} , welcome to website`);
    }
}
user.msg()
user.username = "archita"
user.msg()

console.log(this);

function check() {
    console.log(this);
}
check()

function check1() {
    let username = "akshat"
    console.log(this.username);
}
check1()

const check2 = function() {
    let username = "akshat"
    console.log(this.username);
}
check2()

const check3 = () => {
    let username = "akshat"
    console.log(this.username);
}
check3()

const display = () => ( "hello world!" )
console.log(display());

const add2 = (num1, num2) => ( num1 + num2 )
console.log(add2(3,4));


/*****************************************************/
// Immedately Invoked Function Expression(IIFE) -> To prevent global scope pollution

(function one () {
    console.log(`DB CONNECTED`);
})(); //here semicolon is necessary bacuse iife function dosent know where to end the context

(() => {
    console.log(`DB CONNECTED 2`);
})();

((name) => {
    console.log(`${name} , CONNECTED TO DB`);
})("akshat")

// the function one() is named iife and the others are simple iife.