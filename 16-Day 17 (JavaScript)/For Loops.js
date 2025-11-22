// for(initialisation; condition; updation){
//do something
// }

//print all odd numbers (1 to 15)
for (let num = 1; num <= 15; num = num + 2) {
   console.log(num)
}

//print all even number (1 to 10)
for (let num = 2; num <= 10; num = num + 2) {
   console.log(num)
}

//print the multiplication table for 5
for (let num = 5; num <= 50; num = num + 5) {
   console.log(num)
}

//take input from user and print the table of that number
let n = prompt("enter your number");
n = parseInt(n) //convert it to integer
for (let num = n; num <= n * 10; num = num + n) {
   console.log(num)
}

//nested loop
for (let i = 1; i <= 3; i++) {
   for (let j = 1; j <= 3; j++) {
      console.log(j)
   }
}