let a = prompt("Enter first number")
let b = prompt("Enter second number")

if(isNaN(a) || isNaN(b)){
   throw SyntaxError("this is not allowed") //if any of a and b is NaN it will throw the error
}
let sum = parseInt(a) + parseInt(b);

function main() {
   let x = 1
   try {
      console.log("the sum is ", sum*x); //it will try this and as expected will throw error than the catch command will execute
      return true //the code will not execute after return but if we use finally it will execute the code that is inside it
   } catch (error){
      console.log("there is error in code"); 
      return false 
   }
   finally{
      console.log("the code is fully executed")
   }
}
main()

