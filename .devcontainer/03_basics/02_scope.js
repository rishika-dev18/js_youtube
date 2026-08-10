// var c = 300
let a = 300
if (true) {
    let a = 10           //{iske angdr ka block scope} bahr ka global scope
    const b = 20
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "rishi";

    function two(){
        const website = "u tube"
        console.log(username);   //bahr bale ko andr bala accept krlega
    }
    // console.log(website);
    two()
}
// one()

if (true) {
    const username = "rishi"
    if (username === "rishi") {
        const website = "u tube"
        // console.log(username+website);    
    }
    // console.log(website);  ye dono error aayegi niche wali bhi kyuki andr k funtion ko bahr nai le skte
}
// console.log(username);

//++++++++++++++interesting++++++++++++++++++++++++++

function addOne(num){
    return(num+1)
}
addOne(5)

addTwo(5)
const addTwo = function(num){  // isme variable ko phle intialize nai kr skte
    return num+2
}
