(function($){


      $('html, body').animate({scrollTop:0}, function(){
        var scrheight = $(window).scrollTop();

      //로고커짐 --------------------------
      var mainLogo = $('#viewBox').children('.logoBox');
      mainLogo.animate({ 'width': 413 + 'px', 'height': 361 + 'px' },1000);
      mainLogo.stop().animate({ 'width': 383 + 'px', 'height': 331 + 'px' },800);
      //---------------------------
      var introBoxText = $('#com_introBox').children('.textBox').children('.title');
      var introBoxText2 = $('#com_introBox').children('.textBox').children('p');
      var ScrollView = function(){
      
        scrheight = $(this).scrollTop();
        console.log('scroll: ', scrheight);
        var introTS = scrheight >= 100;
        console.log(introTS);

        //introTs
        if(introTS){
          introBoxText.stop(true, false).animate({left:1000+'px',opacity:1},300);
          introBoxText2.stop(true, false).animate({left:1000+'px',opacity:1},500);
          // introBoxText.css({'opacity':1, transition: 'all 500ms  ease '});
          // introBoxText.animate({'opacity':1});
        }else{
          // introBoxText.animate({'opacity':0});
          introBoxText.stop(true, false).animate({left:800+'px',opacity:0},200);
          // introBoxText.css({'opacity':0, transition: 'all 500ms  ease '});
        };

        
        
        
        //신선한 제품 페이지 애니메이션 ---------------( product_intro )

        //변수선언 -------------------------------------------------
        var productIntroText = $('#product_intro').children('.textBox').children('.title');
        var productIntroText2 = $('#product_intro').children('.textBox').children('dl');

        var dlBox1 = $('#product_intro').children('.imgBox').children('.img_1').children('dl');
        var dlBox2 = $('#product_intro').children('.imgBox').children('.img_2').children('dl');
        var dlBox3 = $('#product_intro').children('.imgBox').children('.img_3').children('dl');
        //----------------------------------------------------------
        //텍스트-------------------
        if(scrheight>=1400){
        productIntroText.stop(true, false).animate({left:315+'px',opacity:'1'},300);
        }else{
          productIntroText.stop(true, false).animate({left:100+'px',opacity:'0'},200);
        };
        if(scrheight>=1400){
          productIntroText2.stop(true, false).animate({left:315+'px',opacity:'1'},500);
          }else{
          productIntroText2.stop(true, false).animate({left:100+'px',opacity:'0'},200);
          };
        //--------------------------
        //이미지의 텍스트 ---------------------------
        if(scrheight>=2200){
          dlBox1.stop(true, false).animate({top:350+'px',opacity:'1'},300);
        }else{
          dlBox1.stop(true, false).animate({top:500+'px',opacity:'0'},200);
        };

        //dlBox2
        if(scrheight>=2200){
          dlBox2.stop(true, false).animate({top:350+'px',opacity:'1'},300);
        }else{
          dlBox2.stop(true, false).animate({top:500+'px',opacity:'0'},200);
        };

        //dlBox3
        if(scrheight>=2200){
          dlBox3.stop(true, false).animate({top:350+'px',opacity:'1'},300);
        }else{
          dlBox3.stop(true, false).animate({top:500+'px',opacity:'0'},200);
        };
        //--------------------------------------------------

        //More박스 에니메이션 --------------------------------
        //변수 --------------------
        var moreBox = $('#moreBox');
        
        if(scrheight>=2500){
          moreBox.stop(true, false).animate({left:0+'px',opacity:'1'},300);
        };
        //----------------------------------------------------

        //푸르밀 대표제품 에니메이션 --------------------------------
        //변수 --------------------
        var productIntroBoxTitle = $('#product_introBox').children('.textBox').children('.title');
        var productIntroBoxText = $('#product_introBox').children('.textBox').children('dl').children('dd');
        
        if(scrheight>=2400){
          productIntroBoxTitle.stop(true, false).animate({left:760+'px',opacity:'1'},600);
        }else{
          productIntroBoxTitle.stop(true, false).animate({left:500+'px',opacity:'0'},600);
        }
        if(scrheight>=2400){
          productIntroBoxText.stop(true, false).animate({left:680+'px',opacity:'1'},600);
        }else{
          productIntroBoxText.stop(true, false).animate({left:500+'px',opacity:'0'},600);
        }
        //----------------------------------------------------

        
    };


      $(document).on('scroll', ScrollView);

    });
})(jQuery);