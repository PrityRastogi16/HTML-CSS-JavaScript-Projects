const inp = document.querySelector('.inp');
const btn = document.querySelector('.btn');
const msg = document.querySelector('.msg');

btn.addEventListener("click" , (e) => {
    e.preventDefault();

    if(inp.value){
        const todoItem = document.createElement('li');
        todoItem.classList.add('list-item');
        todoItem.innerHTML = inp.value;
        console.log(todoItem);
        msg.appendChild(todoItem);

        inp.value = '';
    }
});


  








