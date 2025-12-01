//a function that is passed as an argument in another function

hello(goodbye)

function hello(callback){
   console.log("hello!")
   callback()
}
function leave() {
   console.log("leave!")
}
function goodbye(){
   console.log("Goodbye!")
}

//example 2nd
sum(displayConsole,1,2)
function sum(callback, x, y) {
   let result = x + y
   callback(result)
}

function displayConsole(result) {
   console.log(result)
   
}