$(function () {
/* 讀取完成顯現 */
    window.onload=function(){
        showfadein();
        grid_img_show();
        typetext();

    };
    function grid_img_show (){
        $('.section01_grid_img01').addClass('js-scale_onload_show_01');
        $('.section01_grid_img02').addClass('js-scale_onload_show_02');
        $('.section01_grid_img03').addClass('js-scale_onload_show_03');
        $('.section01_grid_img04').addClass('js-scale_onload_show_04');
        $('.section01_grid_img05').addClass('js-scale_onload_show_05');
        $('.section01_grid_img06').addClass('js-scale_onload_show_06');
        $('.section01_grid_img07').addClass('js-scale_onload_show_07');
        $('.section01_grid_img08').addClass('js-scale_onload_show_08');
        $('.section01_grid_img09').addClass('js-scale_onload_show_09');
        $('.section01_grid_img10').addClass('js-scale_onload_show_10');

        $('.section01_mid_wrapper').addClass('js-scale_onload_show_mid');
        $('.section01_title_wrapper').addClass('js-scale_onload_show_txt');

        $('.page_btn_enter_wrapper').removeClass('ani_scale');
        $('.page_btn_enter_wrapper_black').removeClass('ani_scale');


        setTimeout(() => {
            $('.section01_grid_img01').addClass('js-onload_ready');
            $('.section01_grid_img02').addClass('js-onload_ready');
            $('.section01_grid_img03').addClass('js-onload_ready');
            $('.section01_grid_img04').addClass('js-onload_ready');
            $('.section01_grid_img05').addClass('js-onload_ready');
            $('.section01_grid_img06').addClass('js-onload_ready');
            $('.section01_grid_img07').addClass('js-onload_ready');
            $('.section01_grid_img08').addClass('js-onload_ready');
            $('.section01_grid_img09').addClass('js-onload_ready');
            $('.section01_grid_img10').addClass('js-onload_ready');    
        }, 2000);   

    }

    function showfadein (){        
        $('.business_onload_animation').addClass('mask_animation_right');
        $('.film_onload_animation').addClass('mask_animation_right');
        $('.creative_onload_animation').addClass('mask_animation_right');
        $('.lifestyle_onload_animation').addClass('mask_animation_right');
        $('.about_onload_animation').addClass('mask_animation_right');

    }

    function typetext (){
                /* 逐字顯示 */
                $.fn.typewriter  = function() {
                    this.each(function() {
                        var $ele = $(this), str = $ele.html(), progress = 0;
              $ele.show().html('');
                        var timer = setInterval(function() {
                            var current = str.substr(progress, 1);
               
                            if (current == '<') {
                                progress = str.indexOf('>', progress) + 1;
                 
                            } else {
                                progress++;
                            }
                            if (progress >= str.length) {
                                clearInterval(timer);
                            }
               $ele.html(str.substring(0, progress));
                        }, 1);
                    });
                    return this;
                };
           $('.business_section01_sub').typewriter();
           $('.film_section01_sub').typewriter();
           $('.creative_section01_sub').typewriter();
           $('.lifestyle_section01_sub').typewriter();
    }
        

/* smooth 轉場 動畫 點擊*/
if($(window).width() >= 1024){
    $('.home_section_02_link').click(function(){
        $('html,body').animate({scrollTop:$('#home_section_02').offset().top}, 800);
        $('.home_section_02_sub_wrapper').addClass('js-txt_fadeout ');
        $('.js-box_fadeout').addClass('js-btn_fadeout');
        $('.js-title_box_fadeout').addClass('js-title_fadeout');
        $('.home_section_02_left_img').addClass('js-img_fadeout');
        $('.home_section_02_slick_wrapper').addClass('hide');

    });
    $('.home_section_03_link_left').click(function(){
        $('html,body').animate({scrollTop:$('#home_section_03').offset().top}, 800);
        $('html,body').animate({scrollTop:$('#home_section_03').offset().top}, 800);
        $('.home_section_03_sub_wrapper').addClass('js-txt_fadeout ');
        $('.js-box_fadeout').addClass('js-btn_fadeout');
        $('.home_section_03_left').addClass('js-img_right_fadeout');
    });
    $('.home_section_03_link_right').click(function(){
        $('html,body').animate({scrollTop:$('#home_section_03').offset().top}, 800);
        $('.home_section_03_sub_wrapper').addClass('js-txt_fadeout ');
        $('.js-box_fadeout').addClass('js-btn_fadeout');
        $('.home_section_03_left').addClass('js-img_right_fadeout');
    });
    $('.home_section_04_link').click(function(){
        $('html,body').animate({scrollTop:$('#home_section_04').offset().top}, 800);
        $('.home_section_04_sub_wrapper').addClass('js-txt_fadeout ');
        $('.js-box_fadeout').addClass('js-btn_fadeout');
        $('.js-title_box_fadeout').addClass('js-title_fadeout');
        $('.home_section_04_left_img').addClass('js-img_fadeout04');
        $('.home_section_04_slick_wrapper').addClass('hide');
    });
    $('.home_section_05_link_left').click(function(){
        $('html,body').animate({scrollTop:$('#home_section_05').offset().top}, 800);
        $('.home_section_05_sub_wrapper').addClass('js-txt_fadeout ');
        $('.js-box_fadeout').addClass('js-btn_fadeout');
        $('.home_section_05_left_img').addClass('js-img_right02_fadeout');
        $('.home_section_05_slick_wrapper').addClass('hide');
    });
    $('.home_section_05_link_right').click(function(){
        $('html,body').animate({scrollTop:$('#home_section_05').offset().top}, 800);
        $('.home_section_05_sub_wrapper').addClass('js-txt_fadeout ');
        $('.js-box_fadeout').addClass('js-btn_fadeout');
        $('.home_section_05_left_img').addClass('js-img_right02_fadeout');
        $('.home_section_05_slick_wrapper').addClass('hide');
    });
    $('.home_section_06_link').click(function(){
        $('html,body').animate({scrollTop:$('#home_section_06').offset().top}, 800);
        $('.home_section_06_sub_wrapper').addClass('js-txt_fadeout ');
        $('.js-box_fadeout').addClass('js-btn_fadeout');
        $('.js-title_box_fadeout').addClass('js-title_fadeout');
        $('.home_section_06_left_img').addClass('js-img_fadeout');
        $('.home_section_06_slick_wrapper').addClass('hide');
    });

}
else{

}
    $('#next').click(function(){
        $('.about_section_contain_02_txt_left').addClass("js-about_show_txt")
        $('.about_section_contain_02_txt_right').addClass("js-about_show_txt")
        $('.about_section_contain_02_title02').addClass("js-about_showup")
        $('.about_section_contain_02_sub ').addClass("js-about_showup")
    });

/* ham_menu_switch */
    $('#menu_show').click(function(){
        $('#menu_show').addClass('menu_btn_show');
        $('#menu_close').addClass('menu_btn_close');
        $('.top_menu_nav_sub').removeClass('top_menu_nav_sub_hide');
        $('#ham').addClass('is-load');
        $('#ham').removeClass('hide');
    });
    $('#menu_close').click(function(){
        $('#menu_show').removeClass('menu_btn_show');
        $('#menu_close').removeClass('menu_btn_close');
        $('.top_menu_nav_sub').addClass('top_menu_nav_sub_hide');
        $('#ham').removeClass('is-load');
        $('#ham').addClass('hide');
    });
    /* menu_grid_list_animation */
    $('#business').hover(function () {
            // over
            $('.business').addClass('is-load');
            $('.left_mask').addClass('grid_animation_left');
            $('.right_mask').addClass('grid_animation_right');
        }, function () {
            // out
            $('.business').removeClass('is-load');
            $('.left_mask').removeClass('grid_animation_left');  
            $('.right_mask').removeClass('grid_animation_right');     
        }
    );
    $('#film').hover(function () {
        // over
        $('.film').addClass('is-load');
        $('.left_mask').addClass('grid_animation_left');
        $('.right_mask').addClass('grid_animation_right');
    }, function () {
        // out
        $('.film').removeClass('is-load');
        $('.left_mask').removeClass('grid_animation_left');  
        $('.right_mask').removeClass('grid_animation_right');        
    }
    );
    $('#creative').hover(function () {
        // over
        $('.creative').addClass('is-load');
        $('.left_mask').addClass('grid_animation_left');
        $('.right_mask').addClass('grid_animation_right');
    }, function () {
        // out
        $('.creative').removeClass('is-load');
        $('.left_mask').removeClass('grid_animation_left');  
        $('.right_mask').removeClass('grid_animation_right');        
    }
    );
    $('#lifestyle').hover(function () {
        // over
        $('.lifestyle').addClass('is-load');
        $('.left_mask').addClass('grid_animation_left');
        $('.right_mask').addClass('grid_animation_right');
    }, function () {
        // out
        $('.lifestyle').removeClass('is-load');
        $('.left_mask').removeClass('grid_animation_left');  
        $('.right_mask').removeClass('grid_animation_right');        
    }
    );
    $('#about').hover(function () {
        // over
        $('.about').addClass('is-load');
        $('.left_mask').addClass('grid_animation_left');
        $('.right_mask').addClass('grid_animation_right');
    }, function () {
        // out
        $('.about').removeClass('is-load');
        $('.left_mask').removeClass('grid_animation_left');  
        $('.right_mask').removeClass('grid_animation_right');        
    }
    );
/* hover */
    $('.top_header_wrapper , .top_header_menu_wrapper_hoverbox , .home_footer_list , .top_menu_nav_footer_list ').hover(function () {
        // over
        $('#cursor').addClass('cursor-hover');
    }, function () {
        // out
        $('#cursor').removeClass('cursor-hover');
    }
    );

    /* section01_img_grid */
    $('.section01_grid_img01').hover(function () {
        // over
        $('.section01_mid_img01').removeClass('hide');   
        $('#cursor').addClass('cursor-hover_bigcircle');   
    }, function () {
        // out
        $('.section01_mid_img01').addClass('hide');
        $('#cursor').removeClass('cursor-hover_bigcircle');
    }
    );
    $('.section01_grid_img02').hover(function () {
        // over
        $('.section01_mid_img02').removeClass('hide');   
        $('#cursor').addClass('cursor-hover_bigcircle');   
    }, function () {
        // out
        $('.section01_mid_img02').addClass('hide');
        $('#cursor').removeClass('cursor-hover_bigcircle');
    }
    );
    $('.section01_grid_img03').hover(function () {
        // over
        $('.section01_mid_img03').removeClass('hide');   
        $('#cursor').addClass('cursor-hover_bigcircle');   
    }, function () {
        // out
        $('.section01_mid_img03').addClass('hide');
        $('#cursor').removeClass('cursor-hover_bigcircle');
    }
    );
    $('.section01_grid_img04').hover(function () {
        // over
        $('.section01_mid_img04').removeClass('hide');   
        $('#cursor').addClass('cursor-hover_bigcircle');   
    }, function () {
        // out
        $('.section01_mid_img04').addClass('hide');
        $('#cursor').removeClass('cursor-hover_bigcircle');
    }
    );
    $('.section01_grid_img05').hover(function () {
        // over
        $('.section01_mid_img05').removeClass('hide');   
        $('#cursor').addClass('cursor-hover_bigcircle');   
    }, function () {
        // out
        $('.section01_mid_img05').addClass('hide');
        $('#cursor').removeClass('cursor-hover_bigcircle');
    }
    );
    $('.section01_grid_img06').hover(function () {
        // over
        $('.section01_mid_img06').removeClass('hide');   
        $('#cursor').addClass('cursor-hover_bigcircle');   
    }, function () {
        // out
        $('.section01_mid_img06').addClass('hide');
        $('#cursor').removeClass('cursor-hover_bigcircle');
    }
    );
    $('.section01_grid_img07').hover(function () {
        // over
        $('.section01_mid_img07').removeClass('hide');   
        $('#cursor').addClass('cursor-hover_bigcircle');   
    }, function () {
        // out
        $('.section01_mid_img07').addClass('hide');
        $('#cursor').removeClass('cursor-hover_bigcircle');
    }
    );
    $('.section01_grid_img08').hover(function () {
        // over
        $('.section01_mid_img08').removeClass('hide');   
        $('#cursor').addClass('cursor-hover_bigcircle');   
    }, function () {
        // out
        $('.section01_mid_img08').addClass('hide');
        $('#cursor').removeClass('cursor-hover_bigcircle');
    }
    );
    $('.section01_grid_img09').hover(function () {
        // over
        $('.section01_mid_img09').removeClass('hide');   
        $('#cursor').addClass('cursor-hover_bigcircle');   
    }, function () {
        // out
        $('.section01_mid_img09').addClass('hide');
        $('#cursor').removeClass('cursor-hover_bigcircle');
    }
    );
    $('.section01_grid_img10').hover(function () {
        // over
        $('.section01_mid_img10').removeClass('hide');   
        $('#cursor').addClass('cursor-hover_bigcircle');   
    }, function () {
        // out
        $('.section01_mid_img10').addClass('hide');
        $('#cursor').removeClass('cursor-hover_bigcircle');
    }
    );

/*  smoove 選項*/
    $('.js-smoove_show').smoove({
        offset: '0%',
    });
    $('.js-smoove_show_footer').smoove({
        offset: '0%',
    });
    $('.js-smoove_show_ani').smoove({
        offset: '0%',
        moveY: '50px'
    });


/* 輪播圖 */
    $('.home_section_02_slick , .home_section_04_slick , .home_section_05_slick , .home_section_06_slick ').slick({
        dots: false,
        arrows:false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 1500,
        speed:10,
        pauseOnDotsHover: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        touchMove: false,
        swipe: false,
        cssEase: 'linear',
        fade: true,
    });
    
/* 圖片隨滑鼠位移位置 */

    var cursor = document.getElementById('cursor');
	var w = cursor.offsetWidth;
	var h = cursor.offsetHeight;
	document.addEventListener('mousemove',function (e) {
        /* 滑鼠位置 */
		var x = e.clientX;
		var y = e.clientY;
		cursor.style.top = y + 'px';
		cursor.style.left = x + 'px';
	})

    /* 滑鼠懸浮*/
    $('#next').hover(function () {
        // over
        $('#cursor').addClass('cursor-right');

    }, function () {
        // out
        $('#cursor').removeClass('cursor-right');
    
    }
    );
    $('#back').hover(function () {
        // over
        $('#cursor').addClass('cursor-left');

    }, function () {
        // out
        $('#cursor').removeClass('cursor-left');
    
    }
    );
    

});

