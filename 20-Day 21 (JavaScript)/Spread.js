//expands an iterable into multiple values. use by (...)
let arr = [1,4,6,3,6,3,6,63,6,7,3,7,65,2,9]
console.log(Math.min(...arr))
console.log(...arr);

//spread with array literals
//we can break down sting into individual characters
let char = [..."hello"]
console.log(char)
let newArr = [...arr]
console.log(newArr)

//spread with object literals
const data = {
   email : "helloworld@gmail.com",
   password : "abcd"
}
console.log(data);

const dataCopy = {...data, id : 124, country : "india"}
console.log(dataCopy);

//conversion of array into object using spread
let obj1 = {...arr} //index will be key and value will be value of key
console.log(obj1);

let obj2 = {..."hello"}
console.log(obj2);
