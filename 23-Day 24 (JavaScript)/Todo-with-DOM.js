let btn = document.querySelector("button")
let ul = document.querySelector("ul")
let inp = document.querySelector("input")
btn.addEventListener("click", function(){
   let item = document.createElement("li")
   item.innerText = inp.value

   let del = document.createElement("button")
   del.innerText = "delete"
   del.classList.add("delete")
   item.appendChild(del)
   
   ul.appendChild(item)
   inp.value = ""

})

let delbtns = document.querySelectorAll(".delete")
for(del of delbtns){
   del.addEventListener("click", function(){
      let par = del.parentElement;
      console.log(par)
      par.remove()
   })


}