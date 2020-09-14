 /* Smoothscroll */
jQuery(document).ready( function($) {
    $('.nav-link, .navbar-brand').click(function() {
        let target = $(this).attr('href');
        let headerHeight = 70;
        $('html, body').animate({
        scrollTop: $(target).offset().top - headerHeight
        }, 1500);
    });  
});

