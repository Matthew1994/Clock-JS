$(document).ready(function($) {
    var clockElement = $('.clock');
    
    for(var i = 0; i < clockElement.length; i++) {
        var clock = new Clock(clockElement[i]);
    }


});


var Clock = function(node) {
    this.node = node;
    this.width = $(node).attr('width') || "600px";
    this.height = $(node).attr('height') || "200px";

    this.backgroundColor = $(node).attr('backgroundColor') || '#2C3437';
    this.frontColor = $(node).attr('frontColor') || "#ffff88";

    function createNode() {
        return $('<div></div>').append($('<canvas></canvas>')).append($('<div></div>'));
    }

    function insertNode(node) {
        $(node).append(createNode()).append(createNode()).append(createNode());        
    }

    this.run = function(frontColor) {
        var time = new Date();

        var hour = $(node).children('*').children('div');

        $(hour[0]).text(time.getHours().toString().length <= 1 ? "0" + time.getHours().toString() : time.getHours().toString());
        $(hour[1]).text(time.getMinutes().toString().length <= 1 ? "0" + time.getMinutes().toString() : time.getMinutes().toString());
        $(hour[2]).text(time.getSeconds().toString().length <= 1 ? "0" + time.getSeconds().toString() : time.getSeconds().toString());

        var canvas = $(node).children('*').children('canvas');
        
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

            context.fillStyle = frontColor;
            
            context.fill();
        }
    };

    this.setCss = function() {
        $(this.node).css({
            'width':'600px',
            'height': '200px'            
        });
        $(node).children('*').children('*').css('position', 'absolute');

        $(this.node).children('*').css({
            'width':'200px', 
            'height':'200px', 
            'display':'inline-block',
            'background-color': this.backgroundColor,
            'position': 'relative'
        });

        $(this.node).children('div:first').css({
            'border-top-left-radius': '100px',
            'border-bottom-left-radius': '100px',
        });

        $(this.node).children('div:last').css({
            'border-top-right-radius': '100px',
            'border-bottom-right-radius': '100px',
        });

        $(this.node).children('*').children('div').css({
            'width': '50px',
            'height': '50px',
            'border-radius': '50px',
            'margin-left': '50px',
            'margin-top': '50px',
            'background-color': this.backgroundColor,
            'color': 'white',
            'font-size': '50px',
            'padding': '13px 28px 37px 22px'
        });
    };

    insertNode(this.node);
    this.setCss();
    this.run(this.frontColor);
    setInterval(this.run, 1000, this.frontColor);
};

/*

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
*/



/* javascript 原生
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