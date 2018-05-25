define(require =>{
    var inView = require('in-view');
    inView.offset(-150);

    // Wrap every letter in a span
    $('.ml13').each(function(){
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });
    
    anime.timeline()
        .add({
        targets: '.ml13 .letter',
        translateY: [100,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: function(el, i) {
            return 300 + 30 * i;
        }
    });
    
    let experienceLoaded = false;
    $('#experience-title').fadeTo(0,0);
    inView('#experience-title').on(
        'enter', el => {
            $('#experience-title').fadeTo(0,1);
            if (!experienceLoaded){
                $('.ml14').each(function(){
                    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                });
                
                anime.timeline()
                    .add({
                    targets: '.ml14 .letter',
                    translateY: [100,0],
                    translateZ: 0,
                    opacity: [0,1],
                    easing: "easeOutExpo",
                    duration: 1400,
                    delay: function(el, i) {
                        return 300 + 30 * i;
                    }
                });
                experienceLoaded = true;
            }
        }
    )

    let skillsLoaded = false;
    $('#skills-title').fadeTo(0,0);
    inView('#skills-title').on(
        'enter', el => {
            $('#skills-title').fadeTo(0,1);
            if (!skillsLoaded){
                $('.ml15').each(function(){
                    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                });
                
                anime.timeline()
                    .add({
                    targets: '.ml15 .letter',
                    translateY: [100,0],
                    translateZ: 0,
                    opacity: [0,1],
                    easing: "easeOutExpo",
                    duration: 1400,
                    delay: function(el, i) {
                        return 300 + 30 * i;
                    }
                });
                skillsLoaded = true;
            }
        }
    )

    let projectsLoaded = false;
    $('#projects-title').fadeTo(0,0);
    inView('#projects-title').on(
        'enter', el => {
            $('#projects-title').fadeTo(0,1);
            if (!projectsLoaded){
                $('.ml16').each(function(){
                    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                });
                
                anime.timeline()
                    .add({
                    targets: '.ml16 .letter',
                    translateY: [100,0],
                    translateZ: 0,
                    opacity: [0,1],
                    easing: "easeOutExpo",
                    duration: 1400,
                    delay: function(el, i) {
                        return 300 + 30 * i;
                    }
                });
                projectsLoaded = true;
            }
        }
    )

    let contactLoaded = false;
    $('#contact-title').fadeTo(0,0);
    inView('#contact-title').on(
        'enter', el => {
            $('#contact-title').fadeTo(0,1);
            if (!contactLoaded){
                $('.ml17').each(function(){
                    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
                });
                
                anime.timeline()
                    .add({
                    targets: '.ml17 .letter',
                    translateY: [100,0],
                    translateZ: 0,
                    opacity: [0,1],
                    easing: "easeOutExpo",
                    duration: 1400,
                    delay: function(el, i) {
                        return 300 + 30 * i;
                    }
                });
                contactLoaded = true;
            }
        }
    )
    
});