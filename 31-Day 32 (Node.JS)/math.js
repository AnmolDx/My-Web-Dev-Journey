// first way of export 
// module.exports.sum = (a, b) => a+b
// module.exports.mul = (a, b) => a*b
// module.exports.g = 9.8
// module.exports.PI = 3.14

// second way to export 
// let obj = {
//    sum: sum,
//    mul: mul,
//    g: g,
//    PI: PI
// }
// module.exports = obj

// using import method
export const sum = (a, b) => a+b
export const mul = (a, b) => a*b
export const g = 9.8
export const PI = 3.14