//while(conditiona){
//    do something
// }

let i = 1;
while (i <= 5) {
   console.log(i)
   i++;
}

//Loops with arrays
let fruits = ['apple', 'mango', 'banana', 'lichi'];
fruits.push("pineapple")
for (let i = 0; i < fruits.length; i++) {
   console.log(i, fruits[i]);
}

//nested loops with nested arrays
let heroes = [['ironman', 'spiderman', 'thor'], ['superman', 'wonder woman', 'flash']];
for (let i = 0; i < heroes.length; i++) {
   console.log(`list #${i}`);
   for (let j = 0; j < heroes[i].length; j++) {
      console.log(heroes[i][j]);
   }
}