const name = "akshat"
const body_count = 4
const age = 22

//console.log(name + body_count + " age is 22"); //NoOne writes like this now a days

console.log(`my name is ${name} and age is ${age} with bodycount ${body_count}`);
console.log(name);

const name1 = new String('akshat')
console.log(name1.__proto__); //tells that string is an object in behind and not array
console.log(name1[1]);
console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.charAt(2));
console.log(name1.indexOf('s'));

//go through the diff bet substring and slice and trim

const temp = "akshat%raj"
console.log(temp.replace('%','-'));
console.log(temp);
console.log(temp.includes('ksh'));
console.log(temp.split('%'));
