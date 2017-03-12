function showText (el) {
	if(el.previousElementSibling.clientHeight === 98) {
		el.previousElementSibling.style.height = "100%";
		el.innerHTML = "ShowLess...";
	} else {
		el.previousElementSibling.style.height = "98px";
		el.innerHTML = "Read More...";
	}
}

$(document).ready(function(){
  $('a').on('click', function(e){
    e.preventDefault();
  });
    
  $('#ddmenu li').hover(function () {
     clearTimeout($.data(this,'timer'));
     $('ul',this).stop(true,true).slideDown(200);
  }, function () {
    $.data(this,'timer', setTimeout($.proxy(function() {
      $('ul',this).stop(true,true).slideUp(200);
    }, this), 100));
  });

});