/* ARROW按鈕變化 */
    const arrow02_ = document.getElementById("arrow02").offsetTop;
    const arrow03_ = document.getElementById("arrow03").offsetTop;
    const arrow04_ = document.getElementById("arrow04").offsetTop;
    const arrow05_ = document.getElementById("arrow05").offsetTop;
    const arrow06_ = document.getElementById("arrow06").offsetTop;

    $(window).scroll(function () {
        if($(window).width() >= 1024){
            if (window.scrollY >= arrow02_ + 1300 ) {
                $('#arrow02').addClass("ani_scale")
            } 
            else {
                $('#arrow02').removeClass("ani_scale");
            }

            if (window.scrollY >= arrow03_ + 2000 ) {
                $('#arrow03').addClass("ani_scale")
            } 
            else {
                $('#arrow03').removeClass("ani_scale");
            }

            if (window.scrollY >= arrow04_ + 3450 ) {
                $('#arrow04').addClass("ani_scale")
            } 
            else {
                $('#arrow04').removeClass("ani_scale");
            }
            if (window.scrollY >= arrow05_ + 3850 ) {
                $('#arrow05').addClass("ani_scale")
            } 
            else {
                $('#arrow05').removeClass("ani_scale");
            }
            if (window.scrollY >= arrow06_ + 5500 ) {
                $('#arrow06').addClass("ani_scale")
            } 
            else {
                $('#arrow06').removeClass("ani_scale");
            }
        }else{
            if (window.scrollY <= arrow02_ + 8000 ) {

                $('#arrow02').removeClass("ani_scale");
                $('#arrow03').removeClass("ani_scale");
                $('#arrow04').removeClass("ani_scale");
                $('#arrow05').removeClass("ani_scale");
                $('#arrow06').removeClass("ani_scale");

            } 
           


        }

    });

/* 跳轉動畫 延遲時間 */
    function delayURL(url,time){
        setTimeout("top.location.href = '" + url + "'",2500);
        };


        if($(window).width() <= 767){

        }
        else{
            if($(window).width() >= 768){

            }
            else{
                if($(window).width() >= 1024){

                }
                else{

                }
            }
        }