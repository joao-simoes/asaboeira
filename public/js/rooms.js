/*	rooms */
$(document).ready(function() {

    $(".filter-button2").click(function() {
        var value = $(this).attr('data-filter2');

        if (value == "all") {
            $('.filter2').show('1000');
        } else {
            $(".filter2").not('.' + value).hide('3000');
            $('.filter2').filter('.' + value).show('3000');
        }

        if ($(".filter-button2").removeClass("active")) {
            $(this).removeClass("active");
        }
        $(this).addClass("active");
    });
});
/*	end rooms */

$(document).ready(function() {
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});