'use strict'
let numberEls=document.querySelectorAll('.number');
const addEls=document.querySelectorAll('.add');
const minEls=document.querySelectorAll('.min');
const backBtn=document.querySelector('.left-arrow');

let counts=[0,0,0];

backBtn.addEventListener('click',function(){
    history.back();
})

addEls.forEach(function(currentValue, index){
    currentValue.addEventListener('click',function()
    {
        counts[index]++;
        numberEls.forEach(function(currentValue,index){
            currentValue.classList.add('font-size');
            currentValue.textContent=counts[index];
        });
    });
}
);
minEls.forEach(function(currentValue, index){
    currentValue.addEventListener('click',function()
    {
        counts[index]=counts[index]==0?counts[index]:--counts[index];
        numberEls.forEach(function(currentValue,index){
        currentValue.classList.add('font-size');
        currentValue.textContent=counts[index];
        });
    });
}
);
document.querySelector('.nav-contactus').addEventListener('click',function(){
    window.location='FlowerShop/contact_us.html';
    console.log('true');
});
const addExp=function(a,b){
    console.log(arguments);
}
    
