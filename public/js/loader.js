const loader = document.getElementById('loader')

$(document).ready(function() {

    setTimeout(function() { loaded(); }, 2000);

});

function loaded() {
    loader.style.opacity = "0%"
    setTimeout(() => { loader.style.transform = "scale(0)" }, 1100)
}