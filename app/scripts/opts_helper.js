var OPTS_HELPER = (function($,w,undefined){
	"use strict";
	var _opts = {
	  "title": "",                    
      "width": 1000,
      "height": 175,
      "bar": {"groupWidth": "95%"},
      "legend": {"position": "none" },
      "hAxis": { "textPosition": "none","gridlines": {"color": "transparent"} },
      "vAxis": { "textPosition": "none","gridlines": {"color": "transparent"}},
      "annotations": {"alwaysOutside": true,"textStyle": {"fontSize": 18}},
      "animation":{"duration": 3000,"easing": "in"}
   },
   _pieOpts = {
   	  "title": "",
      "pieStartAngle":201,
      "colors": ["#0064D2", "#3383DB", "#66A2E4", "#99C1ED", "#CCE0F6"],
      "width":760,
      "height":400,
      "legend":"none"  
  	},
  	getPie = function(data){
  	   /*data.each(function(k,v){
  	   		console.log(k); console.log(v);
  	   });*/
		$.extend(_pieOpts,data);
		console.log(_pieOpts);
		
  	   //console.log(JSON.stringify(_pieOpts));
  	   return JSON.stringify(_pieOpts);
  	},
  	getBar = function(data){
  	   $.extend(_opts,data);
  	   return JSON.stringify(_opts);
  	};
  	return {
  		'pie':getPie,
  		'bar':getBar
  	};
})(jQuery,window);