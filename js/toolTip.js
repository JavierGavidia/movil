
jQuery("a").mouseenter(function (e) {             
    var posMouseX = e.pageX - this.offsetLeft; 
    var posMouseX = e.pageY - this.offsetTop; 
    var textoTooltip = jQuery(this).attr("title"); 

    console.log(this);
	
    if (textoTooltip.length > 0) {
        jQuery(this).append('<div class="tooltip">' + textoTooltip + '</div>');
        jQuery("a > div.tooltip").css("left", "" + posMouseX - 103 + "px");
        jQuery("a > div.tooltip").fadeIn(300);
    }
});
jQuery("a").mouseleave(function () {             
    jQuery("a > div.tooltip").fadeOut(300).delay(300).queue(function () {
        jQuery(this).remove();
        jQuery(this).dequeue();
    });
});
    