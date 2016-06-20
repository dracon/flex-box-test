/**
 * Created by Wolfgang on 15.06.2016.
 */
var test = (function (window, $) {
    var elFeatures = $('.features');
    //$(elFeatures).children().addClass('hidden');
    //console.log("jQuery", $);
    /*


    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        //console.log("Scroll", scroll);

        var rect = isElementInViewport(elFeatures);
        if(rect){
            $(elFeatures).children().removeClass('hidden').addClass('animated');
        }else{
            $(elFeatures).children().addClass('hidden').removeClass('animated');
        }
        console.log("RECT", rect);

    });*/
    return {
        init: function () {
            console.log("HEI from module");

        }
    };
})(window, jQuery || undefined);

test.init();


function isElementInViewport(el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

var wow = new WOW(
    {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       50,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    }
);
wow.init();