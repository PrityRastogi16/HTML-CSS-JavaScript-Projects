const days = document.querySelector("#days");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const option = document.querySelector("#selecting");

const rentCalculator = (days , option) => {
    let cost;
    if(option == 'economy'){
        cost = days * 4000;
        return cost;
    }
    if(option == 'midSize'){
       cost = days * 10000;
       return cost;
    }
    if(option == 'luxury'){
        cost = days * 14000;
        return cost;
    }
};

btn.addEventListener("click" , (e) => {
    e.preventDefault();
    if(days.value && option.value){
        const rent = rentCalculator(Number(days.value) , option.value);
        result.innerText = `The Rent for ${days.value} days: Rs${rent} only.`;
    }
});