const promise1 = new Promise(function(resolve, reject){
    //DB request, file access, cryptography, network
    setTimeout(function() {
        console.log("async called");
        resolve();
    }, 1000);
})

promise1.then(function(){
    console.log("promise consumed");
})


new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("async2 called");
        resolve();
    }, 1000);
}).then(function(){
    console.log("promise2 resolved");
})


const promise3 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "akshat", age: 18})
    }, 1000);
})

promise3.then(function(user){
    console.log(user);
})


const promise4 = new Promise(function(resolve, reject){
    setTimeout(() => {
        let err= false;
        if(!err){
            resolve({username: "akshat", bdycnt: 4})
        }
        else{
            reject("ERROR recieved")
        }
    }, 1000);
})

promise4
.then(function(user){
    console.log(user);
    return user.username
})
.then(function(use){
    console.log(use);
})
.catch(function(err){
    console.log(err);
})
.finally(function(){
    console.log("the promise is either resolved or rejected");
})


const promise5 = new Promise(function(resolve, reject){
    setTimeout(() => {
        let err= false;
        if(!err){
            resolve({username: "akshat", lipcnt: 5})
        }
        else{
            reject("ERROR recieved")
        }
    }, 1000);
})

async function consumep() { //it is necessary to put asncy function in try catch block as it is unable to handle errors, it will work fine if error is false
    const resp = await promise5
    console.log(resp);
}
consumep();


const promise6 = new Promise(function(resolve, reject){
    setTimeout(() => {
        let err= true;
        if(!err){
            resolve({username: "akshat", lipcnt: 5})
        }
        else{
            reject("ERROR recieved")
        }
    }, 1000);
})

async function consumepr() { 
    try {
        const resp = await promise6
        console.log(resp);
    } 
    catch (err) {
        console.log(err);
    }
}
consumepr();

async function getuser() {
    try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await resp.json() //here await is necessary as it takes time to convert the recieved data into json format
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getuser();


fetch("https://jsonplaceholder.typicode.com/users")
.then(function(resp){
    return resp.json();
})
.then(function(data){
    console.log(data);
})
.catch(function (err) {
    console.log(err);
})