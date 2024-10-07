//everything in js is an object including arrays, strings etc., a function is a function as well as an object
function multi(num) {
    return num * 5;
}

multi.power = 2;

console.log(multi(5));
console.log(multi.power);
console.log(multi.prototype); //using prototype, js keeps searching until it gets a null value


function user(name, score) {
    this.name = name;
    this.score = score;
}

user.prototype.increment = function () {
    this.score++;
}
user.prototype.printme = function(){
    console.log(`score is ${this.score}`);
}

const player1 = new user("virat", 247)
const player2 = new user("abd", 229)

console.log(player1);
player2.printme();
player2.increment();
console.log(player2);
player2.printme();


let myName = "akshat    "
let anotherUsername = "archita    raj"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"akshat".trueLength()
"BobaTea".trueLength()
console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.akshat = function(){
    console.log(`akshat is present in all objects`);
}

Array.prototype.heyakshat = function(){
    console.log(`akshat says hello`);
}

heroPower.akshat()
myHeros.akshat()
myHeros.heyakshat()
heroPower.heyakshat() //this will give error as array(lower level than object) has the prototype function of heyakshat
