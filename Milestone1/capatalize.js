const name=document.getElementById("name");
const btn=document.querySelector(".btn");
const result=document.getElementById("result");

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    const nameVal = name.value;
    const firstLtter=nameVal[0].toUpperCase();
    const restName=nameVal.slice(1);
    const finalName=firstLtter + restName;
    console.log(finalName);
    result.innerText = "Name: " + finalName;
    // let ans=document.getElementById("result").innerText = finalName;
//    console.log("Name :"+ ans);
});