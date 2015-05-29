var MOBILE_NAV = (function($,w,undefined){
    'use strict';
    
    var checkLoad = function(){
      if(_checkIsMobile()){
        _initMenu();
        _setupClickHandler();
      }
      return false;
    },
      _checkIsMobile = function(){
        return (window.matchMedia("screen and (max-width: 767px)").matches)? true : false;
    },
      _initMenu = function(){
        var $curr     = $('.nav li.selected');
        var curr_idx = $curr.index();
        var toHide = $curr.siblings().not(":first");
        toHide.addClass('inactive');
        $curr.addClass('the-first').data('idx','0');
        $curr.next().addClass('the-second').data('idx','1');
        var $lis = $('.nav li'); 
        $lis.eq(curr_idx+2).addClass('the-third').data('idx','2');
        $lis.eq(curr_idx+3).addClass('the-fourth').data('idx','3');
        $lis.eq(curr_idx+4).addClass('the-fifth').data('idx','4');
        $lis.eq(curr_idx+5).addClass('the-sixth').data('idx','5');
    },
      _setupClickHandler = function(){
       $('.nav > li a').on('click',function(){
         var $pager   = document.querySelector('dotpager-nav');
         var $curr    = $(this).parent();
         var curr_idx = $curr.data('idx');
         if(curr_idx == 5) _doInfinite($curr);

         $('.inactive').removeClass('inactive');
         var toHide = _getItemsToHide($curr, curr_idx);
         _checkDoInfiniteRestart(curr_idx);
         toHide.addClass('inactive');
         $pager.advanceDots(curr_idx);  
         _toggleSelected($curr);
       });  
    },
      _doInfinite = function($curr){
        var $first = $('li.the-first').detach(); 
        $curr.after($first);
    },
      _checkDoInfiniteRestart = function(idx){
        if(idx == 0){
          var $first = $('li.the-first').detach();
          $('.nav li.the-second').before($first);
          $first.addClass('selected');
        }  
    },
      _getItemsToHide = function($curr,idx){
        var $first = $('.nav li.the-first');
        var $nxt   = (idx != 0) ? $curr.next() : $('li.the-second');
        return (idx == 5)  ?  $curr.siblings().not($first) : $curr.siblings().not($nxt);
    },
     _toggleSelected = function($curr){
        setTimeout(function(){
          $('.selected').removeClass('selected');
          $curr.addClass('selected');
        },50);
    };
    
    return {
      checkLoad:checkLoad,
      isMobile:_checkIsMobile
    };  
})(jQuery,window);