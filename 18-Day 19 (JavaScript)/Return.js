function sum(a, b) {
   return a + b; //only stores the value dont display
}
//to display we have to log the value 
let s = sum(3, 4)
console.log(s)

function isAdult(age) {
   if (age >= 18) {
      return "adult";
   }
   else {
      return "not adult";
   }
   console.log("bye bye") //nothing will execute after return
}
console.log(isAdult(69));

//create a function that returns the sum of number from 1 to n.
function num(n) {
   let sum = 0;
   for (let i = 1; i <= n; i++) {
      sum += i;
   }
   return sum
}
console.log(num(3))

//create a function that returns the concatenation of all strings in an array.
let arr = ["yo", "how", "you", "doing"]
function concat(arr) {
   let result = '';
   for (let i = 0; i < arr.length; i++) {
      result += arr[i]
   }
   return result;
}
console.log(concat(arr))