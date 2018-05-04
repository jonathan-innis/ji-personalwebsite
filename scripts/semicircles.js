define(require =>{ 
    var ProgressBar = require('progressbar');
    var inView = require('in-view');

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
            nodejsCircle.animate(1, {
                duration: 800,
                easing: 'easeInOut'
            });
        }
    );

    inView('#djangoCircle').on(
        'enter', el => {
            djangoCircle.animate(1, {
                duration: 800,
                easing: 'easeInOut'
            });
        }
    );

    var cppCircle = new ProgressBar.SemiCircle('#cppCircle', {
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
            bar.setText(Math.round(value/20));
            }
    
            bar.text.style.color = state.color;
        }
    });
    cppCircle.text.style.fontFamily = '"Hind", sans-serif';
    cppCircle.text.style.fontSize = '4rem';
    
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
            bar.setText(Math.round(value/20));
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
            bar.setText(Math.round(value/20));
            }
    
            bar.text.style.color = state.color;
        }
    });
    pythonCircle.text.style.fontFamily = '"Hind", sans-serif';
    pythonCircle.text.style.fontSize = '4rem';

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
            bar.setText(Math.round(value/20));
            }
    
            bar.text.style.color = state.color;
        }
    });
    reactCircle.text.style.fontFamily = '"Hind", sans-serif';
    reactCircle.text.style.fontSize = '4rem';

    var nodejsCircle = new ProgressBar.SemiCircle('#nodejsCircle', {
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
            bar.setText(Math.round(value/20));
            }
    
            bar.text.style.color = state.color;
        }
    });
    nodejsCircle.text.style.fontFamily = '"Hind", sans-serif';
    nodejsCircle.text.style.fontSize = '4rem';

    var djangoCircle = new ProgressBar.SemiCircle('#djangoCircle', {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            value: '5',
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
            bar.setText(Math.round(value/20));
            }
    
            bar.text.style.color = state.color;
        }
    });
    djangoCircle.text.style.fontFamily = '"Hind", sans-serif';
    djangoCircle.text.style.fontSize = '4rem';

});