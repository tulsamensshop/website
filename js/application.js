var site = site || {};

(function($) {

    $(function() {
        $(document).on('click touchstart', '.back-to-top', function(e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 'slow', function() {
                //
            });
        });

        // console.log('telephone--init');
        //
        // $(document).on('click', '.js-telephone', function(e) {
        //     console.log('telephone');
        //     if ( $('html').hasClass('no-touch') ){
        //         console.log('telephone-touch');
        //         e.preventDefault();
        //     }
        // });

    });
})(jQuery);
