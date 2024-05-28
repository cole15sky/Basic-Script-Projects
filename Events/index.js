
var  btn = document.getElementById('click-button');

// we can handel the event properties by two ways.

// i.hrough event properties as;

function onBtnClick() {
    alert("I'm clicked.");
}

// btn.onclick = onBtnClick;

// ii. through event listener.

btn.addEventListener('click',onBtnClick);