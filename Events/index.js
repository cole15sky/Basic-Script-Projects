
var  btn = document.getElementById('click-button');
var mainHeader =document.getElementById('Header');

function onBtnClick() {
 mainHeader.style.backgroundColor='yellow';

}



btn.addEventListener('click',onBtnClick);