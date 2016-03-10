(function($) {
    $.fn.clock = function() {
        var clockOn = function(node) {
            for (var index = 0; index < node.length; index++)
                var c = new Clock(node[index]);
        }
        clockOn(this);    
    }
})($);

$(document).ready(function($) {
    $('.clock').clock();
});



 

var Clock = function(node) {
    this.node = node;
    if (!$(this.node).attr('width') && !$(this.node).attr('height')) {
        this.width = 600;
        this.height = 200;
    } else {
        console.log($(this.node).attr('width'));
        if ($(this.node).attr('width') && $(this.node).attr('height')) {
            this.width =　parseInt($(this.node).attr('width'));
            this.height =　parseInt($(this.node).attr('height'));
            this.width >= this.height*3 ? this.width = this.height*3 : this.height = this.width/3;
        } else {
            this.width = $(this.node).attr('width') ? parseInt($(this.node).attr('width')) : parseInt($(this.node).attr('height'))*3;
            this.height = $(this.node).attr('height') ? parseInt($(this.node).attr('height')) : parseInt($(this.node).attr('width'))/3;
        }
    }
    this.fontColor = $(this.node).attr('fontColor') || '#ffffff';
    this.backgroundColor = $(this.node).attr('backgroundColor') || 'rgba(55,55,55,0.5)';
    this.frontColor = $(this.node).attr('frontColor') || "#2a8";

    function createNode() {
        return $('<div></div>').append($('<canvas></canvas>')).append($('<div></div>'));
    }

    function insertNode(node) {
        $(node).append(createNode()).append(createNode()).append(createNode());        
    }

    this.run = function(that) {
        var time = new Date();

        var hour = $(that.node).children('*').children('div');

        $(hour[0]).text(time.getHours().toString().length <= 1 ? "0" + time.getHours().toString() : time.getHours().toString());
        $(hour[1]).text(time.getMinutes().toString().length <= 1 ? "0" + time.getMinutes().toString() : time.getMinutes().toString());
        $(hour[2]).text(time.getSeconds().toString().length <= 1 ? "0" + time.getSeconds().toString() : time.getSeconds().toString());

        var canvas = $(that.node).children('*').children('canvas');
        
        for (var j = 0; j < canvas.length; j++) {
            // canvas[j].width = 200;
            // canvas[j].height = 200;
            
            canvas[j].width = that.height;
            canvas[j].height = that.height;
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
            context.arc(that.height/2, that.height/2, that.height/2, -Math.PI / 2, -Math.PI / 2 + 2 * Math.PI / 60 * i, false);
            context.lineTo(that.height/2, that.height/2);

            context.fillStyle = that.frontColor;
            
            context.fill();
        }
    };

    this.setCss = function() {
        $(this.node).css({
            'width':　this.width + 'px',
            'height': this.height + 'px'            
        });
        $(this.node).children('*').children('*').css('position', 'absolute');

        $(this.node).children('*').css({
            'width':this.width/3 + 'px',
            'height':this.height + 'px',
            'display':'inline-block',
            'background-color': this.backgroundColor,
            'position': 'relative'
        });

        $(this.node).children('div:first').css({
            'border-top-left-radius': this.height/2 + 'px',
            'border-bottom-left-radius': this.height/2 + 'px'
        });

        $(this.node).children('div:last').css({
            'border-top-right-radius': this.height/2 + 'px',
            'border-bottom-right-radius': this.height/2 + 'px'
        });

        $(this.node).children('*').children('div').css({
            'width': this.height/2 + 'px',
            'height': this.height/2 + 'px',
            'border' : '0px',
            'padding' : '0px',
            'text-align':'center',
            'line-height':this.height/2 + 'px',
            'border-radius': this.height/4 + 'px',
            'margin-left': this.width/12 + 'px',
            'overflow' : 'hidden',
            'margin-top': this.height/4 + 'px',
            'background-color': this.backgroundColor,
            'color': this.fontColor,
            'font-size': this.height/4 + 'px'
        });
    };

    insertNode(this.node);
    this.setCss();
    var that = this;

    this.run(that);
    
    setInterval(this.run, 1000, that);
};
