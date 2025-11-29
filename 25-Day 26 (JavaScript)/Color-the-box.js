let r = Math.floor(Math.random()*255)
let g = Math.floor(Math.random()*255)
let b = Math.floor(Math.random()*255)

let boxes = document.querySelectorAll(".box")
boxes.forEach(box => {
   box.style.backgroundColor = `rgb(${r},${g},${b})`
   box.style.color = `rgb(${b},${r},${g})`
});