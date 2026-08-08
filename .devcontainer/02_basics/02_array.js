const marvelHeroes = ["thore","spiderman","peter"]
const dnHeroes = ["vilen","vilen2","vilen3"]
// marvelHeroes.pop(dnHeroes)
// marvelHeroes.push(dnHeroes)
// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);

const myHeroes = marvelHeroes.concat(dnHeroes)
// console.log(myHeroes);

const allHeroes = [...myHeroes,...dnHeroes]
// console.log(allHeroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));



