function setname(username){
    //after DB calls
    this.username = username;
}

function user(username, email, bdcnt) {
    setname.call(this, username) //.call is used to explicty call that function with a specific this context and this inside setname.call() assign to current context of value as without using this the context will be lost when the setname function will be executed as all the variables and the function itself will be dscarded after its use.
    this.email = email;
    this.bdcnt = bdcnt;
}

const user1 = new user("akshat", "sight@travel.com", 8);
console.log(user1);
