const item = document.getElementById('item');
const addBtn = document.querySelector(".add");
const calBtn = document.querySelector(".calc");
const price = document.getElementById('price');
const quantity = document.getElementById('quantity');
const result = document.querySelector('.result');
const cartElem = document.querySelector('.cart');

const cart = [];
const totaler = (item , price , quantity) => {
    const obj ={
        item,
        price,
        quantity,
        total: price * quantity,
    };
    return obj ;

};

addBtn.addEventListener("click" , (e) => {
    e.preventDefault();
    if(item.value, price.value , quantity.value){
        const cartItem = totaler(
            item.value,
            Number(price.value),
            Number(quantity.value)
        );
        cart.push(cartItem)

        item.value = '';
        price.value = '';
        quantity.value = '';
        cartElem.innerHTML = JSON.stringify(cart);

    }
});

calBtn.addEventListener("click" , (e) => {
    e.preventDefault();
    let finalBiiling = 0;
    cart.forEach((item) => {
        finalBiiling += item.total;

    });
    result.innerText = "Total price is : " + finalBiiling;
});

