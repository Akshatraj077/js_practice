// singleton in not formed while declaring objects in literal mode it is only formed while declaring objects in constructors

//object literals
const user1 = {}

const sim = Symbol("mykey1")
const user = {
    name: "akshat",
    age: 21,
    location: "auckland",
    ispresent: false,
    "full name": "akshat raj",
    [sim]: "key1", //symbol is written like this only
    2: 23
}
console.log(user.location);
console.log(user["location"]);
console.log(user["age"]);
console.log(user[2]);
console.log(user["full name"]);
console.log(user[sim]);

user.location = "india"
console.log(user["location"]);

//Object.freeze(user)

user.location = "turkey"
console.log(user["location"]);

console.log(user);

user.greeting = function () {
    console.log("hello there!");
}
console.log(user.greeting());

user.greeting1 = function () {
    console.log(`hello there! ${this.name}`);
}
console.log(user.greeting1());


//object singleton

const use = new Object()
console.log(use);

use.id = "123"
use.name = "archita"
use.hasbrain = false

const use1 = {
    email: "abc@abc.com",
    fullname: {
        firstn: "archita",
        lastn: "raj"
    }
}
console.log(use1.fullname?.firstn);
console.log(use1["fullname"]["firstn"]);


const obj1 = {1:"a", 2:"b", 3:"c"}
const obj2 = {1:"d", 2:"e", 3:"f"}
const obj3 = {obj1, obj2}
console.log(obj3);
const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);

const obj5 = {1:"a", 2:"b", 3:"c"}
const obj6 = {4:"d", 5:"e", 6:"f"}
const obj7 = Object.assign({}, obj5, obj6)
console.log(obj7);

console.log(Object.keys(obj5));
console.log(Object.values(obj6));
console.log(Object.entries(obj5));

console.log(obj2.hasOwnProperty('1'));
console.log(obj2.hasOwnProperty('9'));

const course = {
    cn: "js",
    cp: "999",
    ci: "akshat"
}

const {ci} = course //destructuring of object, "{ci}" which value to fetch from object and "course" is from where/which object to be fetched from
console.log(ci);

const {ci: instructor} = course
console.log(instructor);

//Json format ->
// {
//     "name": "akshat",
//     "id": "123",
//     "subject": "js"
// }
// objects in array ->
// [
//     {},
//     {},
//     {}
// ]