//fucntions continue//
let a = [1,2,3,4,5,6]
 //let b = a.slice(1,3)
 //to slice the array according to the idexing last index given is not inclusive (not included)
 //console.log(b)
 ///splice //
//  let c = a.splice(0,3)
 //to remove elements from the middel of an array and (0,3) 0 refer to start and 3 refer to the three elemnets not indexing
//  console.log(c)
 //to add more elements after removing the 3 elemnst
 let i = a.splice(1,3,"ko")
 console.log(a)
 //user defined function start-----------//
 function demo (){
    alert("not 404 found")

 }
demo()//calling of function

function sum() {
    
let m = parseInt(prompt("enter a "))
let n = parseInt(prompt("enter b"))
c=m+n
    console.log(c)
}
sum()
