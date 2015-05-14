(function (document) {
  'use strict';
 $('#tabs').carouFredSel({
          //circular: false,
          circular: true,
    infinite: true,
          items: 1,
          width: '100%',
          auto: false,
          pagination: {container: '#pager > ul',
          anchorBuilder: function( nr ) {if($(this).data('link')){ return '<li><a href="#">' + $(this).data('link') + '</a></li>';}}
          },
          items: {width: 200,height: "100%"},
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
  var curr = $('.nav li.selected');
  var curr_idx = curr.index();
  var toHide = curr.siblings().not(":first");
  toHide.addClass('inactive');
  curr.addClass('the-first');
  curr.next().addClass('the-second');
  $('.nav li').eq(curr_idx+2).addClass('the-third');
   $('.nav li').eq(curr_idx+3).addClass('the-fourth');
   $('.nav li').eq(curr_idx+4).addClass('the-fifth');
   $('.nav li').eq(curr_idx+4).addClass('the-sixth');
}

$('.nav > li a').on('click',function(){
  if(doSmallMenu){
    var pager = document.querySelector('dotpager-nav');
    var curr = $(this).parent();
    var curr_idx = curr.index();

    if(curr_idx == 5){
      var $first = $('.nav > li').eq(0).detach(); 
      curr.after($first);
      $first.addClass('selected');
      var toHide = curr.siblings().not($first);
    }else{
       var toHide = curr.siblings().not(curr.next());
    }
    if(curr.hasClass('the-first')) curr_idx = 6;
    $('.inactive').removeClass('inactive');
    toHide.addClass('inactive');
    if(curr_idx == 6){
      $first = $('.nav li.the-first').detach();
      $('.nav li.the-second').before($first);
    }  
    pager.advanceDots(curr_idx);  
    setTimeout(function(){
      $('.selected').removeClass('selected');
      curr.addClass('selected');
    },50); 
  }
});


// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
