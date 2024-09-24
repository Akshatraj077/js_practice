//FALSY values
//"", 0, -0, false, BigInt, null, undefined, NaN
//TRUTHY values
//" ", "0", "false", [], {}, function() {}

const emptyobj = {}
if(Object.keys(emptyobj).length === 0){
    console.log("empty object");
}

//NULLISH COALESCING Operator (??) : null, undefined

const val1 = 5 ?? 10
console.log(val1);
const val2 = null ?? 10
console.log(val2);
const val3 = null ?? undefined
console.log(val3);
const val4 = null ?? undefined ?? 10
console.log(val4);

//Ternaray operator

const price = 100
price >= 100 ? console.log("more than 100") : console.log("less than 100");
