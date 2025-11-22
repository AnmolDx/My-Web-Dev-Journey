// syntax
//arr.method(funtion(currentValue, index, array) {...}, thisArg)
//arr.method((value, index, array)) => {
//    return
// }

//forEach - look through all item in the array

let arr = [1, 2, 3, 4, 5]
// for(i=0; i<arr.length; i++){
//    console.log(arr[i]);
// }
//instead of this for loop we can use forEach method
let print = function(el){
   console.log(el);
}
arr.forEach(print)

//Map- allow to loop over array access and return modify value for each item, and gives new array
let num = [1, 2, 3, 4]
let double = num.map((el) => {
   return el*2
});
console.log(double);

//filter- let newArr = arr.filter(some function definition or name)
let nums = [1, 2, 3,4,6,7,8,45,54,6]
let ans = nums.filter((el) => {
   return el%2 == 0
})
console.log(ans);

//every- returns true if every condition is met otherwise false

let arrs = [1,3,4,5,6,8]
let isGreaterThan = arrs.every((el) => {
   return el>4 //checks every value 
})
console.log(isGreaterThan);

//some- check and return true if one of the value met with condition otherwise return false
let result = arr.some((el) => {
   return el > 3;
})
console.log(result)

//reduce - use to reduce an array to single value(string, number)
// syntax
// arr.reduce(
//    function(accumulator, currentValue, index, arr) {...}, initialValue
// )

const rslt = arr.reduce((accumulator, currentValue) => {
   return accumulator + currentValue
}, 0);
console.log(rslt);





