define(require => {
    var ProgressBar = require('progressbar');
    var inView = require('in-view');
    window.sr = ScrollReveal({duration: 1000, origin: 'bottom'});

    sr.reveal('#information1 p');
    sr.reveal('#infoheader1');
    sr.reveal('#information2-container');
    sr.reveal('#infoheader2');
    sr.reveal('#frameworks-title');
    sr.reveal('#frameworks-overview');
    sr.reveal('#languages-title');
    sr.reveal('#languages-overview');
    sr.reveal('#sympliact-container');
    sr.reveal('#cisco-container');
    sr.reveal('#skills-header');
    sr.reveal('#contact-container');
    sr.reveal('#contact-subtitle');
    sr.reveal('#contact-description');
    
    $('#experienceBar').fadeTo(0,0);
    inView('#experienceBar').on(
        'enter', el => {
            $('#experienceBar').fadeTo(0,1);
            experienceBar.animate(1, {
                duration: 800,
                easing: 'easeInOut'
            });
        }
    );

    $('#skillsBar').fadeTo(0,0);
    inView('#skillsBar').on(
        'enter', el => {
            $('#skillsBar').fadeTo(0,1);
            skillsBar.animate(1, {
                duration: 800,
                easing: 'easeInOut'
            });
        }
    );

    var titleBar = new ProgressBar.Line('#titleBar', {
        strokeWidth: 1,
        color: "#F44336",
    });

    var experienceBar = new ProgressBar.Line('#experienceBar', {
        strokeWidth: 1,
        color: "#00BFA5",
    });

    var skillsBar = new ProgressBar.Line('#skillsBar', {
        strokeWidth: 1,
        color: "#00BFA5",
    });

    setTimeout(function(){
        titleBar.animate(1, {
            duration: 800,
            easing: 'easeInOut',
            
        });
    }, 1000);
});