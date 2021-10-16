var image = document.getElementsByClassName('prl');
new simpleParallax(image, {
    delay: .2,
    transition: 'cubic-bezier(0,0,0,1)',
    scale: 1.8
});