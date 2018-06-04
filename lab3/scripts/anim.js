var images,
    imgCount = 0,
    StopStartAnimation = true;
if (window.addEventListener) {
    window.addEventListener('load', pageloadAnimation);
} else {
    window.attachEvent('onload', pageloadAnimation);
}
function pageloadAnimation() {
    "use strict";
    document.getElementById('ucl').width = 480;
    document.getElementById('ucl').height = 270;
    images = new Array(20);
    for (var i = 0; i < images.length; i++) {
        images[i] = new Image();
        images[i].src = 'ann/' + i + '.jpg';
    }
    plotvaUpnDown();
    document.getElementById('ucl').onclick = function() {
        if (StopStartAnimation) StopStartAnimation = false;
        else {
            StopStartAnimation = true;
            plotvaUpnDown();
        }
    }
}
function plotvaUpnDown() {
    "use strict";
    var ringInHands = document.getElementById('ucl'),
        ringcontext = ringInHands.getContext('2d');
    ringcontext.drawImage(images[Math.floor(imgCount / 4)], 0, 0);//запуск анимации
    imgCount = Math.floor((imgCount + 1) % 80);
    if (StopStartAnimation) {
        requestAnimationFrame(plotvaUpnDown);//повтор
    }
}