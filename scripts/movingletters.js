define(require =>{
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
});