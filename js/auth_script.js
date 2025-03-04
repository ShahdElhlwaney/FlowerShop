'use strict'
const navEl=document.querySelector('.auth-nav');
let forgetStmEl=document.querySelector('.forgot_password');
navEl.addEventListener('click',function(){

    if(navEl.textContent===' Sign up')
    {
        document.querySelector('input[type="text"]').classList.toggle('hidden');
        document.querySelector('h1').textContent='Sign up';
        document.querySelector('.auth-nav').textContent=" Login";
        document.querySelector('.nav-statement').textContent="have an account?";
        forgetStmEl.classList.toggle('hidden');
    }
    else
    {
        document.querySelector('input[type="text"]').classList.toggle('hidden');
        document.querySelector('h1').textContent='Login';
        document.querySelector('.auth-nav').textContent=" Sign up";
        document.querySelector('.nav-statement').textContent="Don't have an account?";
        forgetStmEl.classList.toggle('hidden');
    } 
});

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click',function(){
    header.style.color='blue';
    })
   
  })();