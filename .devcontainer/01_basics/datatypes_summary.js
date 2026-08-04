//primitive
//7 type: string,number,boolean,null,undefined,symbol,BigInt

const score= 100
const scoreValue= 100.8
const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id = Symbol('23')
const anotherId = Symbol('823')

console.log(id === anotherId);

const bigNumber = 2345677777777777n

const heros = ["shaktiman","doga","dogesh bhai"];
let myObj = {
    name: "rishi",
    age: 18,
}

console.log(typeof (sideTemp));

const myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof(anotherId));






//refrence (non primitive)
//array,objects,function


//++++++++++++++++++++++++++++++++++++++
//stack(primitive),heap(non primitive)
//stack m changes krne k baad copy milta h or heap m original value k andr hi change krte h


let myName = "rishika"
let anotherName = myName
anotherName = "ikaaaa"
console.log(myName);
console.log(anotherName);

let userOne = {
    email: "rishika@gmailcom",
    upi: "3456@ybl"
}
let userTwo = userOne
userTwo.email = "rishii@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
