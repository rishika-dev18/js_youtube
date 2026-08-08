//array
const myArr = [2,5,2,4,1]
const myHeroes = ["rishi","ika","superman"]
const myArr2 = new Array(2,4,1,4)
// console.log(myArr);
// console.log(myHeroes);
// console.log(myArr2);
// console.log(myArr[1]);

//array method
// myArr.push(6)
// myArr.push(0)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.indexOf(2));
// console.log(myArr.includes(9));

const newArray = myArr.join()
// console.log(newArray);
// console.log(typeof newArray);

// console.log(myArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C",myArr);
console.log(myn2);



