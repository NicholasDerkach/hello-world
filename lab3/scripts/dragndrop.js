var drag= function () {
    'use strict';
    //задання елементів, які будуть пересуватися
    var logo1 = document.getElementById('l1'),
        logo2 = document.getElementById('l2'),
        logo3 = document.getElementById('l3'),
        logo4 = document.getElementById('l4'),
        dragelements,//зони перетягування елементів
        drophere,
        stylebox;
    if (document.getElementsByClassName) {
        drophere = document.getElementsByClassName('drop')[0],
            stylebox = document.getElementsByClassName('stylebox')[0];
    } else {
        drophere = document.querySelectorAll('.drop')[0];
        stylebox = document.querySelectorAll('.stylebox')[0];
    }
    function catchhand(e) {//захоплення елементу для перетягування
        dragelements = this;
        e = e || window.event;
        dragelements.ondragstart = function () {
            return false;
        };
        function movem(e) {//перетягування
            e = e || window.event;
            if (!e.pageX) {
                e.pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                e.pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }
            if (e.pageX - dragelements.offsetWidth / 2 > stylebox.offsetLeft && e.pageX + dragelements.offsetWidth / 2 < stylebox.offsetLeft + stylebox.offsetWidth) {
                dragelements.style.left = e.pageX - dragelements.offsetWidth / 2 + 'px';
            } else if (e.pageX + dragelements.offsetWidth / 2 < stylebox.offsetLeft + stylebox.offsetWidth) {
                dragelements.style.left = stylebox.offsetLeft + 'px';
            }
            if (e.pageY - dragelements.offsetHeight / 2 > stylebox.offsetTop && e.pageY + dragelements.offsetHeight / 2 < stylebox.offsetTop + stylebox.offsetHeight) {
                dragelements.style.top = e.pageY - dragelements.offsetHeight / 2 + 'px';
            } else if (e.pageY + dragelements.offsetHeight / 2 < stylebox.offsetTop + stylebox.offsetHeight) {
                dragelements.style.top = stylebox.offsetTop + 'px';
            }
        }
        dragelements.style.position = 'absolute';
        movem(e);
        dragelements.style.zIndex = 10;//
        document.onmousemove = movem;
        dragelements.onmouseup = function (e) {
            e = e || window.event;
            if (!e.pageX) {//запам'ятати зону перетягування
                e.pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                e.pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }
            document.onmousemove = null;
            dragelements.onmouseup = null;
            if (e.pageX > drophere.offsetLeft && e.pageX < drophere.offsetLeft + drophere.offsetWidth && e.pageY > drophere.offsetTop && e.pageY < drophere.offsetHeight + drophere.offsetTop) {//изменение элементов станицы при попадании одного из элементов в drophere
                if (dragelements === logo1) {
                    document.getElementById('forma').style.background = " url('styles/backgr/1.png') no-repeat center ";
                    logo1.style.position = 'relative';
                    logo1.style.top = '10px';
                    logo1.style.left = '10px';
                }
                if (dragelements === logo2) {
                    document.getElementById('forma').style.background = " url('styles/backgr/2.png') no-repeat center ";
                    logo2.style.position = 'relative';
                    logo2.style.top = '10px';
                    logo2.style.left = '10px';
                }
                if (dragelements === logo3) {
                    document.getElementById('forma').style.background = " url('styles/backgr/3.png') no-repeat center ";
                    logo3.style.position = 'relative';
                    logo3.style.top = '10px';
                    logo3.style.left = '10px';
                }
                if (dragelements === logo4) {
                    document.getElementById('forma').style.background = " url('styles/backgr/4.png') no-repeat center ";
                    logo4.style.position = 'relative';
                    logo4.style.top = '10px';
                    logo4.style.left = '10px';
                }
            }
        };
    }
    logo1.onmousedown = catchhand;
    logo4.onmousedown = catchhand;
    logo2.onmousedown = catchhand;
    logo3.onmousedown = catchhand;
    window.onresize = reset_blocks;//повернути елементи на місце при масштабуванні
    function reset_blocks() {
        logo1.style.position = 'relative';
        logo4.style.position = 'relative';
        logo2.style.position = 'relative';
        logo3.style.position = 'relative';
        logo1.style.left = '10px';
        logo4.style.left = '10px';
        logo2.style.left = '10px';
        logo3.style.left = '10px';
        logo1.style.top = '10px';
        logo4.style.top = '10px';
        logo2.style.top = '10px';
        logo3.style.top = '10px';
    }
};
//запуск скрипта при запуску сторінки
if (window.addEventListener) {
    window.addEventListener('load',drag);
} else {
    window.attachEvent('onload',drag);
}