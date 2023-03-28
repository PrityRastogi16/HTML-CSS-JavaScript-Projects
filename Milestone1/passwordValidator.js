const pass=document.getElementById("password");
const confirmPassword=document.getElementById("confirm-pass");
const submitBtn=document.getElementById("btn");
submitBtn.addEventListener("click",()=>{
    if(pass.value==confirmPassword.value){
        alert("Successfully Login");
    }else{
        alert("password not matched, Try Again!")
    }
});