$(document).ready(function(){

 
  var touch = false;
  $("[href]").each(function() {
    if (this.href == window.location.href) {
        $(this).addClass("active");
        }
    });
 $(".dropdown-submenu >.toggle-list-button").on("click", function (e) {
            var current = $(this).next();
            var grandparent = $(this).parent().parent();
            grandparent.find(".sub-menu:visible").not(current).hide();
            current.toggle();
            e.stopPropagation();
            $(this).parent().toggleClass('open');
});

$(window).scroll(function(){
        /* Show hide scrolltop button */
        /* Main menu on top */
        var h = $(window).scrollTop();
        var width = $(window).width();
        if(width > 767){
            if(h > 35){
				 $('#header').addClass('sticky');
                $('.main-menu').addClass('main-header-ontop');
            }else{
				 $('#header').removeClass('sticky');
                $('.main-menu').removeClass('main-header-ontop');
            }
        }
    });
  $.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: 'linear',
      scrollSpeed: 900,
      animation: 'fade'
  });
  //// menu jquery left///
$('.navbar-toggle').on('click', function(){
    $('body').addClass('opened-menu');
    $(this).closest('header').addClass('opened');
    $('.opened .close-header-layer').fadeIn(300);
  });
  $('.close-header-layer, .close-menu').on('click', function(){
    $('body').removeClass('opened-menu');
    $('.collapse').removeClass('in');
     $('header.opened').removeClass('opened');
    $('.close-header-layer:visible').fadeOut(300);
  });
  //// end menu jquery left///
//////////////load ///
  "use strict";
 /*  var loader = $("body").DEPreLoad({
        OnStep: function(percent) {
            $("#depreload .cs_perc").text(percent + "%");
        },
        OnComplete: function() {
            setTimeout(function(){
                $("#depreload").css('display','none');
            }, 200);
        }
    });
*/

   if(jQuery().owlCarousel) {
    $('.slide_product .product-layout-custom').owlCarousel({
      navigation : true, 
      pagination : false,
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1], 
      itemsTablet: [767,2], 
      itemsMobile : [480,1],
      navigationText : ['<i class="icon-left-open"><i class="fa fa-angle-left"></i></i>','<i class="icon-right-open"><i class="fa fa-angle-right"></i></i>'],
       afterAction: function(el){
        $('.slide_product .medium').removeClass('col-lg-3 col-md-3 col-sm-6 col-xs-12');
       }
  });
    ////product-late-ms//////
 
$('.featured-item').owlCarousel({
   				 responsive:{
				        0:{
				            items:2,
				 margin:0,
				        },
				        600:{
				            items:3,
				 margin:10,
				        },
				        1000:{
				            items:5,
				 margin:30,
				        }
				    },
				     		autoplay: true,
     		nav:true,
     		autoplayTimeout: 2000,
            autoplayHoverPause: true,
				lazyLoad:true,
    			loop:true,
    navText : ['<i class="icon-left-open"><i class="fa fa-angle-left"></i></i>','<i class="icon-right-open"><i class="fa fa-angle-right"></i></i>'],
   

});
$('.featured-item .owl-item >div').removeClass('col-lg-3 col-md-3 col-sm-6 col-xs-12');
  }
    $('.common-home .product_latest .medium').removeClass('col-lg-3 col-md-3 col-sm-6 col-xs-12').addClass('col-lg-2 col-md-2 col-sm-6 col-xs-12');
  $('.list_product .medium').removeClass('col-lg-3 col-md-3 col-sm-6 col-xs-12');

////remove class bootstrap and class new ///


////categories///
$('#list-view').click(function(){
    $('#grid-view').removeClass('active');
});
$('.account').hover(function(){
  $('.account .dropdown-menu').show();
});
////endcategories///


});(jQuery);