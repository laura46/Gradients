$(function(){


  $('.box').each(function{
    this.hover(function(){
        TweenMax.to('.ct-back-btn',0.4,{x: '4%',y: '3%'});
    },function(){
        TweenMax.to('.ct-back-btn',0.4,{x: '0%',y: '0%'});
    })
  });

});
