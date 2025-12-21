// index.js is a special file that combine all the other js file in one 
const apple = require("./apple")
const banana = require("./banana")
const mango = require("./mango")

let fruits = [apple, banana, mango]

module.exports = fruits

