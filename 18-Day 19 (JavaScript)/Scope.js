let num = 69; // Global Scope-it is different from the num we describe inside function. and it can use anywhere in the code
function sum(a, b) {
   let num = a + b; //num will only accessable inside this function
   console.log(num)
}

sum(4, 8)
console.log(num)

{
   let a = 5 // block scope
}
// console.log(a)// it will give error cuz a is declared inside block

function outerFunc() {
   let x = 5;
   let y = 6;
   function innerFunc() {
      console.log(x);
   }
   innerFunc()
}
console.log(outerFunc())