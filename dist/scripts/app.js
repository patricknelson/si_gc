/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
window.matchMedia||(window.matchMedia=function(){"use strict";var t=window.styleMedia||window.media;if(!t){var e=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;e.type="text/css",e.id="matchmediajs-test",i.parentNode.insertBefore(e,i),n="getComputedStyle"in window&&window.getComputedStyle(e,null)||e.currentStyle,t={matchMedium:function(t){var i="@media "+t+"{ #matchmediajs-test { width: 1px; } }";return e.styleSheet?e.styleSheet.cssText=i:e.textContent=i,"1px"===n.width}}}return function(e){return{matches:t.matchMedium(e||"all"),media:e||"all"}}}()),window.matchMedia||(window.matchMedia=function(){"use strict";var t=window.styleMedia||window.media;if(!t){var e=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;e.type="text/css",e.id="matchmediajs-test",i.parentNode.insertBefore(e,i),n="getComputedStyle"in window&&window.getComputedStyle(e,null)||e.currentStyle,t={matchMedium:function(t){var i="@media "+t+"{ #matchmediajs-test { width: 1px; } }";return e.styleSheet?e.styleSheet.cssText=i:e.textContent=i,"1px"===n.width}}}return function(e){return{matches:t.matchMedium(e||"all"),media:e||"all"}}}()),function(){"use strict";$("#tabs").carouFredSel({circular:!0,infinite:!0,width:"100%",auto:!1,pagination:{container:"#pager > ul",anchorBuilder:function(){return $(this).data("link")?'<li><a href="#">'+$(this).data("link")+"</a></li>":void 0}},itemWidth:200,items:{visible:{min:1,max:1},width:200,height:"100%"},transition:!0,responsive:!0}),$('[data-tooltip!=""]').qtip({content:{attr:"data-tooltip"},position:{my:"center left",at:"center right",target:"mouse",adjust:{mouse:!1}},hide:{distance:15},style:{classes:"qtip-light qtip-shadow"}});var t=window.chrome&&window.chrome.webstore?!1:!0;t&&$("body").addClass("notChrome"),window.addEventListener("orientationchange",function(){console.log(window.orientation),window.location="/m.html"},!1)}(wrap(document)),!function(){"use strict";$("#tabs").carouFredSel({circular:!0,infinite:!0,width:"100%",auto:!1,pagination:{container:"#pager > ul",anchorBuilder:function(){return $(this).data("link")?'<li><a href="#">'+$(this).data("link")+"</a></li>":void 0}},itemWidth:200,items:{visible:{min:1,max:1},width:200,height:"100%"},transition:!0,responsive:!0}),$('[data-tooltip!=""]').qtip({content:{attr:"data-tooltip"},position:{my:"center left",at:"center right",target:"mouse",adjust:{mouse:!1}},hide:{distance:15},style:{classes:"qtip-light qtip-shadow"}});var t=window.chrome&&window.chrome.webstore?!1:!0;t&&$("body").addClass("notChrome"),window.addEventListener("orientationchange",function(){console.log(window.orientation),window.location="/m.html"},!1)}(wrap(document));