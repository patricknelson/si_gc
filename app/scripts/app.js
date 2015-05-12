(function (document) {
  'use strict';
 $('#tabs').carouFredSel({
          circular: false,
          items: 1,
          width: '100%',
          auto: false,
          pagination: {
          container: '#pager > ul',
          anchorBuilder: function( nr ) {
            if($(this).data('link')){
               return '<li><a href="#">' + $(this).data('link') + '</a></li>';
            }
          }
          },
          items: {
            width       : 200,
            height      : "50%"
          },
          transition:true,
          responsive: true
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
 $('.energy-used-legend > div').on('mouseenter',function(){
      CHRTR.legendHover($(this));
  }).on('mouseleave',function(){
      CHRTR.resetSliceFill();
  });  
$(document).on('google-chart-render',function(e){
        var id = e.target.id;
        if(id == 'data_center2'){
          setTimeout(function(){
            CHRTR.fixPieLabels();
          }, 1000);
        }else{
          return false;
        }
 });
var doSmallMenu = window.matchMedia("screen and (max-width: 1148px)").matches;
if(doSmallMenu){
  console.log('doing small menu');
  var curr = $('.nav li.selected');
  var curr_idx = curr.index();
  var toHide = curr.siblings().not(":first");
  console.log(toHide);
}

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
