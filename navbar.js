// Wait for the page to load before executing javascript
$(document).ready(function() { 

    var navbar = $("#main-nav-wrapper");
    var quicklinks = $("#quicklinks");
    var mark = $("#uni-mark");
    
    /**
     * The scroll event triggers very quickly, faster than the desired code can
     * execute. This causes issues. This handler fixes that by only running the
     * code at a maximum of every 50 ms.
     */
    var scrolled = false;
    $(window).scroll(function () {
        scrolled = true;
    });
    
    setInterval(function() { // Only do this every 50 ms
        if(scrolled = true) {
            /**
             * h is the height of the white area with links above the navbar, 
             * this height is updated dynamically if the page is resized, and 
             * hiding the element does not change the measured height h.
             */
            var h = 0;
            if(quicklinks.height() > 0) {
                h = quicklinks.height() 
            } 
            else {
                h = findHiddenHeight(quicklinks);
            }
            
            if($(window).scrollTop() > h) {
                if(!navbar.hasClass("fix-navbar")) {
                    // Applies position: fixed to the navbar
                    navbar.addClass("fix-navbar");
                    /**
                     * Aligns the mark with the top edge of the navbar.
                     * Note: it's 3em not 1.5em because the div containing 
                     * uni-mark is centered.
                     * queue: false will cancel the currently running animation
                     * instead of queuing behind it.
                     */
                    mark.animate({marginTop: "3em"}, {
                        duration: 500, 
                        queue: false,
                        easing: "linear"});
                    quicklinks.hide();
                }
            } 
            else {
                if(navbar.hasClass("fix-navbar")) {
                    // Removes position: fixed from the navbar
                    navbar.removeClass("fix-navbar");
                    // Centers the mark vertically on the navbar
                    mark.animate({marginTop: "0em"}, {
                        duration: 500, 
                        queue: false, 
                        easing: "linear"});
                    quicklinks.show();
                }
            }
            scrolled = false;
        }
    }, 50);
    
    /**
     * Helper function: Used for finding the height of the white area with 
     * links above the navbar while it is hidden. Can be used to find the 
     * height of any hidden element. Useful since the height attribute of an 
     * element is always 0 while hidden regardless of the normal size.
     */
    function findHiddenHeight(element) {
        var h = element.show().height();
        element.hide();
        return h;
    }
});
