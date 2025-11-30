// let r = Math.floor(Math.random()*255)
// let g = Math.floor(Math.random()*255)
// let b = Math.floor(Math.random()*255)

// let boxes = document.querySelectorAll(".box")
// boxes.forEach(box => {
//    box.style.backgroundColor = `rgb(${r},${g},${b})`
//    box.style.color = `rgb(${b},${r},${g})`

// });

//Actual answer
function getRandomColor() {
   let val1 = Math.floor(Math.random()*255)
   let val2 = Math.floor(Math.random()*255)
   let val3 = Math.floor(Math.random()*255)
   return `rgb(${val1},${val2},${val3})`
}

let boxes = document.querySelectorAll(".box")
Array.from(boxes).forEach(e => {
   e.style.backgroundColor = getRandomColor()
   e.style.color = getRandomColor()
})
