var site = site || {};

(function($) {

    $(function() {
        $(document).on('click touchstart', '.back-to-top', function(e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 'slow', function() {
                //
            });
        });

    });
})(jQuery);
