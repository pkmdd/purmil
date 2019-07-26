(function($){
//변수 -------------------------------
var headerMuBt = $('#headBox').children('.menuBox').children('.gnb_btn').children('.gnb_view_btn');
var gnbBox = $('#headBox').children('.menuBox').children('.gnb');
var gnbBoxBt = $('#headBox').children('.menuBox').children('.gnb_btn').children('.gnb_hide_btn');
var layer = $('#wrap').children('.layer');
//헤더 메뉴 --------------------------
  layer.on('click',function(){
    gnbBoxBt.addClass('hidden');
    headerMuBt.removeClass('hidden');
    layer.addClass('hidden');
    gnbBox.stop().animate({'right':-500+'px'});
  });
  headerMuBt.on('click',function(){
    headerMuBt.addClass('hidden');
    gnbBox.removeClass('hidden');
    gnbBoxBt.removeClass('hidden');
    layer.removeClass('hidden');
    gnbBox.stop().animate({'right':0});
  });
  gnbBoxBt.on('click',function(){
    gnbBoxBt.addClass('hidden');
    headerMuBt.removeClass('hidden');
    layer.addClass('hidden');
    gnbBox.stop().animate({'right':-500+'px'});
  });
//-------------------------------------------------

var atag = $('#headBox').children('.menuBox').children('.gnb').children('dl').children('dd').children('a');
var colorBox = $('#headBox').children('.menuBox').children('.gnb').children('.colorBox').children('.color');
var dd = $('#headBox').children('.menuBox').children('.gnb').children('dl').children('dd');
var i=0;
dd.on('mouseover',function(){
  i = $(this).index();
  console.log(i);
  colorBox.eq(i).stop().animate({'left':500+'px'});
});
dd.on('mouseleave',function(){
  console.log('ddd');
  colorBox.eq(i).stop().animate({'left':-500+'px'});
});
})(jQuery);