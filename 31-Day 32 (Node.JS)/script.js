// let n = 5
// for (let i = 0; i < n ; i++) {
//    console.log("hello", i);
   
   
// }
// console.log("bye");
// commands can be run by node using "node script.js" in terminal
// console.log(process.argv);

//we can take some arguments/parameters using process.argv 
let arg = process.argv
for(let i = 2; i < arg.length; i++){
   console.log("hello to", arg[i])
}

const math = require("./math")
console.log(math);
console.log(math.sum(3,4));
console.log(math.mul(3,5));
console.log(math.PI);


