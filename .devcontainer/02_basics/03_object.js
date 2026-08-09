//singleton
//object.create

//object literals

const mySym = Symbol("key1")
const Jsuser = {
    name: "rishi",
    "full name": "rishika",
    age: 18,
    [mySym]: "key1", //agr isko bina square bracket k rakhe ge to type string aayega or agr aise rakhnge to symbol ki trah
    location: "kanpur",
    email: "rishi@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["monday","saturday"]
}
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser [mySym]);

Jsuser.email = "rishi@gpt.com" //agr change krenge to = use hoga yha p
// Object.freeze(Jsuser)
Jsuser.email = "rishi@microsoft.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello jsuser");
}
Jsuser.greetingTwo = function(){
    console.log(`hello jsuser, ${this.name}`); //this lgane se object k andr ki property lgti h
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());






