const score = 400
console.log(score);

const no = new Number(100)
console.log(no);

console.log(no.toString().length);
console.log(no.toFixed(2));

const no1 = 69.693454
console.log(no1.toPrecision(3));

const no2 = 169.693454
console.log(no2.toPrecision(3));

const no3 = 10000000
console.log(no3.toLocaleString());

const no4 = 10000000
console.log(no4.toLocaleString('en-IN'));

/////////////////////////////////////////////////

console.log(Math);

const temp = -4.3
const check = Math.abs(temp)
console.log(check);

console.log(Math.round(4.5));
console.log(Math.ceil(4.4));
console.log(Math.floor(4.9));
console.log(Math.min(3,6,1,9,5));

console.log(" ");

console.log(Math.random()); // always gives values between 0 to 1.
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10));

const min = 10
const max = 20
console.log(Math.floor((Math.random() * (max - min + 1))+ min));
