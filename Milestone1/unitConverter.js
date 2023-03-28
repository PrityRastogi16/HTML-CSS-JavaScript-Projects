const inp = document.querySelector(".inp");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

const convertF = (value) => {
     const F = Number(value) * 1.8 + 32;
     return F;
};

btn.addEventListener("click" , (e) => {
   e.preventDefault();

   if(inp.value){
    const ans = convertF(inp.value);
    result.innerText = "Value in Fahrenheit: " + ans;
   }else{
    result.innerText = "Enter a temperature to convert:"
   }
   inp.value = '';
});