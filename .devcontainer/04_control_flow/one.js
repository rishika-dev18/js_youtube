//if

const isUserLoggedIn = true
const temperature = 50
if (temperature === 51) {
    // console.log("yes it is less than");
} else {
    // console.log("temparture is greater than 50");
}
// console.log("executed");


//>,<,=(value ko assign krta h),==(value equal h),===(uska type bhi check krta h)


const score = 200
if (score>100) {
    let power = "fly"  //agr let ki jgah var use krenge to error nai aayegi kyuki uska scope h completely global
    // console.log(`userpower: ${power}`);
}
// console.log(`userpower: ${power}`);

const balance = 1000
// if (balance>500) console.log("texted");  //ye implisit scope hota single line m hi h lekin agr multiple use krna ho to ; ki jgah , use kr skte h
 
if (balance<500) {
    // console.log("grater then 500");
} else if (balance<750) {
    // console.log("grater than 750");   
} else if (balance<900) {
    // console.log("grater than 900");
} else {
    // console.log("greater than 1200");
}

const UserLoggedIn = true
const debit = true
const loggedInGoogle = false
const loggedInemail = true
if (UserLoggedIn && debit) {
    console.log("allowed to shopping");
}
if (loggedInGoogle || loggedInemail) {
    console.log("user logged in");
}