/*let a = document.getElementById("p")
let b = document.getElementById("l")
let c = document.createTextNode("BREAKING NEWWS !!!!!!")
let d = document.createTextNode("accoding to reports the angle has fallen suppoters seek for validating for this cause by the govt!!")
a.appendChild(c)
b.appendChild(d)
a.style.backgroundColor="red"
a.style.fontSize="70px"
b.style.backgroundColor="blue"
b.style.fontSize="50px"*/
// -----------------//
let h = document.createElement("h1")
let k = document.createElement("p")
let m = document.createTextNode("HEADING FROM J ")
let o = document.createTextNode("The hype is real goro is comig back no one can stop him this time says reports due to which there is an flctuation in the market")
h.appendChild(m)
k.appendChild(o)
let zo = document.getElementById("p")
p.appendChild(h)
p.appendChild(k)
zo.style.fontSize="80px"
zo.style.backgroundColor="green"
///
let f = document.getElementsByTagName("li")
for(let i = 0 ; i < f.length ; i++){
    if(i%2==0){
        f[i].style.backgroundColor="red"
        
    }
    else{
        f[i].style.backgroundColor="blue"
    }
}
let brr = [1,2,3,"chirag","logg"]
//brr.push(1,2)
//brr.splice(1,3)
brr.slice(1,3)
brr.unshift(1,2)
brr.shift()
console.log(brr)
//----//
let mk = document.createElement("h3")
let no = document.createElement("p")
let pq = document.createTextNode("heading node herer")
let mn = document.createTextNode("paragrapgh tag targeted contetn here")
mk.appendChild(pq)
no.appendChild(mn)
let gk = document.getElementById("main")
    gk.appendChild(mk)
    gk.appendChild(no)

gk.style.background="purple"



