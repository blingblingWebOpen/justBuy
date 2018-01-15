//- 设置根元素fontSize~
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



