const name = "rishi"
const repoCount = 50
// console.log(name + repoCount + "value");

// console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("rishi-ika")

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(4));
console.log(gameName.indexOf("r"));
console.log(gameName.toUpperCase());


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,3)
console.log(anotherString);

const newStringOne = "   rishi  "
console.log(newStringOne);
console.log(newString.trim());

console.log(gameName.replace('ika','ikaa'));
console.log(gameName.includes('rishu'));
console.log(gameName.split('-'));








