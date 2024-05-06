
let b = document.getElementsByClassName("even")
for(let i = 0 ; i<b.length;i++){
    if(b%2==0){
        document.style.backgroundColor=("red")
    }
    else{
        document.style.backgroundColor=("blue")
    }
}