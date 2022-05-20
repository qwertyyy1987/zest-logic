$(document).ready(function() {
      $('#owl-conferences').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        navigation : true,
        autoplay: true,
        autoplayTimeout: 500000,
        smartSpeed: 1250,
        responsive:{
            320:{
                items:2,
                margin:10,
                nav:true
            },
             480:{
                items:2,
                nav:true
            },
            768:{
                items:2,
                nav:true
            },
            992:{
                items:2,
                nav:true,
                loop:true
            },
            1150:{
                items:2,
                nav:true,
                loop:true
            }
        }
        })
});



$(document).ready(function() {
      $('#owl-training').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        navigation : true,
        autoplay: true,
        autoplayTimeout: 500000,
        smartSpeed: 1250,
        responsive:{
            320:{
                items:2,
                margin:10,
                nav:true
            },
             480:{
                items:2,
                nav:true
            },
            768:{
                items:2,
                nav:true
            },
            992:{
                items:2,
                nav:true,
                loop:true
            },
            1150:{
                items:2,
                nav:true,
                loop:true
            }
        }
        })
});



$(document).ready(function() {
      $('#owl-services').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        navigation : true,
        autoplay: true,
        autoplayTimeout: 500000,
        smartSpeed: 1250,
        responsive:{
            320:{
                items:2,
                margin:10,
                nav:true
            },
             480:{
                items:2,
                nav:true
            },
            768:{
                items:2,
                nav:true
            },
            992:{
                items:2,
                nav:true,
                loop:true
            },
            1150:{
                items:2,
                nav:true,
                loop:true
            }
        }
        })
});





$(document).ready(function() {
      $('#owl-literature1').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        navigation : true,
        autoplay: true,
        autoplayTimeout: 500000,
        smartSpeed: 1250,
        responsive:{
            320:{
                items:2,
                margin:10,
                nav:true
            },
             480:{
                items:2,
                nav:true
            },
            768:{
                items:2,
                nav:true
            },
            992:{
                items:2,
                nav:true,
                loop:true
            },
            1150:{
                items:2,
                nav:true,
                loop:true
            }
        }
        })
});




$(document).ready(function() {
      $('#owl-marketerone').owlCarousel({
        loop:true,
        margin:35,
        responsiveClass:true,
        navigation : true,
        autoplay: true,
        autoplayTimeout: 500000,
        smartSpeed: 1250,
        responsive:{
            320:{
                items:2,
                nav:true
            },
             480:{
                items:3,
                nav:true
            },
            768:{
                items:4,
                nav:true
            },
            992:{
                items:3,
                nav:true,
                loop:true
            },
            1150:{
                items:4,
                nav:true,
                loop:true
            }
        }
        })
});




jQuery(document).on('click', '.minicart-button', function() {
    jQuery('.minicart-area').addClass('active');
    jQuery('.minicart-overlay').fadeIn();
    return false;
  });

  jQuery(document).on('click', '.minicart-overlay, .minicart-area .close-new', function() {
    jQuery('.minicart-area').removeClass('active');
    jQuery('.minicart-overlay').fadeOut();
    return false;
  });




(function($) {
    $(function() {
     
      $('ul.tabs__caption-form').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs-form').find('div.tabs__content-form').removeClass('active').eq($(this).index()).addClass('active');
      });
     
    });
})(jQuery);



(function($) {
    $(function() {
     
      $('ul.tabs__caption-thumb1').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs-thumb1').find('div.tabs__content-thumb1').removeClass('active').eq($(this).index()).addClass('active');
      });
     
    });
})(jQuery);





$(document).ready( function() { 

    $(".pco-filtr.active").find('.cbody-filtr').slideDown('slow');

    $('.chead-filtr').click( function() {
      var pa = $(this).parent();

      if(pa.hasClass('active')) {
        $(this).find('span').removeClass('d');
        pa.find('.cbody-filtr').slideUp('slow');
        pa.removeClass('active');
      } else {
        pa.addClass('active');
        $(this).find('span').addClass('d');
        pa.find('.cbody-filtr').slideDown('slow');
      }

    });
    
});




$(document).ready(function () {
    $('div#filtr__button').click(function (e) {
        $(this).toggleClass('active');
        $('#filtr').toggle();
             
        e.stopPropagation();
    });

    $('body').click(function () {
        var link = $('a#link1');
        if (link.hasClass('active')) {
            link.click();
        }
    });
});




jQuery( document ).ready(function() {
    jQuery('.mobile-header .submenu .menu-item-has-children > a').on("click", function(){
        if(!jQuery(this).hasClass('current-a')) {
            jQuery(this).addClass('current-a').parent().children('.submenu').slideDown();
            return false;
        } else {
            jQuery(this).removeClass('current-a').parent().children('.submenu').slideUp();
            return false;
        }
    });
    jQuery('.mobile-header .menu > .menu-item-has-children > a').on("click", function(){
        jQuery('.mobile-nav-button').addClass('back');
        jQuery(this).addClass('current-a').parent().children('.submenu').slideDown();
        return false;
    });
    jQuery('.mobile-nav-button:not(.back)').on('click', function() {
        if(jQuery(this).hasClass('back')) {
            jQuery(this).removeClass('back');
            jQuery('.mobile-header .menu > .menu-item-has-children > a.current-a').removeClass('current-a').parent().children('.submenu').slideUp();
        } else {
            if(jQuery(this).hasClass('active') && !jQuery(this).hasClass('back')) {
                jQuery(this).removeClass('active');
                jQuery('.mobile-header').removeClass('active');
            } else {
                jQuery(this).addClass('active');
                jQuery('.mobile-header').addClass('active');
            }
        }
    });
});
  












