//Qs1. Square and sum the array elements using the arrow function and then find the average of the array
let arr = [1,3,4,5]
let sqr = arr.map((el) => {
   return el*el
})
let sum = sqr.reduce((acc,cur) => acc + cur, 0);
let avg = sum/arr.length
console.log(avg);

//Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.
console.log(arr.map((el) => el + 5));

//Qs3. Create a new array whose elements are in uppercase of words present in the original array.
let strings = ['anmol','nitin','manish']
console.log(strings.map((str) => str.toUpperCase()))