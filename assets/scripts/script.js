$(document).ready(function() {
    $(".grid-button").on("click", function() {
    	$(".grid").toggleClass("open close");
    	$("#nav").toggleClass("open"); 
    	
    });
}); 

$(document).ready(function() {
	$('#nav a').on("click", function() {
		$(this).closest('#nav').find('a').each(function() {
			if ($(this).hasClass("nav-selected")) {
				$(this).removeClass("nav-selected");
			}
		})
		$(this).addClass('nav-selected');
	});
});

$(document).ready(function() {
		$('.scrollTo').click( function() {
			$(".grid").toggleClass("open close"); 
			$("#nav").removeClass("open");
			var page = $(this).attr('href'); 
			var speed = 750;
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});

$(document).ready(function() {
                var hauteur = $('.wallpaper').height();
		$(window).scroll(function () {
			if ($(this).scrollTop() > hauteur) {
				$('#navigationBar').css({
					'position': 'fixed',
					'top': '0px'
				});
      		         } else {
	  			$('#navigationBar').css({
		  			'position': 'absolute',
		  			'top': '100%'
	  			});
      		          }
   		});
 });	
