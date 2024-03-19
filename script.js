const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const RegistrationLink = document.querySelector('.Registration-link');
const btnSignUp = document.querySelector('.cta');
const btnClose = document.querySelector('.icon-close');
const menuu = document.querySelector('.menu');

RegistrationLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
})

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
})

btnSignUp.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
    menuu.classList.add('void');
})

btnClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
    menuu.classList.remove('void');
})