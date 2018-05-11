const step = function(state, bar){
    bar.path.setAttribute('stroke', state.color);
    var value = Math.round(bar.value() * 100);
    if (value === 0) {
    bar.setText('');
    } else {
    bar.setText(value);
    }
    bar.text.style.color = state.color;
}

define(require =>{ 
    var ProgressBar = require('progressbar');
    var inView = require('in-view');
    inView.offset(-50);

    inView('#cppCircle').on(
        'enter', el => {
            cppCircle.animate(1, {
                duration: 800,
                easing: 'easeInOut'
            });
        }
    );

    inView('#jsCircle').on(
        'enter', el => {
            jsCircle.animate(1, {
                duration: 800,
                easing: 'easeInOut'
            });
        }
    );

    inView('#pythonCircle').on(
        'enter', el => {
            pythonCircle.animate(1, {
                duration: 800,
                easing: 'easeInOut'
            });
        }
    );

    inView('#javaCircle').on(
        'enter', el => {
            javaCircle.animate(0.8, {
                duration: 800,
                easing: 'easeInOut'
            });
        }
    );

    inView('#cCircle').on(
        'enter', el => {
            cCircle.animate(0.6, {
                duration: 800,
                easing: 'easeInOut'
            });
        }
    );

    inView('#phpCircle').on(
        'enter', el => {
            phpCircle.animate(0.2, {
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
        }
    );

    inView('#nodejsCircle').on(
        'enter', el => {
            nodejsCircle.animate(0.4, {
                duration: 800,
                easing: 'easeInOut'
            });
        }
    );

    inView('#djangoCircle').on(
        'enter', el => {
            djangoCircle.animate(0.2, {
                duration: 800,
                easing: 'easeInOut'
            });
        }
    );

    var cppCircle = new ProgressBar.SemiCircle('#cppCircle', {
        strokeWidth: 6,
        color: '#f34b7d',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            value: 'C++',
            alignToBottom: false
        },
        from: {color: '#f34b7d'},
        to: {color: '#f34b7d'},
    });
    cppCircle.text.style.fontFamily = '"Raleway", sans-serif';
    cppCircle.text.style.fontSize = '3.5rem';
    cppCircle.text.style.color= 'black';
    
    var jsCircle = new ProgressBar.SemiCircle('#jsCircle', {
        strokeWidth: 6,
        color: '#f1e05a',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            value: "Javascript",
            alignToBottom: false
        },
        from: {color: '#f1e05ae'},
        to: {color: '#f1e05a'},
    });
    jsCircle.text.style.fontFamily = '"Raleway", sans-serif';
    jsCircle.text.style.fontSize = '3.5rem';
    jsCircle.text.style.color= 'black';
    
    var pythonCircle = new ProgressBar.SemiCircle('#pythonCircle', {
        strokeWidth: 6,
        color: '#3572A5',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            value: 'Python',
            alignToBottom: false
        },
        from: {color: '#3572A5'},
        to: {color: '#3572A5'},
    });
    pythonCircle.text.style.fontFamily = '"Raleway", sans-serif';
    pythonCircle.text.style.fontSize = '3.5rem';
    pythonCircle.text.style.color= 'black';

    var javaCircle = new ProgressBar.SemiCircle('#javaCircle', {
        strokeWidth: 6,
        color: '#b07219',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            value: 'Java',
            alignToBottom: false
        },
        from: {color: '#b07219'},
        to: {color: '#b07219'},
    });
    javaCircle.text.style.fontFamily = '"Raleway", sans-serif';
    javaCircle.text.style.fontSize = '3.5rem';
    javaCircle.text.style.color= 'black';

    var cCircle = new ProgressBar.SemiCircle('#cCircle', {
        strokeWidth: 6,
        color: '#555555',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            value: 'C',
            alignToBottom: false
        },
        from: {color: '#555555'},
        to: {color: '#555555'},
    });
    cCircle.text.style.fontFamily = '"Raleway", sans-serif';
    cCircle.text.style.fontSize = '3.5rem';
    cCircle.text.style.color= 'black';

    var phpCircle = new ProgressBar.SemiCircle('#phpCircle', {
        strokeWidth: 6,
        color: '#4F5D95',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            value: 'PHP',
            alignToBottom: false
        },
        from: {color: '#4F5D95'},
        to: {color: '#4F5D95'},
    });
    phpCircle.text.style.fontFamily = '"Raleway", sans-serif';
    phpCircle.text.style.fontSize = '3.5rem';
    phpCircle.text.style.color= 'black';

    var reactCircle = new ProgressBar.SemiCircle('#reactCircle', {
        strokeWidth: 6,
        color: '#00d8ff',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            value: 'React.js',
            alignToBottom: false
        },
        from: {color: '#00d8ff'},
        to: {color: '#00d8ff'},
    });
    reactCircle.text.style.fontFamily = '"Raleway", sans-serif';
    reactCircle.text.style.fontSize = '3.5rem';
    reactCircle.text.style.color= 'black';

    var nodejsCircle = new ProgressBar.SemiCircle('#nodejsCircle', {
        strokeWidth: 6,
        color: '#6cc24a',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            value: 'Node.js',
            alignToBottom: false
        },
        from: {color: '#6cc24a'},
        to: {color: '#6cc24a'},
    });
    nodejsCircle.text.style.fontFamily = '"Raleway", sans-serif';
    nodejsCircle.text.style.fontSize = '3.5rem';
    nodejsCircle.text.style.color= 'black';

    var djangoCircle = new ProgressBar.SemiCircle('#djangoCircle', {
        strokeWidth: 6,
        color: '#092e20',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            value: 'Django',
            alignToBottom: false
        },
        from: {color: '#092e20'},
        to: {color: '#092e20'},
    });
    djangoCircle.text.style.fontFamily = '"Raleway", sans-serif';
    djangoCircle.text.style.fontSize = '3.5rem';
    djangoCircle.text.style.color= 'black';
});