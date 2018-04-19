define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var ProgressBar = require('progressbar');
    var inView = require('in-view');

    var elements = document.querySelectorAll('.header');
    elements.forEach(element => {
        element.classList.add('fadeInUp');
        element.classList.add('animated');
    });

    var sympliact = document.querySelector('#sympliact-container')

    inView('#experience-title').on(
        'enter', el => {
            el.classList.add('fadeInUp');
            el.classList.add('animated');
        }
    )

    inView('#sympliact-container').on(
        'enter', el => {
            sympliact.classList.add('fadeInRight');
            sympliact.classList.add('animated');
            
        }
    )


    inView('#progressBars').on(
        'enter', el => {
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
        });
    
    inView('#experienceBar').on(
        'enter', el => {
            experienceBar.animate(1, {
                duration: 800,
                easing: 'easeInOut'
            });
        });

    var titleBar = new ProgressBar.Line('#titleBar', {
        strokeWidth: 1,
        color: "#F44336",
    });

    var experienceBar = new ProgressBar.Line('#experienceBar', {
        strokeWidth: 1,
        color: "#F44336",
    });

    setTimeout(function(){
        titleBar.animate(1, {
            duration: 800,
            easing: 'easeInOut',
            
        });
    }, 600);

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