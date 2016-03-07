$(document).ready(function($) {
    

    run();
    setInterval(run, 1000);

    
    var clockElement = $('.clock');
    
    for(var i = 0; i < clockElement.length; i++) {
        var clock = new Clock(clockElement[i]);
    }


});


var Clock = function(node, width, height, backgroundColor, frontColor) {
    this.node = node;
    this.width = width;
    this.height = height;
    this.backgroundColor = backgroundColor;
    this.frontColor = frontColor;
    function createNode() {
        return $('<div></div>').append($('<canvas></canvas>')).append($('<div></div>'));
    }

    function insertNode(node) {
        $(node).append(createNode()).append(createNode()).append(createNode());        
    }

    this.run = function() {
        
    };

    function setCss() {
        $(node).css({
            'width':'600px',
            'height': '200px',
            'background-color': '#ffffff'
        });
        $(node).children('*').children('*').css('position', 'absolute');
        $(node).children('*').css({
            'width':'200px', 
            'height':'200px', 
            'display':'inline-block',
            'background-color': '#2Cffff',
            'position': 'relative'
        });
        $(node).children('*').children('div').css({
            'width': '50px',
            'height': '50px',
            'border-radius': '50px',
            'margin-left': '50px',
            'margin-top': '50px',
            'background-color': '#2C34ff',
            'color': 'white',
            'font-size': '50px',
            'padding': '13px 28px 37px 22px'
        });
    }

    insertNode(this.node);
    setCss();

};



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