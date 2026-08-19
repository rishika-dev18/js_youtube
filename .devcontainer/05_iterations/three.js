//for of
// ["","",""]
// [{},{},{}]

const arr = [2,4,8,4,9]
for (const num of arr) {
    // console.log(num);
}

const greetings = "hello rishi"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
}

const map = new Map()
map.set('IN','India')  //same key value pair reapet nai hoga
map.set('USA','United state of america')
map.set('FR','France')
map.set('IN','India')            //ispe forin loop nai chalega kyuki uspe iteration nai hoga four.js
// console.log(map);

for (const [key,value] of map) {
    // console.log(key,':-',value);
}


const myObject = {
    game1: 'NFS',
    game2 : 'FF' //objects p agr loop lagayenge forof to kaam nai krega
}
// for (const [key,value] of object) {
//     console.log(key,':-',value);   
// }