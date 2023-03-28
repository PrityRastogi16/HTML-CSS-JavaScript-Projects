const bar = document.querySelector('.bar');
const section = document.querySelector('.progressBar-section');

document.addEventListener('scroll', () => {
    
  const scrollPercentage =
    (document.documentElement.scrollTop /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)) *
    100;

  bar.style.width = scrollPercentage + '%';
});


  








