//functions in array 
//to add elments in array push() function is used//
let a = [1,2,"a","l"]
a.push(8,9,"chirag")
//can add n number of elments in push 
console.log(a)
//it also fetchs the lenght of the array
//to remove element from last 
a.pop()
console.log(a)
//to add at  first index in the array
a.unshift('helloworld')
console.log(a)
//to remove first elments from the array
a.shift()
console.log(a)
//to print the element not the array//
for(let i = 0 ; i < 4 ; i++){
    console.log(a[i])
}
//for of loop
//used to fetch values 
for(let i of a)
console.log(i)
console.log(a)

//-----------------------------------------------------//