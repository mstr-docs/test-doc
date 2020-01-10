function resizeMenu() {
  var header_width = 0;
  var nav_width = $(".header").width();
  var header_fitted_width = 0;
  var prev;

  if (nav_width < 1263) {//mobile and tablet css
    $("#navigation").css("display", "none");
    $("#community").css("display", "none");
    $("#community").css("width", "0px");
    $(".header-item").not("#more").css("display", "none");
    $(".overflow .header-item").css("display", "none");
    $("#logo").css("display", "none");
    $("#header-ul").css("background", "none");
  } 
  else {//browser css
    $("#navigation").css("display", "none");
    $("#community").css("display", "inline-block");
    $("#community").css("width", "130px");
	$(".header-item").not("#more").css("display", "inline-block");
    $(".overflow .header-item").css("display", "block");
    $("#logo").css("display", "block");
    $("#header-ul").css("background", "none");
  }

  if (nav_width >= 1263) { //checking the items that are not in the more fit
    $("#header-ul li").not("#more").each((idx, obj) => {
      header_width += $(obj).width();
      if (header_width < nav_width) {
        header_fitted_width = header_width;
		}
      if (header_width + 130 + 50 >= nav_width) {
        if (prev) {
          $(obj).insertAfter(prev);
        } 
		else {
          $(".overflow").prepend($(obj)); //if it doesn't fit, it appends it into the overflow
        }
        prev = $(obj);
      }
    });

    $(".overflow li").each((idx, obj) => {//if you make it wider, it looks to see what belongs in the overflow
      $(obj).css("display", "inline-block");
      $(obj).appendTo($("#header-ul"));
      header_fitted_width += $(obj).width();
      if (header_fitted_width + 130 + 50 > nav_width) {
        $(obj).css("display", "block");
        $(".overflow").prepend($(obj));
        return false;
      }
    });

    if ($(".overflow li").length === 1) {//if there is only one element, it will check to see if it fits
      $(".overflow li").each((idx, obj) => {
        $(obj).css("display", "inline-block");
        $(obj).appendTo($("#header-ul"));
        if (header_fitted_width >= nav_width) {
          $(obj).css("display", "block");
          $(".overflow").prepend($(obj));
        }
      });
    }
  }

  if (header_fitted_width + 130 + 50 >= nav_width && $(".overflow li").length > 0 && nav_width >= 1263) {//checking to see if the more should show
    $("#more").show();
  } 
  else {
   $("#more").hide();
  }
}

$(document).ready(function() {
  $("div.header").css("display", "block"); //This line displays the header
  resizeMenu();
	
  $(window).resize(function() {
    resizeMenu();
  });
    
 $("#more").click(function(event) {//more button
   $(".overflow").slideToggle();
   resizeMenu();    
   event.stopPropagation();
 });

 $("#navigation").click(function(event) {//side menu for mobile
   $(".nav-header").css("display", "block");
   event.stopPropagation(); //prevents menu from closing if you click in the menu
 });

 $(".nav-header").click(function(event) {
   event.stopPropagation();//same as previous
 });

 $(document).click(function() {//clicking outside the menu closes it
   $(".overflow").hide();
   $(".nav-header").hide();
  });
});