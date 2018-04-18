define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var ProgressBar = require('progressbar');
    var scrollSnap = require('scrollSnap');

    scrollSnap.init({
        elements: document.querySelectorAll('section'),
        minWidth: 600,
        minHeight: 400,
        detectMobile: true,
        keyboard: true,
        duration: 20,
        timing: scrollSnap._timing
    });


    var progressBar = new ProgressBar.Line('#progress1', {
        strokeWidth: 2,
        color: "#000"
    });
    progressBar.animate(0.3, {
        duration: 800,
        easing: 'easeInOut'
    }, function() {
        console.log('Animation has finished');
    });
    var progressBar = new ProgressBar.Line('#progress2', {
        strokeWidth: 2,
        color: "#000"
    });
    progressBar.animate(0.3, {
        duration: 800,
        easing: 'easeInOut'
    }, function() {
        console.log('Animation has finished');
    });
});