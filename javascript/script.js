

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


// MOBILE MENU
	
if( 'ontouchstart' in window ){ var click = 'touchstart'; }
else { var click = 'click'; }


$('div.burger').on(click, function(){

    if( !$(this).hasClass('open') ){ openMenu(); } 
    else { closeMenu(); }

});


$('div.menu ul li a').on(click, function(e){
  e.preventDefault();
  closeMenu();
});		


function openMenu(){
  
  $('div.circle').addClass('expand');
        
  $('div.burger').addClass('open');	
  $('div.x, div.y, div.z').addClass('collapsse');
  $('.menu li').addClass('animate');
  
  setTimeout(function(){ 
    $('div.y').hide(); 
    $('div.x').addClass('rotate30'); 
    $('div.z').addClass('rotate150'); 
  }, 70);
  setTimeout(function(){
    $('div.x').addClass('rotate45'); 
    $('div.z').addClass('rotate135');  
  }, 120);
  
  

}

function closeMenu(){

  $('div.burger').removeClass('open');	
  $('div.x').removeClass('rotate45').addClass('rotate30'); 
  $('div.z').removeClass('rotate135').addClass('rotate150');				
  $('div.circle').removeClass('expand');
  $('.menu li').removeClass('animate');
  
  setTimeout(function(){ 			
    $('div.x').removeClass('rotate30'); 
    $('div.z').removeClass('rotate150'); 			
  }, 50);
  setTimeout(function(){
    $('div.y').show(); 
    $('div.x, div.y, div.z').removeClass('collapsse');
  }, 70);													
  
}