/*let a = parseInt(prompt("enter the nubmer for which you want to find the counting"))
if(a>=1&&a<=10){
    for(let i = 1 ;i <= a ;i++){
        console.log(i)
    }
}
else if(a>=11&&a<=20){
    for(let i = 20 ; i >= 1 ; i--){
        console.log(i)
    }
}*/
//nested for loop//
    for(let i = 1 ; i<=5;i++){
        for(let j = 1 ; j <= i ;j++){
        document.write("*")
        }
        document.write("<br>")
    }
