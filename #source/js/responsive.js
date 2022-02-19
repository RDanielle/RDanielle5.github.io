//Adaptive functions
$(window).resize(function (event) {
   adaptive_function();
});
function adaptive_header(w, h) {
      var headerMenu = $('.header-menu');    //переменные
      var headerLang = $('.language');
   if (w < 767){
      if (!headerLang.hasClass('done')) {
         headerLang.addClass('done').appendTo(headerMenu);
      }
   } else {
      if (headerContacts.hasClass('done')) {
         headerContacts.removeClass('done').appendTo(headerMenu);
      }
   }
}
function adaptive_function() {
      var w = $(window).outerWidth();
      var h = $(window).outerHeight();
   adaptive_header(w, h);
}
adaptive_function();




$(window).resize(function (event) {
   mainblock();
});
function mainblock() {
   var h = $(window).outerHeight();
   $('.mainblock').css('min-height',h);
}
mainblock();   
   


if ($('.gallery').length > 0) {
	baguetteBox.run('.gallery', {
		// Custom options
	});
}

$('.filter_item').click(function (event) {
	var i = $(this).data('filter');
	if (i == 1) {
		$('.portfolio_column').show();
	} else {
		$('.portfolio_column').hide();
		$('.portfolio_column.f_' + i).show();
	}
	$('.filter_item').removeClass('active');
	$(this).addClass('active');
	return false;
});








