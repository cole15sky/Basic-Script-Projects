
var  btn = document.getElementById('click-button');

// we can handel the event properties by two ways.

// through event properties as;

function onBtnClick() {
    alert("I'm clicked.");
}

btn.onclick = onBtnClick;