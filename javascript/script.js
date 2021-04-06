

// MOBILE NAVBAR TOGGLE
$(function () {
    'use strict'
  
    $('[data-toggle="offcanvas"]').on('click', function () {
      $('.offcanvas-collapse').toggleClass('open');
      $('.offcanvas-close').toggleClass('close');
    })
  });


// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo").style.width = "30px";
  } else {
    document.getElementById("logo").style.width = "35px";
  }
}


// RELOAD PAGE
$('#Reloadpage').click(function() {
    location.reload();
}); 


