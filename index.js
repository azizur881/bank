document.getElementById('login-btn').addEventListener('click',function(){
    
    let email=document.getElementById('email')
    let password=document.getElementById('password')
    if(email.value=="love@gmail.com" && password.value=="123"){
        window.location.href='count.html'
    } 
})