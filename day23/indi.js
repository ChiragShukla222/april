
function required(){

    let n = document.getElementById("name").value
    let m = document.getElementById('age').value
    let o = document.getElementById('email').value
    let p = document.getElementById('num').value
    let q = document.getElementById('house').value
    let r  = document.getElementById("pass").value
    let s = document.getElementById('cpass').value
    if(n==""){
        alert("name field is required")
        document.getElementById('name').focus()
        return false
    }//to make sure only char is there in name and number not 
    else if(n.match(/[0123456789]/)){
        alert('enter char only')
        document.getElementById('name')
        return false
    }
    else if(m==""){
        alert("age is required")
        document.getElementById('age').focus()
        return false
    }
    else if(isNaN(m)){
        alert('only number allowed')
        document.getElementById('age').focus()
        return false
    }
    else if(o==""){
        alert('email is required')
        document.getElementById('email').focus()
        return false
    }
    else if(!(o.includes('@'))){
        alert("@ is required")
        document.getElementById('email').focus
        return false
    }
    
    else if(p==""){
        alert('phone is required')
        document.getElementById('num').focus()
        return false
        
    }
    else if(p.length>10||p.length<10){
        alert("enter a valid number")
        document.getElementById('num')
        return false
    }
    else if(q==""){
        alert('house is required')
        document.getElementById('house').focus()
        return false
    }
   else if(r==''){
        alert("passowrd is required")
        document.getElementById('pass').focus()
        return false
    }
    /* 
    else if(!r.match([/@#$%^/])){
        alert("special char not found")
        document.getElementById('pass').focus()
        return false
    }*/
    //to compare the pass with confirm pass
    else if(r!=s){
        alert("renter")
        document.getElementById(cpass)
        return false

    }
}