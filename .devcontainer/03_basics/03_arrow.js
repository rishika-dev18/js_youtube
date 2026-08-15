const user = {
    userName: "rishi",
    price: 344,

    welcomeMessage: function() {
        // console.log(`${this.userName}, welcome to the website`);
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.userName = "ikaa"
// user.welcomeMessage()
// console.log(this);   //isme  krne p {} yani empty wahi broswer p global object window h


function chai() {
    userName: "rishi"
    // console.log(this.userName);
}
chai()

// const chaii = function() {
//     userName: "rishi"
//     console.log(this.userName);
// }
// chaii()

// const chaii = ()  => {
//     userName: "rishi"
//     console.log(this.userName);
// }
// chaii()

// () => {}   ye arrow function h basic ka


// const addTwo = (num1, num2) => {
//     return(num1+num2)   //explicit return
// }
//  const addTwo = (num1, num2) => num1+num2   //implicit return
//  const addTwo = (num1, num2) => (num1+num2)

 const addTwo = (num1, num2) => ({userName: "rishi"})  //object ko parenthsis m rakhna hi padega
console.log(addTwo(3,4));
