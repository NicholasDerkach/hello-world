if(window.addEventListener) {
    window.addEventListener('load', function () {

        var canvas, context, tool;

        function init () {

            canvas = document.getElementById('canvas');

            tool = new tool_pencil();
            canvas.addEventListener('mousedown', ev_canvas, false);
            canvas.addEventListener('mousemove', ev_canvas, false);
            canvas.addEventListener('mouseup',   ev_canvas, false);
        }

        // ловити рухи мишки
        function tool_pencil () {
            var tool = this;
            this.started = false;


            this.mousedown = function (ev) {
                context.beginPath();
                context.moveTo(ev._x, ev._y);
                tool.started = true;
            };

            this.mousemove = function (ev) {
                if (tool.started) {
                    context.lineTo(ev._x, ev._y);
                    context.stroke();
                }
            };

            this.mouseup = function (ev) {
                if (tool.started) {
                    tool.mousemove(ev);
                    tool.started = false;
                }
            };
        }

        function ev_canvas (ev) {
            if (ev.layerX || ev.layerX == 0) {
                ev._x = ev.layerX;
                ev._y = ev.layerY;
            } else if (ev.offsetX || ev.offsetX == 0) {
                ev._x = ev.offsetX;
                ev._y = ev.offsetY;
            }


            var func = tool[ev.type];
            if (func) {
                func(ev);
            }
        }

        init();

    }, false); }