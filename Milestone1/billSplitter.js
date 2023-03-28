const dish = document.getElementById('dish');
const btn = document.querySelector(".btn");
const cost = document.getElementById('cost');
const people = document.getElementById('people');
const result = document.querySelector('.result');

const finalObjMake = (people , cost , dish) => {
    const finalObj = {
        dish: dish ,
        perPeopleCost: cost / people,
        cost: cost,
    };
    return finalObj;
};

btn.addEventListener("click" , (e) => {
    e.preventDefault();
    if(dish.value && cost.value && people.value){
        const finalCost = finalObjMake(
            Number(people.value),
            Number(cost.value),
            dish.value
        );
        result.innerText = "Final Cost:"  + JSON.stringify(finalCost);
        
    }else{
        result.innerHTML = 'Enter value to calculate';
    }
});