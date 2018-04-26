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

    inView('#experience-title').on(
        'enter', el => {
            el.classList.add('fadeInUp');
            el.classList.add('animated');
        }
    )

    inView('#sympliact-container').on(
        'enter', el => {
            el.classList.add('fadeInRight');
            el.classList.add('animated');
        }
    )

    inView('#cisco-container').on(
        'enter', el => {
            el.classList.add('fadeInLeft');
            el.classList.add('animated'); 
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
    
    inView('#reactCircle').on(
        'enter', el => {
            reactCircle.animate(1, {
                duration: 800,
                easing: 'easeInOut'
            });
            jsCircle.animate(0.7, {
                duration: 800,
                easing: 'easeInOut'
            });
            pythonCircle.animate(0.5, {
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

    var reactCircle = new ProgressBar.SemiCircle('#reactCircle', {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            value: '',
            alignToBottom: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#FFEA82'},
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
            var value = Math.round(bar.value() * 100);
            if (value === 0) {
            bar.setText('');
            } else {
            bar.setText(value);
            }

            bar.text.style.color = state.color;
        }
    });
    reactCircle.text.style.fontFamily = '"Hind", sans-serif';
    reactCircle.text.style.fontSize = '4rem';

    var jsCircle = new ProgressBar.SemiCircle('#jsCircle', {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            value: '',
            alignToBottom: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#FFEA82'},
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
            var value = Math.round(bar.value() * 100);
            if (value === 0) {
            bar.setText('');
            } else {
            bar.setText(value);
            }

            bar.text.style.color = state.color;
        }
    });
    jsCircle.text.style.fontFamily = '"Hind", sans-serif';
    jsCircle.text.style.fontSize = '4rem';

    var pythonCircle = new ProgressBar.SemiCircle('#pythonCircle', {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            value: '',
            alignToBottom: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#FFEA82'},
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
            var value = Math.round(bar.value() * 100);
            if (value === 0) {
            bar.setText('');
            } else {
            bar.setText(value);
            }

            bar.text.style.color = state.color;
        }
    });
    pythonCircle.text.style.fontFamily = '"Hind", sans-serif';
    pythonCircle.text.style.fontSize = '4rem';

    setTimeout(function(){
        titleBar.animate(1, {
            duration: 800,
            easing: 'easeInOut',
            
        });
    }, 600);
});