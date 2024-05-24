console.log("check! js loaded");
var countdownElement= document.getElementById('count-down');
var backgroundPath =document.getElementById('bg-img');

var initialCountdownVal = countdownElement.innerHTML;

setInterval (function(){
initialCountdownVal = initialCountdownVal >0? initialCountdownVal -1: 0;
countdownElement.innerHTML=initialCountdownVal;
 var backImgpath = initialCountdownVal %2 ===0? '/img/2.png' : '/img/1.png';
 backgroundPath.src =backImgpath;


},1000);



