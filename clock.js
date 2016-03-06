$(document).ready(function($) {
    run();
    setInterval(run, 1000);
});



function run() {
    var time = new Date();
    var hour = $(".inner-circle");
    $(hour[0]).text(time.getHours().toString().length <= 1 ? "0" + time.getHours().toString() : time.getHours().toString());
    $(hour[1]).text(time.getMinutes().toString().length <= 1 ? "0" + time.getMinutes().toString() : time.getMinutes().toString());
    $(hour[2]).text(time.getSeconds().toString().length <= 1 ? "0" + time.getSeconds().toString() : time.getSeconds().toString());

    var canvas = $(".sector");
    for (var j = 0; j < canvas.length; j++) {
        canvas[j].width = 200;
        canvas[j].height = 200;
        var context = canvas[j].getContext('2d');
        var i;
        if (j == 0) {
            i = time.getHours();
        }
        if (j == 1) {
            i = time.getMinutes();
        }
        if (j == 2) {
            i = time.getSeconds();
        }
        context.arc(100, 100, 100, -Math.PI / 2, -Math.PI / 2 + 2 * Math.PI / 60 * i, false);
        context.lineTo(100, 100);
        context.fillStyle = "#ffff88";
        context.fill();
    }
}




window.onload = function() {
    run();
    setInterval(run, 1000);
}

/*
function run() {
    var time = new Date();
    var hour = document.getElementsByClassName("inner-circle");
    hour[0].innerHTML = time.getHours().toString().length <= 1 ? "0" + time.getHours().toString() : time.getHours().toString();
    hour[1].innerHTML = time.getMinutes().toString().length <= 1 ? "0" + time.getMinutes().toString() : time.getMinutes().toString();
    hour[2].innerHTML = time.getSeconds().toString().length <= 1 ? "0" + time.getSeconds().toString() : time.getSeconds().toString();

    var canvas = document.getElementsByClassName("sector");
    for (var j = 0; j < canvas.length; j++) {
        canvas[j].width = 200;
        canvas[j].height = 200;
        var context = canvas[j].getContext('2d');
        var i;
        if (j == 0) {
            i = time.getHours();
        }
        if (j == 1) {
            i = time.getMinutes();
        }
        if (j == 2) {
            i = time.getSeconds();
        }
        context.arc(100, 100, 100, -Math.PI / 2, -Math.PI / 2 + 2 * Math.PI / 60 * i, false);
        context.lineTo(100, 100);
        context.fillStyle = "#ffff88";
        context.fill();
    }
}
*/