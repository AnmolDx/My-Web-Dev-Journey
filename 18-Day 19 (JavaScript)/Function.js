// function Defination (telling JS)
// function funcName(){
//    do something
// }

// function calling(Using the function)
// funcName();

function hello() {
   console.log("hello");
}
hello();

//write function to print poem
function poem() {
   console.log("Twinkle Twinkle little star")
   console.log("How i wonder what you are")
}
poem();

//write a function to roll a dice & always display the value of the dice (1 to 6).
function roll() {
   let dice = Math.floor(Math.random() * 6 + 1);
   console.log(dice)
}
roll();

//Function with arguments
function printName(name) {
   console.log(name)
}
printName("anmol")

function sum(a, b) {
   console.log(a + b)
}
sum(6, 9)

//write a function that gives us the average of 3 numbers
function avg(a, b, c) {
   console.log((a + b + c) / 2)
}
avg(2, 2, 2)

//create a function that prints the multiplication table of a number
function table(a) {
   for (i = 1; i <= 10; i++) {
      console.log(a * i)
   }
}
table(5)