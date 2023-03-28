const btn = document.querySelector('.btn');
const section = document.querySelector('.main-section');

const arr = ['a','b','c','d','e','f','1','2','3','4','5','6','7','8','9'];

const colorChange = () => {
    let color = '#';
    for(let i = 0; i < 6; i++){
        const randomNum = Math.floor(Math.random() * (15 + 1));
        color += arr[randomNum];
    }
    return color;
};

btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('change color');

    section.style.backgroundImage = `linear-gradient(to right, ${colorChange()}, ${colorChange()})`;
});
