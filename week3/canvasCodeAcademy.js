var my_canvas = document.getElementById('canvas');

var context = my_canvas.getContext("2d");

context.beginPath();

context.fillStyle="#FF0000";

context.fillRect(10, 10, 50, 20);

context.stroke();
context.font = "30px Garamond";
context.fillText("Hello!",15,175);