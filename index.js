const password= document.querySelector('#password');
const username= document.querySelector('input#username');
const form= document.querySelector('form');

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const guardarpassword= localStorage.getItem("password");
    const guardaruser= localStorage.getItem("user");
    console.log(guardarpassword)

    if(username.value===guardaruser&&password.value===guardarpassword){
        alert("Iniciaste sesión")
        
    }else{
        alert("Usuario incorrecto")
    }
})
