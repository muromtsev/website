jQuery(document).ready(function() {
    //header

//    var HeaderTop = $('#header').offset().top;
//        $(window).scroll(function(){
//                if( $(window).scrollTop() > HeaderTop ) {
//                        $('#header').css({position: 'fixed', top: '0px'});
//                        $('#header').addClass('header-active');
//                } else {
//                        $('#header').css({position: 'static'});
//                        $('#header').removeClass('header-active');
//                }
//        });
//
//    //
    
    
    //scroll
    
    $("body").on('click', '[href*="#"]', function(e){
        var fixed_offset = 70;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1200);
        e.preventDefault();
    });
    
    //
    
    
    //parallax

    $('.parallax-window').parallax({imageSrc: './img/bg-parallax2.jpg'});

    //
    
    //submenu

    $('.menu li > .submenu').parent().hover(function() {
        var submenu = $(this).children('.submenu');
        if ( $(submenu).is(':hidden') ) {
            $(submenu).slideDown(200);
        } else {
            $(submenu).slideUp(200);
        }
    });
    //    
}); //jQuery(document)


//slider 2

jQuery(document).ready(function ($) {
        var _SlideshowTransitions = [
            {$Duration:800,y:0.3,$Cols:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
            {$Duration:800,x:0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2,$Outside:true},
            {$Duration:600,$Delay:20,$Cols:8,$Rows:4,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2050,$Opacity:2}
        ];
        var options = { 
            $AutoPlay: 1, 
//            $BulletNavigatorOptions: {
//                $Class: $JssorBulletNavigator$,
//                $ChanceToShow: 2
//            },
            $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: _SlideshowTransitions,
                $TransitionsOrder: 1,
                $ShowLink: true
            }
            
        };
    
        var jssor1_slider = new $JssorSlider$("jssor_2", options);
    });

//




