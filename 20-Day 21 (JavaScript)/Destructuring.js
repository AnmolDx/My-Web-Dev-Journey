//destructuring - extract values from array and objects

//swap the value of two variable using destructuring
let a = 1
let b = 2
// ([a, b] = [b, a]);
// console.log(a)
// console.log(b)

//assign array element to variable
const color = ['red','green','blue','black','white']
const [firstColor, secondColor, thirdColor, ...extraColors] = color;
//swap 2 element in an array
// [color[0],color[4]] = [color[4],color[0]]
console.log(color)
console.log(firstColor)
console.log(secondColor)
console.log(thirdColor)
console.log(extraColors)
