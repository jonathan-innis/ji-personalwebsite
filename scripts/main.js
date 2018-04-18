define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var ProgressBar = require('progressbar');
    var scrollSnap = require('scrollSnap');

    window.sr = ScrollReveal();

    sr.reveal(".header");

    sr.reveal('#progressBars', {
        afterReveal: function() {
            progressBar1.animate(0.3, {
                duration: 800,
                easing: 'easeInOut'
            });
            progressBar2.animate(0.3, {
                duration: 800,
                easing: 'easeInOut'
            });
            progressBar3.animate(0.3, {
                duration: 800,
                easing: 'easeInOut'
            });
        }
    });


    var progressBar1 = new ProgressBar.Line('#progress1', {
        strokeWidth: 2,
        color: "#F44336"
    });
    var progressBar2 = new ProgressBar.Line('#progress2', {
        strokeWidth: 2,
        color: "#F44336"
    });
    var progressBar3 = new ProgressBar.Line('#progress3', {
        strokeWidth: 2,
        color: "#F44336"
    });
});