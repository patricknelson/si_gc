var MOBILE_NAV=function(t){"use strict";var a=function(){return e()&&(i(),n()),!1},e=function(){return window.matchMedia("screen and (max-width: 767px)").matches?!0:!1},i=function(){var a=t(".nav li.selected"),e=a.index(),i=a.siblings().not(":first");i.addClass("inactive"),a.addClass("the-first").data("idx","0"),a.next().addClass("the-second").data("idx","1");var n=t(".nav li");n.eq(e+2).addClass("the-third").data("idx","2"),n.eq(e+3).addClass("the-fourth").data("idx","3"),n.eq(e+4).addClass("the-fifth").data("idx","4"),n.eq(e+5).addClass("the-sixth").data("idx","5")},n=function(){t(".nav > li a").on("click",function(){var a=document.querySelector("dotpager-nav"),e=t(this).parent(),i=e.data("idx");5==i&&d(e),t(".inactive").removeClass("inactive");var n=c(e,i);s(i),n.addClass("inactive"),a.advanceDots(i),r(e)})},d=function(a){var e=t("li.the-first").detach();a.after(e)},s=function(a){if(0==a){var e=t("li.the-first").detach();t(".nav li.the-second").before(e),e.addClass("selected")}},c=function(a,e){var i=t(".nav li.the-first"),n=0!=e?a.next():t("li.the-second");return 5==e?a.siblings().not(i):a.siblings().not(n)},r=function(a){setTimeout(function(){t(".selected").removeClass("selected"),a.addClass("selected")},50)};return{checkLoad:a}}(jQuery,window);