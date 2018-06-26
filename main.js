$(document).ready(function () {  
  var top = $('.section-a').offset().top;
  var topb = $('.section-b').offset().top;
  var topc = $('.section-c').offset().top;
  $(window).scroll(function (event) {
   
    var y = $(this).scrollTop();
       
    if (y >= top){
     $('div.container.full-height.section-a > div > div > div').addClass('img-animated'); 
      $('div.container.full-height.section-a > div > div > div').removeClass('img-noanimated');
    $('div.container.full-height.section-a > div > div > div > a > h6').addClass('see-animated');
    $('div.container.full-height.section-a > div > div > div > h3').addClass('text-animated');
       $('div.container.full-height.section-a > div > div > div').removeClass('text-noanimated');
    }else{
     $('div.container.full-height.section-a > div > div > div').addClass('img-noanimated');
     $('div.container.full-height.section-a > div > div > div').removeClass('img-animated');
    $('div.container.full-height.section-a > div > div > div > a > h6').removeClass('see-animated');
      $('div.container.full-height.section-a > div > div > div').addClass('text-noanimated');
    $('div.container.full-height.section-a > div > div > div > h3').removeClass('text-animated');
    }
    
           if (y >= topb){
     $('div.container.full-height.section-b > div > div > div').addClass('img-animated'); 
      $('div.container.full-height.section-b > div > div > div').removeClass('img-noanimated');
    $('div.container.full-height.section-b > div > div > div > a > h6').addClass('see-animated');
    $('div.container.full-height.section-b > div > div > div > h3').addClass('text-animated');
    }else{
     $('div.container.full-height.section-b > div > div > div').addClass('img-noanimated');
     $('div.container.full-height.section-b > div > div > div').removeClass('img-animated');
    $('div.container.full-height.section-b > div > div > div > a > h6').removeClass('see-animated');
    $('div.container.full-height.section-b > div > div > div > h3').removeClass('text-animated');
    }
    
     if (y >= topc){
     $('div.container.full-height.section-c > div > div > div').addClass('img-animated'); 
      $('div.container.full-height.section-c > div > div > div').removeClass('img-noanimated');
    $('div.container.full-height.section-c > div > div > div > a > h6').addClass('see-animated');
    $('div.container.full-height.section-c > div > div > div > h3').addClass('text-animated');
    }else{
     $('div.container.full-height.section-c > div > div > div').addClass('img-noanimated');
     $('div.container.full-height.section-c > div > div > div').removeClass('img-animated');
    $('div.container.full-height.section-c > div > div > div > a > h6').removeClass('see-animated');
    $('div.container.full-height.section-c > div > div > div > h3').removeClass('text-animated');
    }
    
  });
});
