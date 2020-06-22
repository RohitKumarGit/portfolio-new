
const pattern1 = document.getElementsByClassName('design_1-pattern1');
const pattern2 = document.getElementsByClassName('design_1-pattern2');
const circle = document.getElementsByClassName('design_1-circle');
$(document).ready(function(){
    anime({
        targets:pattern1,
        translateX:80,
        translateY:-200,
        easing: 'cubicBezier(.85,.95,.5,.27)',
        rotate:80,
        scale:1.4,
        duration:430,
        delay:3000,
        direction:'reverse',
    });
    anime({
        targets:pattern2,
        translateX:60,
        translateY:-150,
        easing: 'cubicBezier(.85,.95,.5,.27)',
        rotate:60,
        scale:1.4,
        duration:430,
        
        direction:'reverse',
        delay:3000,
    });
    anime({
        targets:circle,
        scale:1.4,
        direction:'reverse',
        easing: 'cubicBezier(.85,.95,.5,.27)',
        duration:430,
    })
});