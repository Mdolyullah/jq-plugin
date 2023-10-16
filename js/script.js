// js
wow = new WOW(
{
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       10,          // default
    mobile:       true,       // default
    live:         true        // default
}
)
wow.init();

// jq
$(document).ready(function(){

	// counterup
    $('.counter').counterUp({
    delay: 10,
    time: 1000
    });

})
