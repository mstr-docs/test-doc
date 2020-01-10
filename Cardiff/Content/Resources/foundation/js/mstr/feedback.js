$(document).ready(function(){

		//TODO: change the strings "english" and "french" to the corresponding numbers
		var FRENCH = "Lang_1036",
			FRENCH_2 = "Readme-FR",
			FRENCH_3 = "/fr/",
			GERMAN = "Lang_1031",
			GERMAN_2 = "Readme-DE",
			GERMAN_3 = "/de/",
			SPANISH = "Lang_3082",
			SPANISH_2 = "Readme-ES",
			SPANISH_3 = "/es-es/",
			KOREAN = "Lang_1042",
			KOREAN_2 = "Readme-KO",
			KOREAN_3 = "/ko/",
			JAPANESE = "Lang_1041",
			JAPANESE_2 = "Readme-JA",
			JAPANESE_3 = "/ja/",
			CHINESE = "Lang_2052",
			CHINESE_2 = "Readme-CN",
			CHINESE_3 = "/zh-cn/",
			PORTUGUESE = "Lang_1046",
			PORTUGUESE_2 = "Readme-BR",
			PORTUGUESE_3 = "/pt-br/",
			ITALIAN = "Lang_1040",
			ITALIAN_2 = "Readme-IT",
			ITALIAN_3 = "/it/",
			DUTCH = "Lang_1043",
			SWEDISH = "Lang_1053";

		var urlString = "" + window.location.href;

		if((urlString).includes(FRENCH) || (urlString).includes(FRENCH_2) || (urlString).includes(FRENCH_3)){
			$("div#feedback-survey.french").css("display", "block");
			$("div.footer.french").css("display", "block");
		}
		else if((urlString).includes(GERMAN) || (urlString).includes(GERMAN_2) || (urlString).includes(GERMAN_3)){
			$("div#feedback-survey.german").css("display", "block");
			$("div.footer.german").css("display", "block");
		}
		else if((urlString).includes(ITALIAN) || (urlString).includes(ITALIAN_2) || (urlString).includes(ITALIAN_3)){
			$("div#feedback-survey.italian").css("display", "block");
			$("div.footer.italian").css("display", "block");
		}
		else if((urlString).includes(SPANISH) || (urlString).includes(SPANISH_2) || (urlString).includes(SPANISH_3)){
			$("div#feedback-survey.spanish").css("display", "block");
			$("div.footer.spanish").css("display", "block");
		}
		else if((urlString).includes(PORTUGUESE) || (urlString).includes(PORTUGUESE_2) || (urlString).includes(PORTUGUESE_3)){
			$("div#feedback-survey.portuguese").css("display", "block");
			$("div.footer.portuguese").css("display", "block");
		}
		else if((urlString).includes(JAPANESE) || (urlString).includes(JAPANESE_2) || (urlString).includes(JAPANESE_3)){
			$("div#feedback-survey.japanese").css("display", "block");
			$("div.footer.japanese").css("display", "block");
		}
		else if((urlString).includes(KOREAN) || (urlString).includes(KOREAN_2) || (urlString).includes(KOREAN_3)){
			$("div#feedback-survey.korean").css("display", "block");
			$("div.footer.korean").css("display", "block");
		}
		else if((urlString).includes(CHINESE) || (urlString).includes(CHINESE_2) || (urlString).includes(CHINESE_3)){
			$("div#feedback-survey.chinese").css("display", "block");
			$("div.footer.chinese").css("display", "block");
		}
		else if((urlString).includes(DUTCH)) {
			$("div#feedback-survey.english").css("display", "block");
			$("div.footer.dutch").css("display", "block");
		}
		else if((urlString).includes(SWEDISH)) {
			$("div#feedback-survey.english").css("display", "block");
			$("div.footer.swedish").css("display", "block");
		}
		else {
			$("div#feedback-survey.english").css("display", "block");
		    $("div.footer.english").css("display", "block");
		}
	/* -------------- Feedback -------------- */
		
	//toggle the dialog box appear and close when clicking yes/no
	$(".feedback-option .feedback-option-button").click(function() {
		$(this).parents(".feedback-option").toggleClass("selected");
		$(this).parents(".feedback-option").siblings().removeClass("selected");
		});
  
	//use the close button to close parent dialog box
	$(".feedback-option .close").click(function() {
		$(this).parents(".feedback-option").toggleClass("selected");
		});
  
	//send feedback to google on yes click
	$("#feedback-yes").click(function() {
		ga("send", "event", "Feedback - Yes", "N/A", location.href);
		});
      
	//send google data on checkbox click, disable the option, display the thank you message
	$("#feedback-no .option").change(function() {
		$("#feedback-no .thank-you-message").addClass("enabled");
		$(this).attr("disabled", true);
		if ($(this).is(":checked")) {
			var reason = $(this).attr("data-analytics-label");
			ga("send", "event", "Feedback - No", reason, location.href);
		}
	});
   
});//end doc.ready