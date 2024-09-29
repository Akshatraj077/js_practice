const arr = [1, 1, 2, 5, 4]
const arr1 = ["hi", "hello"]
const arr2 = new Array(2,4,7,9)

console.log(arr[2]);
arr.push(3)
console.log(arr);
arr.pop()
console.log(arr);

arr.unshift(9)
console.log(arr);
arr.shift();
console.log(arr);
arr.shift();
console.log(arr);

console.log(arr.includes(9));
console.log(arr.indexOf(9));

// const newarr = [9, 8]
// newarr = arr.join()
// console.log(newarr);

const temp = [1, 2, 3, 4, 5, 6]
console.log("A ", temp);

const myn1 = temp.slice(1,4)
console.log(myn1);
console.log("B ", temp);

const myn2 = temp.splice(1,4)
console.log(myn2);
console.log("C ", temp);

const mh = [1, 2, 3, 4]
const dc = [5, 6]

mh.push(dc)
console.log(mh);
mh.pop()

const ah = mh.concat(dc)//here using concat ypu can only merge 2 arrays
console.log(ah);

const ah1 = [...mh, ...dc]//but by usig spread operator you can merge as many array in a single LOC
console.log(ah1);

const num = [1, 2, 3, [5, 6], 7, [8, [9, 3, 5]], 6]
const num1 = num.flat(Infinity)
console.log(num1);

console.log(Array.isArray("akshat"));
console.log(Array.from("akshat"));
console.log(Array.of("akshat"));
console.log(Array.of(100, 200, 300));
