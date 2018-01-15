(function (doc, win) {
    var _root = doc.documentElement,
        resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize',
        resizeCallback = function () {
            var clientWidth = _root.clientWidth,
                fontSize = 100;
            if (!clientWidth) return;
            if(clientWidth < 750) {
                fontSize = 100 * (clientWidth / 375);
            } else {
                fontSize = 100 * (750 / 360);
            }
            _root.style.fontSize = fontSize + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvent, resizeCallback, false);
    doc.addEventListener('DOMContentLoaded', resizeCallback, false);
    resizeCallback();
})(document, window);



function setupSwipe(ele) {
    var img_width = [ 0,0.9];
    var currentImg = 0;
    var maxImages = 2;
    var speed = 100;
    var MAX_WIDTH = 0.9;
    var imgs;
    var swipeOptions = {
        triggerOnTouchEnd: true,
        swipeStatus: swipeStatus,
        swipeUp: swipeUp,
        allowPageScroll: "vertical",
        triggerOnTouchLeave: true,
        threshold: 20
    };

    $(function () {
        imgs = $(ele);
        imgs.swipe(swipeOptions);
    });

    function swipeUp(event) {
        console.log('leaving.');
        scrollImages(img_width[currentImg], speed);
    }

    function swipeStatus(event, phase, direction, distance) {
        if (phase != "start" && phase != "move" && phase != "cancel" && phase != 'end') {
            alert(phase);
        }
        if (phase == "move" && (direction == "left" || direction == "right")) {
            var duration = 0;

            if (direction == "left") {
                scrollImages(Math.min(img_width[currentImg] + distance, MAX_WIDTH), duration);
            } else if (direction == "right") {
                scrollImages(Math.max(0, img_width[currentImg] - distance), duration);
            }

        } else if (phase == "cancel") {
            scrollImages(img_width[currentImg], speed);
        } else if (phase == "end") {
            if (direction == "right") {
                previousImage();
            } else if (direction == "left") {
                nextImage();
            }
        }
    }

    function previousImage() {
        currentImg = Math.max(currentImg - 1, 0);
        scrollImages(img_width[currentImg], speed);
    }

    function nextImage() {
        currentImg = Math.min(currentImg + 1, maxImages - 1);
        scrollImages(img_width[currentImg], speed);
    }
    function scrollImages(distance, duration) {
        imgs.css("transition-duration", (duration / 100).toFixed(1) + "s");
        var value = (distance < 0 ? "" : "-") + Math.abs(distance).toString();
        imgs.css("transform", "translate(" + value + "rem,0)");
    }
}

setupSwipe('#move1');
// setupSwipe('#move1');
setupSwipe('#move2');
setupSwipe('#move3');
setupSwipe('#move4');
setupSwipe('#move5');
