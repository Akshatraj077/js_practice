function temp() {
    console.log("a");
    console.log("k");
    console.log("s");
}
temp()

function temp1(no1, no2) {
    console.log(no1 + no2);
}
temp1(3, 4)
temp1(3, "4")
temp1(3, "a")
temp1(3, null)

function temp2(no1, no2) {
    let res = no1 + no2
    return res
}
const result = temp2(3, 4)
console.log(result);

function loginmsg(username){
    if(username === undefined){  //if(!username)
        console.log("Please enter a username");
        return
    }
    return `Hello there!! ${username}`
}
console.log(loginmsg("akshat"));
console.log(loginmsg());

function CalculateCartPrice(...no1) { //passing a rest operator
    return no1
}
console.log(CalculateCartPrice(200, 10, 5000, 23));

const user = {
    username: "akshat",
    age: 21
}
function check(anyobject) {
    console.log(`username is ${anyobject["username"]} and age is ${anyobject["age"]}`);
}
check(user)

check({
    username: "sam",
    age: 98
})

//scope

let a = 1
const b = 2
var c = 3
if(true){
    let a = 20
    const b = 10
    var c = 30
}
console.log(c);
console.log(a);
console.log(b);

console.log(add1(5));
function add1(num){
    return num + 1
}

const add2 =  function(num){
    return num + 1
}
console.log(add2(5));

console.log(add3(5)); //this will show error
const add3 =  function(num){
    return num + 1
}