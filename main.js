$(document).ready(function () {  
 $('body > div.container.full-height > div.row.full-content > div.col.s12.m5.l5.white-text > div').addClass('image-animated'); 
 $('body > div.container.full-height > div.row.full-content-resume > div:nth-child(3) > div').addClass('side-animated'); 
 $('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
});
  $(document).on('keydown', function(e) {
    if (e.keyCode === 27) { 
      $("#toggle").removeClass('active');
      $('#overlay').removeClass('open');
    }
  });


/*var top = $('.section-a').offset().top;
var topb = $('.section-b').offset().top;
var topc = $('.section-c').offset().top;
var topd = $('.section-d').offset().top;

 $(window).scroll(function (event) {

  var y = $(this).scrollTop();

  if (y >= top){
   $('div.container.full-height.section-a > div > div > div').addClass('img-animated'); 
   $('div.container.full-height.section-a > div > div > div').removeClass('img-noanimated');
   $('div.container.full-height.section-a > div > div > div > div.see-button-wrapper').addClass('see-animated');
   $('div.container.full-height.section-a > div > div > div > h3').addClass('text-animated');
   $('div.container.full-height.section-a > div > div > div').removeClass('text-noanimated');
 }else{
   $('div.container.full-height.section-a > div > div > div').addClass('img-noanimated');
   $('div.container.full-height.section-a > div > div > div').removeClass('img-animated');
   $('div.container.full-height.section-a > div > div > div > a > h6').removeClass('see-animated');
   $('div.container.full-height.section-a > div > div > div > div.see-button-wrapper').removeClass('see-animated');
   $('div.container.full-height.section-a > div > div > div').addClass('text-noanimated');
   $('div.container.full-height.section-a > div > div > div > h3').removeClass('text-animated');
 }

 if (y >= topb){
   $('div.container.full-height.section-b > div > div > div').addClass('img-animated'); 
   $('div.container.full-height.section-b > div > div > div').removeClass('img-noanimated');
   $('div.container.full-height.section-b > div > div > div > div.see-button-wrapper').addClass('see-animated');
   $('div.container.full-height.section-b > div > div > div > h3').addClass('text-animated');
 }else{
   $('div.container.full-height.section-b > div > div > div').addClass('img-noanimated');
   $('div.container.full-height.section-b > div > div > div').removeClass('img-animated');
   $('div.container.full-height.section-b > div > div > div > div.see-button-wrapper').removeClass('see-animated');
   $('div.container.full-height.section-b > div > div > div > h3').removeClass('text-animated');
 }

 if (y >= topc){
   $('div.container.full-height.section-c > div > div > div').addClass('img-animated'); 
   $('div.container.full-height.section-c > div > div > div').removeClass('img-noanimated');
   $('div.container.full-height.section-c > div > div > div > div.see-button-wrapper').addClass('see-animated');
   $('div.container.full-height.section-c > div > div > div > h3').addClass('text-animated');
 }else{
   $('div.container.full-height.section-c > div > div > div').addClass('img-noanimated');
   $('div.container.full-height.section-c > div > div > div').removeClass('img-animated');
   $('div.container.full-height.section-c > div > div > div > div.see-button-wrapper').removeClass('see-animated');
   $('div.container.full-height.section-c > div > div > div > h3').removeClass('text-animated');
 }

 if (y >= topd){
   $('div.container.full-height.section-d > div > div > div').addClass('img-animated'); 
   $('div.container.full-height.section-d > div > div > div').removeClass('img-noanimated');
   $('div.container.full-height.section-d > div > div > div > div.see-button-wrapper').addClass('see-animated');
   $('div.container.full-height.section-d > div > div > div > h3').addClass('text-animated');
 }else{
   $('div.container.full-height.section-d > div > div > div').addClass('img-noanimated');
   $('div.container.full-height.section-d > div > div > div').removeClass('img-animated');
   $('div.container.full-height.section-d > div > div > div > div.see-button-wrapper').removeClass('see-animated');
   $('div.container.full-height.section-d > div > div > div > h3').removeClass('text-animated');
 }

});*/
});

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-121611136-1');
