function sayMyName(){
    // console.log("r");
    // console.log("i");
    // console.log("s");
    // console.log("h");
    // console.log("i");
}
// sayMyName()  //saymyname refrence h or() execution

// function addTwonumber(number1,number2){  //numbers h parameter or 3,a arguments
//     console.log(number1+number2);

function addTwonumber(number1,number2){  
    // // console.log(number1+number2);
    // let result = number1 + number2
    return number1 + number2
    // return result // agr return krdiya to uske niche bale function nai chalenge

}
const result = addTwonumber(3,"a")
// console.log("result:",result);

function loginUserMessage(username = "sam"){
    if(!username){
        // console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())


function calculateCartPrize(val1, val2, ...num1){   //...isko rest bhi bolte h or spread bhi
    return num1
}
// console.log(calculateCartPrize(200,30,100,399));

const user = {
    username: "rishi",
    price: 199 //agr price ka prices krdiya to undeefined aayega
}

function handleObject(anyobject) {
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username: "sam",
    price: 399
})

const newArray = [43,42,12,63,6]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(newArray));


