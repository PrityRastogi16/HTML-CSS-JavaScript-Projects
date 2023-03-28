const firstColor=document.getElementById("first-color");
const secondColor=document.getElementById("second-color");
const output=document.getElementById("output");
const button=document.getElementById("btn");

function mixColor(){
    const newColor=firstColor.value + secondColor.value;
    switch(newColor){
       case "redblack":
          output.style.background="brown";
          break; 
        case "blackred":
          output.style.background="brown";
           break; 

        case "redblue":
            output.style.background="purple";
            break;
         case "bluered":
            output.style.background= "purple";
            break;

         case "yellowred":
           output.style.background="orange";
           break;

        case "redyellow":
            output.style.background="orange";
            break;

        case "yellowblue":
            output.style.background="green";
            break;   
            
        case "blueyellow":
            output.style.background="green";
            break; 
            
        default:
            alert("Invalid, Try Other!");
            break;
    }
}
btn.addEventListener("click", mixColor);

