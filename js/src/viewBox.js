(function($){
  //변수---------
  var mainLogo = $('#viewBox').children('.logoBox');

  var viewBoxText1 = $('#viewBox').children('.textBox').children('.title1');
  var viewBoxText2 = $('#viewBox').children('.textBox').children('.title2');
  var viewBoxBt = $('#viewBox').children('.button');
  
  var viewBox = $('#viewBox');
  var browserH = $(window).innerHeight();
  console.log(browserH);
  // var span = $('#viewBox').children('span');

  //------
  viewBox.css({height:browserH});
  //로고 마우스 커짐-----------
  mainLogo.on('mouseover',function(){
    mainLogo.stop().animate({'width':483+'px','height':431+'px'});
  });
  mainLogo.on('mouseleave',function(){
    mainLogo.stop().animate({'width':383+'px','height':331+'px'});
  });

  //뷰박스 텍스트 에니메이션 ----------------------------------------------
  viewBoxText1.animate({ left: 180 + 'px', opacity: 1 }, 300);
  viewBoxText2.animate({left:180+'px',opacity:1},900);
  viewBoxBt.animate({left: 0 + 'px', opacity: 1 }, 1500);

    //span.animate({ left: 500 + 'px', opacity: 1 }, 10000);
    //if

  //---------------------------

  
  
})(jQuery);