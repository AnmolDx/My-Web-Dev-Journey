const calculator = {
   num: 55,
   add: function (a, b) {
      return a + b;
   },
   sub: function (a, b) {
      return a - b;
   },
   mul: function (a, b) {
      return a * b;
   },
}

console.log(calculator.add(6, 9))
console.log(calculator.sub(6, 9))
console.log(calculator.mul(6, 9))