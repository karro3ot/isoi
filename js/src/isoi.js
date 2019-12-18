// isoi.js
const winW = $(window).outerWidth();
if(winW >= 768){

  const viewBox_02 = $('#viewBox_02');
  const bsBox = viewBox_02.find('.bsbox');
  const bsBoxList = bsBox.children('div');
  // bsBoxList.clone(true).appendTo(bsBox)

  const bsBoxWidth = bsBoxList.eq(0).outerWidth();
  bsBox.css({position:'relative',left:-bsBoxWidth});

  const nextBtn = viewBox_02.find('.next_btn');
  const prevBtn = viewBox_02.find('.prev_btn');

  nextBtn.on('click', function(e){
    e.preventDefault();
    bsBox.animate({marginLeft:-bsBoxWidth + 'px'}, function(){
      bsBox.children('div').eq(0).appendTo(bsBox);
      bsBox.css({marginLeft:0});
    });
  });
  prevBtn.on('click', function(e){
    e.preventDefault();
    bsBox.animate({marginLeft:bsBoxWidth + 'px'}, function(){
      bsBox.children('div').eq(-1).prependTo(bsBox);
      bsBox.css({marginLeft:0});
    });
  });

}