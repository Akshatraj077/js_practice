let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(typeof(myDate));

let date = new Date(2023, 0, 23)
console.log(date.toDateString());

let date1 = new Date("01-14-2023")
console.log(date1.toLocaleDateString());

let timestamp = Date.now()
console.log(timestamp);
