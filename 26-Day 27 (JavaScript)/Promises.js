console.log("this is promises")

let prom1 = new Promise((resolve, reject) => {
   let a = Math.random()
   if(a < 0.5){
      reject("the number is not supporting you")
   }
   else 
      {setTimeout(() => {
      console.log("yes i am done");
      resolve("Anmol")
   }, 4000)}
})

prom1.then((a) => {
   console.log(a) //if a's value is more than 0.5 then's value will print
}).catch((err)=>{
   console.log(err) //if a's value is less than 0.5 it value will rejected and prints the catch 
})

//promise.all- returns all promise in form of array if they got resolve if any of promise fails it will throw error
//promise.allsettled - returns status and value in an array even if the promise fail or not 
//promise.race - if any of the promise will get settle(even if failed) prints its value as outcome 
//promise.any - wait for any of promise to fullfilled and prints its value, otherwise throws error if all promises failed

//Call stack
function greeting() {
  // [1] Some code here
  sayHi();
  // [2] Some code here
}
function sayHi() {
  return "Hi!";
}

// Invoke the `greeting` function
greeting();
