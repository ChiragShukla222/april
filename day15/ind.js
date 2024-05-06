/* let a  =document.createElement("h1")
console.log(a)
 let c  = document.createTextNode("day15")
console.log(c)
 a.appendChild(c)
 
 //to get div from js//
 let b  = document.getElementById("main")
 b.appendChild(a)*/
let a = document.createElement("h1")
a.style.backgroundColor="red"
a.style.fontSize="80px"
let c  =document.createElement("p")
c.style.backgroundColor="green"
let b = document.createTextNode("heloo guys welcome to my vlog")
let d = document.createTextNode("hello")
a.appendChild(d)
console.log(a)
c.appendChild(b)
console.log(c)
//to target the div
let mn = document.getElementById("sec")
mn.appendChild(a)
mn.appendChild(c)
mn.style.backgroundColor="blue"
