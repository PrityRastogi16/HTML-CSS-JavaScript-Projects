const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

(randomNumGen = () => {
  const randomNum = Math.floor(Math.random() * (100) );
  result.innerText = `Random number: ${randomNum}`;
});

btn.addEventListener("click" , (e) => {
  e.preventDefault();
  randomNumGen();
})
