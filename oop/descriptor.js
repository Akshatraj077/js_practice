console.log(Math.PI)
Math.PI = 5;
console.log(Math.PI);

const desc = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(desc);


const user = {
    name: "pasta",
    bill : 430,
    visit : 2,
    order : function () {
        console.log("pasta ordered");
    }
}
console.log(Object.getOwnPropertyDescriptor(user, "name"));

Object.defineProperty(user, "name",{
    writable : false,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(user, "name"));

for (let [key, value] of Object.entries(user)) {
    if (typeof value !== 'function') {
        console.log(`${key} ; ${value}`); // enumerable makes it false to iterate name therefore it isnt showing
    }
}

Object.defineProperty(user, "name",{
    enumerable : true
})

for (let [key, value] of Object.entries(user)) {
    console.log(`${key} ; ${value}`); // enumerable makes it true here to iterate name therefore it's showing
}