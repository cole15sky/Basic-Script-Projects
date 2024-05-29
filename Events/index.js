
var  btn = document.getElementById('click-button');
var mainHeader =document.getElementById('Header');

function onBtnClick() {
  mainHeader.style.backgroundColor=("rgb(" + Math.floor(Math.random()*165) + "," + Math.floor(Math.random()*165) + "," + Math.floor(Math.random()*165) +")");  
}

btn.addEventListener('click',onBtnClick); 