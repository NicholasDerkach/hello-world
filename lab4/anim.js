
$(document).ready(function () {
    $("#moveitbith").click(function () {
        makeItBounce();
        showSlides();
       hideshow();
    });
    $("#mh").click(function () {
        $('#myach').lol();
    });
})
    //photos animation
    var group_photos_move = function () {
        $("#yum").slideToggle("slow", function () {
        });
        setTimeout(group_photos_move, 1500);
    };
    var makeItBounce = function () {
        for (var i = 0; i < 140; i++) {
            //Let's add something

            var ball = $('#ballq');
            ball.css('position', 'absolute').css('top', 740);

            var x, y, affX, affY;
            var initX = parseInt(ball.css('left'));
            var initY = parseInt(ball.css('top'));

            var rdX = 15;
            var rdY = 200;

            for (x = 1; x < 54; x = x + 0.1) {
                y = (Math.abs(Math.cos(x / 2))) / x * x;
                affX = initX + x * rdX;
                affY = initY - y * rdY;
                ball.animate({left: affX, top: affY}, 10);
                }

        }
    };

    var slideIndex = 0;

// Next/previous controls
    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

$.fn.lol=function () {
    var ttt=function(){
        $('.myach').animate({
            left: '4vw', top:'52vh',
            height: '+=4vh',
            width: '+=3vw'
        });
        setTimeout(ttt,200);
    };
    var ttt1=function(){
        $('.myach').animate({
            left: '4vw',
            height: '-=4vh',
            width: '-=3vw'
        });
        setTimeout(ttt1,200);
    };
    var ownFunction=function () {
        for ( var x = 0; x < 4; x = x+1) {
            ttt();
        }
        for ( var x = 0; x < 4; x = x+1) {
            ttt1();
        }
        setTimeout(ownFunction,6000);
    };
ownFunction();
};
var hideshow=function () {
    $("#yum").fadeTo(1000, 0);
    $("#yum").fadeTo(1000, 1);
    setTimeout(hideshow,2500)
};

