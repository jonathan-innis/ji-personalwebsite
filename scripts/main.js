define(require => {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var ProgressBar = require('progressbar');
    var inView = require('in-view');
    inView.offset(-50);

    inView('#experience-title').on(
        'enter', el => {
            $('#experience-title').classList.add('ml14');
        }
    )

    inView('#sympliact-container').on(
        'enter', el => {
            el.classList.add('fadeInUp');
        }
    )

    inView('#cisco-container').on(
        'enter', el => {
            el.classList.add('fadeInUp');
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
        }
    );
    
    inView('#experienceBar').on(
        'enter', el => {
            experienceBar.animate(1, {
                duration: 800,
                easing: 'easeInOut'
            });
        }
    );

    inView('#skillsBar').on(
        'enter', el => {
            skillsBar.animate(1, {
                duration: 800,
                easing: 'easeInOut'
            });
        }
    );

    inView('#skillsBar').on(
        'enter', el => {
            
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