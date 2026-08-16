const userEmail = []
if (userEmail) {
    // console.log("got email");
} else {
    // console.log("not got email");
    
}

//falsy value
// false,0,-0,BigInt 0n,null,"",undefined,NaN

//truthy value
// "false","0"," ",[] ,{},function(){}

// if (userEmail.length===0) {
//     console.log("array is empty");
// }

const emptyObject = {}
if (Object.keys(emptyObject).length ===0) {   //object se object tk array h
    // console.log("object is empty");
}

// nullish coalescing operator (??): undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ??20

// console.log(val1);

//terniary operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("greater than 80");


