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