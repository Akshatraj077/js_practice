function makefunc() {
    const name = "mozilla"
    function inner() {
        console.log(name);
    }
    return inner
}

const myfunc = makefunc(); 
myfunc();