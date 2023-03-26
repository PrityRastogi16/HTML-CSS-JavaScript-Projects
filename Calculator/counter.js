const btn1=document.getElementById("button1");
const btn2=document.getElementById("button2");
const display=document.getElementById("display");
const reset=document.getElementById("reset");
 
// decrement btn!
btn1.addEventListener("click",()=>{
  const value=Number(display.innerText);
  if(value>0){
    display.innerText=value-1;
  }else{
    alert("Negative value")
  }
});

// Increment btn!
btn2.addEventListener("click",()=>{
  const value=Number(display.innerText);
  if(value>=100){
    alert("Too big");
  }else{
    display.innerText=value+1;
  }
});

// reset btn!

reset.addEventListener("click", ()=>{
  display.innerText=0;
});