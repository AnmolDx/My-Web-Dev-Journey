console.log(window)
console.dir(document) //use to print document object
console.dir(document.all) //use to get all key value in document object

//to change spider man to peter parker in h1 
document.all[8].innerText = "Peter Parker"

//getElementByid
console.dir(document.getElementById("mainImg")) //access element object by there id, gives null if the given id is not found
let imgObj = document.getElementById("mainImg")
console.dir(imgObj)

//getElementByClassName -returns html collection, returns empty collection if class name not found
console.dir(document.getElementsByClassName("oldImg"))

//to access all objects in collection we can use for loop
let smallImg = document.getElementsByClassName("oldImg")
for(let i=0; i<smallImg.length; i++){
   console.dir(smallImg[i])
}

//getElementByTagName - returns elements as html collection, returns empty collection if tagname not found
console.dir(document.getElementsByTagName("p"))

//Query Selectors - works like css selector
console.dir(document.querySelector("h1"))
console.dir(document.querySelector("p")) //it did not print the collection of all p element. Only returns the first occurrence
console.dir(document.querySelector("div a"))

//to get all elements we use querySelectorAll - returns nodelist of elements
console.dir(document.querySelectorAll("p"))

//Setting content in Objects
let para = document.querySelector("p")
console.dir(para)
console.dir(para.innerText)// show the visible text contained
console.dir(para.textContent)// show all the full text
console.dir(para.innerHTML)// show the full markup i.e. tags

//Manipulating Attributes
console.dir(imgObj.getAttribute('id'))// gives the id of imgObj
imgObj.setAttribute('id','spidermanImg') //change the from mainImg to spidermanImg
console.dir(imgObj.getAttribute('id'))

//Manipulating Style
let heading = document.querySelector("h1")
heading.style.color = "blue"
heading.style.backgroundColor = "yellow"

let links = document.querySelectorAll(".box a")
for(link of links){
   link.style.color = "yellow"
}
// for(let i=0; i<links.length; i++){
//    links[i].style.color = "yellow"
// }

//Classlist
let head = document.querySelector("h2")
head.classList.add("bckgreen") //to add class into h2
head.classList.add("bordersolid")
head.classList.remove("bckgreen")// rermove class
console.dir(head.classList.contains("bckgreen")) //check if the given class is present retrun true or false
head.classList.toggle("bordersolid") //its like switch it will remove class if it already present, otherwise it will add the class
console.dir(head.classList)

//Navigation
let h4 = document.querySelector("h4")
console.dir(h4.parentElement)
let box = document.querySelector('.box')
console.dir(box.children)
let ul = document.querySelector("ul")
console.dir(ul.children[1].previousElementSibling)
console.dir(ul.children[1].nextElementSibling)

//Adding Element
let newP = document.createElement("p")
newP.innerText = "this is new Para" //it doesnt show on page

//to show it on page we have to append it
let body = document.querySelector("body")
body.appendChild(newP)
box.appendChild(newP)

newP.append("this is some append text") //we can use this to add new text, string, and elements (adds something in last)
newP.prepend("this is some prepend text") //it is like append but add things in start of the element

// newP.insertAdjacentElement(postion, element) positions - beforebegin, afterbegin, beforeend, afterend

//Remove Elements
// body.removeChild(newP)

//Practice Qs
let para1 = document.createElement("p")
para1.innerText ="hey i am red"
body.append(para1)
para1.classList.add('red')

let h3 = document.createElement("h3")
h3.innerText = "i am blue h3"
body.append(h3)
h3.classList.add('blue')

let div = document.createElement("div")
let head1 = document.createElement("h1")
let p1 = document.createElement("p")
div.classList.add('divcl')
head1.innerText = "i am in a div"
p1.innerText = "ME TOO!"
div.appendChild(head1)
div.appendChild(p1)
body.append(div)



