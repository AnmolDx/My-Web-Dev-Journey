let btn = document.querySelector(".btn")
console.dir(btn)

//mouse pointers event
btn.onclick = function(){
   // alert("button was clicked")
}
btn.onmouseenter = function (){
   // alert("are you sure u wanna click")
}

//Event Listeners - element.addEventListener(event, callback) execute all functions whereas mouse pointer can print only one
btn.addEventListener("click",function(){
   console.log("bruhhh")
})
btn.addEventListener("click",function(){
   console.log("yoooo")
})

//Event Listeners for Elements
let para = document.querySelector("p")
para.addEventListener("click", function(){
   console.log("para got clicked")
})

let box = document.querySelector(".box")
box.addEventListener("mouseenter", function(){
   console.log("mouse inside div")
})

//this in Event Listeners
let btn1 = document.querySelector(".btn1")
btn1.addEventListener("click", function () {
   console.log(this)
   btn1.style.backgroundColor = "yellow"
})

//Keyboard Events
let btn2 = document.querySelector(".btn2")
btn2.addEventListener("click", function (event) {
   console.log(event)
   console.log("button clicked")
})

let inp = document.querySelector(".input")
inp.addEventListener("keydown", function(event){
   console.log(event.code)
   console.log("key was pressed")
})

//Form Events
let form = document.querySelector("form")

form.addEventListener("submit", function(event){
   event.preventDefault();
   alert("form submitted")

   let input = document.querySelector(".input1")
   let pass = document.querySelector(".pass")
   console.dir(input)
   console.log(input.value)
   console.log(pass.value)

})

