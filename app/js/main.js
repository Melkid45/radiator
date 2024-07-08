var splide = new Splide(".splide", {
  perPage: 3,
  rewind: true,
  type: 'loop',
  gap: '40px'
});

splide.mount();


document.querySelectorAll(".que__body-box-item").forEach((el) => {
  el.addEventListener('click', ()=> {
      let cont = el.querySelector('.desc');
      let con = cont.parentNode;
      if (cont.style.maxHeight) {
          document.querySelectorAll('.desc').forEach((el)=> el.style.maxHeight = null)
          document.querySelectorAll('.que__body-box-item').forEach((el)=> el.classList.remove('open'))
      } else {
          document.querySelectorAll('.desc').forEach((el)=> el.style.maxHeight = null)
          document.querySelectorAll('.que__body-box-item').forEach((el)=> el.classList.remove('open'))
          con.classList.add('open')
          cont.style.maxHeight = cont.scrollHeight + 'rem';
      }
  })
})


SmoothScroll({
  // Время скролла 400 = 0.4 секунды
  animationTime    : 800,
  // Размер шага в пикселях 
  stepSize         : 45,

  // Дополнительные настройки:
  
  // Ускорение 
  accelerationDelta : 30,  
  // Максимальное ускорение
  accelerationMax   : 1,   

  // Поддержка клавиатуры
  keyboardSupport   : true,  
  // Шаг скролла стрелками на клавиатуре в пикселях
  arrowScroll       : 100,

  // Pulse (less tweakable)
  // ratio of "tail" to "acceleration"
  pulseAlgorithm   : true,
  pulseScale       : 4,
  pulseNormalize   : 1,

  // Поддержка тачпада
  touchpadSupport   : true,
})