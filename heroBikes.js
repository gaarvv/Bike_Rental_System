const turnYellow = document.querySelector('.yellow');
const turnRed = document.querySelector('.red');
const turnBlack = document.querySelector('.black');
const productImg = document.querySelector('.img-container');

turnYellow.addEventListener('click', function (){
    productImg.style.backgroundImage = 'url("Images/Hero/01.png")';
})

turnRed.addEventListener('click', function (){
    productImg.style.backgroundImage = 'url("Images/Hero/02.png")';
})

turnBlack.addEventListener('click', function (){
    productImg.style.backgroundImage = 'url("Images/Hero/03.png")';
})