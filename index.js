const ThankscuteBtn = document.querySelector('#ThankscuteBtn');

ThankscuteBtn.addEventListener('click',function () {
    alert('No hay de que preciosa, pasala bonito te amooo')
}) ;

const ThanksBtn = document.querySelector('#ThanksBtn');

ThanksBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    ThanksBtn.style.setProperty('top',randomY+'%');
    ThanksBtn.style.setProperty('left',randomX+'%');
    ThanksBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})