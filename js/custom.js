jQuery(function($){'use strict';(function(){$('#preloader').delay(200).fadeOut('slow');}());$('.left-col-block, .right-col-block').theiaStickySidebar();});

$(function(){

  $("#typed").typed({
    stringsElement: $('#typed-strings'),
    typeSpeed: 100,
    backDelay: 3000,
    loop: true,
    contentType: 'html',
    loopCount: false,
    callback: function(){

    },
    resetCallback: function() { newTyped(); }
  });

});