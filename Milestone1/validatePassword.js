const email = document.getElementById('email');
const btn = document.querySelector('.btn');
const pass = document.getElementById('pass');
const msg = document.querySelector('.msg');

btn.addEventListener('click' , (e) => {
  e.preventDefault();
  const password = pass.value;
  const emailVal = email.value;
  if(emailVal && password){
    if(!emailVal.includes('@') && !emailVal.includes('.')){
      msg.innerHTML = 'Please write correct email';
      console.log(emailVal);
      return;
    }
    if(password.length <= 8 ){
      msg.innerHTML = 'Password must be atleast 7 characters';
      return;
    }
    msg.innerHTML = 'Account created successfully';
  }else{
      msg.innerHTML = 'Please enter all required field';
  }

  
});








