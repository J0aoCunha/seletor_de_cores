var body = document.querySelector('body')
var red = document.getElementById('red')
var green = document.getElementById('green')
var blue = document.getElementById('blue')


red.addEventListener('input', updateColor);
green.addEventListener('input', updateColor);
blue.addEventListener('input', updateColor);

function mudarCores() {

    redValue = red.value;
    greenValue = green.value;
    blueValue = blue.value;

    body.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}




00