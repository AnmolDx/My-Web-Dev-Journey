// let obj = {
//    a : 1,
//    b : "Anmol"
// }

// console.log(obj);

// let animal = {
//    eats : true
// }
// let rabbit = {
//    jumps: true
// }

// rabbit.__proto__ = animal; //sets rabbit.[[Prototype]] = animal

class Product{
   constructor(name, price){
      this.name = name
      this.price = price
   }
}

let product1 = new Product("shirt", 500)
let product2 = new Product("pant", 400)

console.log(product1)