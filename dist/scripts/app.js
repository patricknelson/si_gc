!function(t){"use strict";$("#tabs").carouFredSel({circular:!0,infinite:!0,items:1,width:"100%",auto:!1,pagination:{container:"#pager > ul",anchorBuilder:function(){return $(this).data("link")?'<li><a href="#">'+$(this).data("link")+"</a></li>":void 0}},items:{width:200,height:"100%"},transition:!0,responsive:!0}),$('[data-tooltip!=""]').qtip({content:{attr:"data-tooltip"},position:{my:"center left",at:"center right",target:"mouse",adjust:{mouse:!1}},hide:{distance:15},style:{classes:"qtip-light qtip-shadow"}});var e=window.matchMedia("screen and (max-width: 767px)").matches;if(e){var a=$(".nav li.selected"),i=a.index(),s=a.siblings().not(":first");s.addClass("inactive"),a.addClass("the-first"),a.next().addClass("the-second"),$(".nav li").eq(i+2).addClass("the-third"),$(".nav li").eq(i+3).addClass("the-fourth"),$(".nav li").eq(i+4).addClass("the-fifth"),$(".nav li").eq(i+4).addClass("the-sixth")}$(".nav > li a").on("click",function(){if(e){var a=t.querySelector("dotpager-nav"),i=$(this).parent(),s=i.index();if(5==s){var n=$(".nav > li").eq(0).detach();i.after(n),n.addClass("selected");var d=i.siblings().not(n)}else var d=i.siblings().not(i.next());i.hasClass("the-first")&&(s=6),$(".inactive").removeClass("inactive"),d.addClass("inactive"),6==s&&(n=$(".nav li.the-first").detach(),$(".nav li.the-second").before(n)),a.advanceDots(s),setTimeout(function(){$(".selected").removeClass("selected"),i.addClass("selected")},50)}})}(wrap(document)),!function(t){"use strict";$("#tabs").carouFredSel({circular:!0,infinite:!0,items:1,width:"100%",auto:!1,pagination:{container:"#pager > ul",anchorBuilder:function(){return $(this).data("link")?'<li><a href="#">'+$(this).data("link")+"</a></li>":void 0}},items:{width:200,height:"100%"},transition:!0,responsive:!0}),$('[data-tooltip!=""]').qtip({content:{attr:"data-tooltip"},position:{my:"center left",at:"center right",target:"mouse",adjust:{mouse:!1}},hide:{distance:15},style:{classes:"qtip-light qtip-shadow"}});var e=window.matchMedia("screen and (max-width: 767px)").matches;if(e){var a=$(".nav li.selected"),i=a.index(),s=a.siblings().not(":first");s.addClass("inactive"),a.addClass("the-first"),a.next().addClass("the-second"),$(".nav li").eq(i+2).addClass("the-third"),$(".nav li").eq(i+3).addClass("the-fourth"),$(".nav li").eq(i+4).addClass("the-fifth"),$(".nav li").eq(i+4).addClass("the-sixth")}$(".nav > li a").on("click",function(){if(e){var a=t.querySelector("dotpager-nav"),i=$(this).parent(),s=i.index();if(5==s){var n=$(".nav > li").eq(0).detach();i.after(n),n.addClass("selected");var d=i.siblings().not(n)}else var d=i.siblings().not(i.next());i.hasClass("the-first")&&(s=6),$(".inactive").removeClass("inactive"),d.addClass("inactive"),6==s&&(n=$(".nav li.the-first").detach(),$(".nav li.the-second").before(n)),a.advanceDots(s),setTimeout(function(){$(".selected").removeClass("selected"),i.addClass("selected")},50)}})}(wrap(document));