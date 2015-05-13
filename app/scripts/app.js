(function (document) {
  'use strict';
 $('#tabs').carouFredSel({
          circular: false,
          items: 1,
          width: '100%',
          auto: false,
          pagination: {
          container: '#pager > ul',
          anchorBuilder: function( nr ) {if($(this).data('link')){ return '<li><a href="#">' + $(this).data('link') + '</a></li>';}}},
          items: {width       : 200,height      : "50%"},
          transition:true,
          responsive: true,
          //next:{button:'li.arrow-next'}
  });
  $('[data-tooltip!=""]').qtip({ 
            content: {attr: 'data-tooltip'},
            position: {
              my: 'center left',
              at: 'center right',
              target: 'mouse', 
              adjust: { mouse: false }
            },
            hide: {
                distance: 15 // Hide it after we move 15 pixels away from the origin
            },
            style: {
                classes: 'qtip-light qtip-shadow'
            }
  });

/** TO DO: REFACTOR **/
var doSmallMenu = window.matchMedia("screen and (max-width: 767px)").matches;
if(doSmallMenu){
  console.log('doing small menu');
  var curr = $('.nav li.selected');
  var curr_idx = curr.index();
  var toHide = curr.siblings().not(":first");
  toHide.addClass('inactive');
  $('.nav').append('<li class="next-arrow"><span>&raquo;</span></li>');
  $('.nav').prepend('<li class="prev-arrow inactive"><span>&laquo;</span></li>')
}
$('.nav > li a').on('click',function(){
  if(doSmallMenu){
    var curr = $(this).parent();
    var curr_idx = curr.index();

    if(curr_idx == 6){
      $('.prev-arrow').removeClass('inactive');
      var $first = $('.nav > li').eq(1).detach(); 
      curr.after($first);
      $first.addClass('selected');
      var toHide = curr.siblings().not($first).not(".next-arrow");
    }else{
       $('.prev-arrow').addClass('inactive');
       var toHide = curr.siblings().not(curr.next()).not(".next-arrow");
    }
    $('.inactive').removeClass('inactive');
    toHide.addClass('inactive');    
    setTimeout(function(){
      $('.selected').removeClass('selected');
      curr.addClass('selected');
    },50); 
  }
});
$('.nav > li.next-arrow span').on('click',function(){
  if(doSmallMenu){
    var curr = $('.selected').next();
    var curr_idx = curr.index();
    if(curr_idx == 6){
      $('.prev-arrow').removeClass('inactive');
      var $first = $('.nav > li').eq(1).detach(); 
      curr.after($first);
      $first.addClass('selected');
      var toHide = curr.siblings().not($first).not(".next-arrow");
    }else{
       $('.prev-arrow').addClass('inactive');
       var toHide = curr.siblings().not(curr.next()).not(".next-arrow");
    }
    $('.inactive').removeClass('inactive');
    toHide.addClass('inactive');    
    setTimeout(function(){
      $('.selected').removeClass('selected');
      curr.addClass('selected');
    },50); 
    console.log('span clicked');
    $('#tabs').trigger('next');
    /*var curr = $(this).parent();
    var curr_idx = curr.index();

    if(curr_idx == 6){
      $('.prev-arrow').removeClass('inactive');
      var toHide = curr.siblings().not(":first").not(".next-arrow");
    }else{
       $('.prev-arrow').addClass('inactive');
       var toHide = curr.siblings().not(curr.next()).not(".next-arrow");
    }
    $('.inactive').removeClass('inactive');
    toHide.addClass('inactive');    
    setTimeout(function(){
      $('.selected').removeClass('selected');
      curr.addClass('selected');
    },50); */
  }
});
// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
