canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouse_event = "empty";

var last_position_of_x , last_position_of_y;
color = "black";
width_of_line = 1 ;

canvas.addEventListener("mousedown", myMousedown);

function myMousedown(e) {

    color = document.getElementById("color").Value;
    width_of_line = document.getElementById("line").Value;

    mouse_event = "mousedown";
}

canvas.addEventListener("mouseup", myMouseup);

function myMouseup(e) {

    mouse_event = "mouseup";
}

canvas.addEventListener("mouseleave", myMouseleave);

function myMouseleave(e) {

    mouse_event = "mouseleave";
}

canvas.addEventListener("mousemove", myMouseMove);

function myMouseMove(e) {

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouse_event == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("last position of x and y corrdinates are  ");
        console.log("X = " + last_position_of_x + "Y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x , last_position_of_y);
        
        console.log("current position of x and y corrdinates are  ");
        console.log("X = " + current_position_of_mouse_x + "Y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y);
        ctx.stroke();

        last_position_of_x = current_position_of_mouse_x;
        last_position_of_y = current_position_of_mouse_y;
    }
}

function clear_area(){

    ctx.clearRect(0,0, canvas.width, canvas.height);
}