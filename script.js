var ball = document.getElementById("ball");

ball.style.top = ball.offsetTop + "px";
ball.style.left = ball.offsetLeft + "px";

var ballHeight = ball.offsetHeight;
var ballWidth = ball.offsetWidth;

function setValue(value) {
    return value + "px";
}

function key(keyPress) {
    
    var top = parseInt(ball.style.top);
    var left = parseInt(ball.style.left);

    // W is pressed
    if (keyPress === "w" || keyPress === "W" || keyPress === "ArrowUp") {
        if (top > 5) {
            ball.style.top = setValue(top - 5);
        }
    }

    // A is pressed
    else if (keyPress === "a" || keyPress === "A" || keyPress === "ArrowLeft") {
        if (left > 5) {
            ball.style.left = setValue(left - 5);
        }
    }

    // S is pressed
    else if (keyPress === "s" || keyPress === "S" || keyPress === "ArrowDown") {
        if (top < (window.innerHeight - ballHeight) - 5) {
            ball.style.top = setValue(top + 5);
        }
    }

    // D is pressed
    else if (keyPress === "d" || keyPress === "D" || keyPress === "ArrowRight") {
        if (left < (window.innerWidth - ballWidth) - 5) {
            ball.style.left = setValue(left + 5);
        }
    }

};

window.addEventListener("keydown", function (event) 
{
    key(event.key)
});