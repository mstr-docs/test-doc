$( document ).ready(function() {

var whiteList = [
			'www2.microstrategy.com/producthelp/10.9/BasicReporting/',
			'www2.microstrategy.com/producthelp/10.9/CommandManager',
			'www2.microstrategy.com/producthelp/10.9/AdvancedReportingGuide',
			'www2.microstrategy.com/producthelp/10.9/InstallConfig',
			'www2.microstrategy.com/producthelp/10.9/IntroMSTR',
			'www2.microstrategy.com/producthelp/10.9/ReportDesigner',
			'www2.microstrategy.com/producthelp/10.9/DashboardsWidgets',
			'www2.microstrategy.com/producthelp/10.9/ProjectDesignGuide',
			'www2.microstrategy.com/producthelp/10.9/SupplementalAdmin',
			'www2.microstrategy.com/producthelp/10.9/UpgradeGuide',
			'www2.microstrategy.com/producthelp/10.9/SystemAdmin',
			'www2.microstrategy.com/producthelp/10.9/DocCreationGuide',
		
			];

var fnIsInList = function (list) {
				var href = window.location.href,
					isInList = false;
  
				(list || []).forEach(function (url) {
						if (href.indexOf(url) !== -1) {
						isInList = true;
					}
					});
  
return isInList;
	};
	
	var urlHasJapanese = function(){
		var href = window.location.href;
		return (href.indexOf("Lang_1041") !== -1);
			}


		if (fnIsInList(whiteList) && !urlHasJapanese()) 
		{
			$("h1").after("<p>Starting in v10.9, dashboards will be referred to as dossiers. Please keep this in mind as you review documentation that may still reference dashboards.</p>");
			$( "h1+p" ).addClass("dashboardNote");

		}else if (fnIsInList(whiteList) && urlHasJapanese()){
  
			$("h1").after("<p>バージョン10.9より、これまでのダッシュボードはドシエと呼ばれるようになります。製品マニュアル内でダッシュボードの表記が残っている場合がございますのでご注意願います。<p>");
			$( "h1+p" ).addClass("dashboardNote");
		}

		});