var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var width = '20px';
var color = 'red';

var mousePressed = false;
var lastX, lastY;

function start() {

    canvas.onmousedown = function(e) {
        mousePressed = true;
        Draw(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, false);
    }

    canvas.onmousemove = function (e) {
        if (mousePressed) {
            Draw(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        }
    }

    canvas.onmouseup = function (e) {
        mousePressed = false;
    }

      canvas.onmouseleave = function (e) {
        mousePressed = false;
    }
}

function Draw(x, y, isDown) {
    if (isDown) {
        context.beginPath();
        context.strokeStyle = 'red';
        context.lineWidth = 10;

        context.moveTo(lastX, lastY);
        context.lineTo(x, y);
        context.closePath();
        context.stroke();
    }
    lastX = x; lastY = y;
}

function remove() {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
