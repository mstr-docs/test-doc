$(document).ready(function(){

		$("h1").after("<div></div>");
		$("h1 + div").attr("id", "show");
  
		console.log("hiiii");
		console.log(window.location.pathname.split('/'));

		var sections = window.location.pathname.split('/'),

			version = sections[2];

		document.getElementById("show").innerHTML = ("You are viewing version") + version;
  
  
		//consider version0 to be the current version for this test case
		var version0 = version;
		var array_of_all_versions = [version0,"version1","version2","version3"]
  
  
		/*
		What this does is shows all versions in the dropdown
		*/
		for(var i = 0;i < array_of_all_versions.length; i++){
  
			$("#list_of_other_versions").append($('<option>', {
				value: array_of_all_versions[i],
				text: '' + array_of_all_versions[i]
				}));
    
				}
  
  
  
				$("#list_of_other_versions" ).change(function () {
					console.log(this.value);
					console.log(window.location.href);
					//window.location = "http://mohaiminalaoun.github.io/";
					var oldURL = window.location.href;
					var newURL = oldURL.replace(version, this.value);
    
					console.log(newURL);
					window.location = newURL;
				});


			})