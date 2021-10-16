const loader = document.getElementById('loader')

$(document).ready(function() {

    setTimeout(function() { loaded(); }, 2000);

});

function loaded() {
    loader.style.opacity = "0%"
    loader.style.transform = "scale(0)"
}