const inp = document.querySelector(".inp");
const button = document.querySelector(".btn");
const result = document.querySelector(".result");

let ans = "";
button.addEventListener("click" , (e) => {
    e.preventDefault();
    for(let i = 0; i < Number(inp.value); i++){
       for(let j =  Number(inp.value); j > i; j--){
        ans += "*";
       } 
       ans += "<br>";
    }
    result.innerHTML = ans;
});