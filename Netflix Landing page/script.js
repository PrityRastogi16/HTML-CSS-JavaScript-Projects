const btn1 = document.querySelector("#ques1");
const btn2 = document.querySelector("#ques2");
const btn3 = document.querySelector("#ques3");
const btn4 = document.querySelector("#ques4");
const btn5 = document.querySelector("#ques5");
const btn6 = document.querySelector("#ques6");

let list = document.querySelectorAll(".ques")

btn1.addEventListener("click" , destroy);

btn2.addEventListener("click" , destroy);

btn3.addEventListener("click" , destroy);

btn4.addEventListener("click" , destroy);

btn5.addEventListener("click" , destroy);

btn6.addEventListener("click" , destroy);

function destroy(){
    list.forEach(answer => {
        if(answer.lastElementChild.style.display == "block" && answer.firstElementChild != this){
            answer.firstElementChild.lastElementChild.style.transform = "rotate(0deg)";
            answer.lastElementChild.style.display = "none";
        }
    });
    let element = this.nextElementSibling;
    if(element.style.display == "none"){
        this.lastElementChild.style.transform = "rotate(45deg)";
        element.style.display = "block";
    }else{
        this.lastElementChild.style.transform = "rotate(0deg)";
        element.style.display = "none";
    }
}