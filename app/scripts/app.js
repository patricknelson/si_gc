(function (document) {
  'use strict';
 $('#tabs').carouFredSel({
          circular: true,
    infinite: true,
          width: '100%',
          auto: false,
          pagination: {container: '#pager > ul',
          anchorBuilder: function( nr ) {if($(this).data('link')){ return '<li><a href="#">' + $(this).data('link') + '</a></li>';}}
          },
          itemWidth: 200,
          items: {visible:{min:1,max:1},width: 200,height: "100%"},
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

MOBILE_NAV.checkLoad();
var isNotChrome = (!!window.chrome && !!window.chrome.webstore) ? false : true;
if(isNotChrome) $('body').addClass('notChrome');

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));