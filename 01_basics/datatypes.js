"use strict" //treat all JS codes as newer version

//alert(3+3) //will work in browser but not here

let age = 18
let isloggedin = false
let state = null

//number -> 2 to power 53
//bigint
//null = standalone value
//undefined
//symbol -> unique
//object

console.log(typeof age);
console.log(typeof null);
console.log(typeof undefined);

// primituve types: string,null,undefined,number,BigInt,symbol,Boolean

// reference(non-primitve): arrays,functions,objects

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

console.log(typeof(id));
console.log(typeof(anotherid));


console.log(id);
console.log(anotherid);

const heros = ["spiderman","shaktiman","schloterbek","sizuka"]
console.log(heros);
console.log(heros[1]);

let myobj = {
    name : "akshat",
    age : 22,
}
console.log(myobj);
console.log(myobj.name);


