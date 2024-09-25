//for of
const arr = [1, 2, 3, 4]
for(const i of arr){
    console.log(i);
}
const greeting = "hello world!"
for(const greet of greeting){
    console.log(greet);
}

const map = new Map()
map.set("IN", "India")
map.set("USA", "America")
console.log(map);
for(const [key, value] of map){
    console.log(key + " :- " + value);
}

//for in
const myobj = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby"
}
for(const i in myobj){
    console.log(i + " :- " + myobj[i]);
}

const arr2 = ["js", "java", "c++", "ruby"]
for(const i in arr2){
    console.log(i);
}

//for each
const coding = ["js", "java", "c++", "ruby"]
coding.forEach( function(item){
    console.log(item);
} )

const arrobj = [ 
    {langn : "javascript", langf: ".js"},
    {langn : "c++", langf: ".cpp"},
    {langn : "python", langf: ".py"},
    {langn : "java", langf: ".java"}
 ]
arrobj.forEach( (item) => {
    console.log(item.langf);
} )

const coding1 = ["js", "java", "c++", "ruby"]
const temp = coding1.forEach( function(item){
    console.log(item);
    return item
} )
console.log(temp); //for each dosent return anything

//Filter
const num = [1, 2, 3, 4, 5, 6, 7, 8]
const newn = num.filter( (num) => num > 4)
console.log(newn);

const newn1 = num.filter( (num) => {
    return num > 4
} )
console.log(newn);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 } ];

const userb = books.filter( (bk) => bk.genre === 'History' )
console.log(userb);
const userb1 = books.filter( (bk) => bk.publish > 2000 )
console.log(userb1);
const userb2 = books.filter( (bk) => (bk.publish >= 1995 && bk.genre === 'History') )
console.log(userb2);
