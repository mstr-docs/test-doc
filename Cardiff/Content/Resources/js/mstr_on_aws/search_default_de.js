﻿$(document).ready(function(){ 
  $('form').find("input[type=search], textarea").each(function(ev)
  {
      if(!$(this).val()) { 
     $(this).attr("placeholder", "Suchen");
  }
  });
		
		$('.search-bar input').attr('id', 'target');
		
		$('.search-bar input').before('<img id="search-icon" src="Resources/Images/icon_search.png"/> ');
		
});