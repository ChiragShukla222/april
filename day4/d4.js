//if and else
//wap to check +ve or -ve
let n = parseInt(prompt("enter a number of your choice"))
if(n>0){
   console.log("+ve")
}
else{
    console.log("-ve")
}
//wap to check the number is divisible by 7 or not
let b = parseInt(prompt("enter a number of your choice"))
if(b%7==0){
   console.log("divisible")
}
else{
    console.log("not divisible")
}
//ladder / if elseif
let a  = parseInt(prompt("enter a number "))
if(a>0&&a<=100){
    if(a>=71&&a<=100){
    console.log("first")
    }
    else if(a>=41&&a<=70){
    console.log("second")
    }
    else (a>=10&&a<=40){
    console.log("fail")
    }
}
else{
    console.log("wrong input")
}