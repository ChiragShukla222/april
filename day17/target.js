let m = document.getElementById('k')
let t = 0 ;
function non(){
    t++
    m.innerHTML=t
}
function re(){
    t = 0
    m.innerHTML=0;
}
function dec(){
    if(t>0){
        t--
    m.innerHTML=t
    }
}