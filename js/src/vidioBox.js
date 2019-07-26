(function($){
  //변수------------------
  var playBt = $('#vidioBox').children('.button').children('button');
  var vidioMenuBt = $('#vidioBox').children('.menuBox').children('.view_btn');
  var vidiohideBt = $('#vidioBox').children('.list').children('button');
  var vidioListBox = $('#vidioBox').children('.list');
  //-----------------------

  vidioMenuBt.on('click',function(){

    vidioListBox.removeClass('hidden');
    vidiohideBt.removeClass('hidden');
    vidioListBox.animate({'right':0+'px'});
  });
   vidiohideBt.on('click',function(){
     vidioListBox.animate({'right':-800+'px'});
     vidioListBox.addClass('hidden');
   });
  // vidioMenu.on('mouseleave',function(){
  //   vidioMenu.css({backgroundColor:'#3371ff'});
  // })
})(jQuery);