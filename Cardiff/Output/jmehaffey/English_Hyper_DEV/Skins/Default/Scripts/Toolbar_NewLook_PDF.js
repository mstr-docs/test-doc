function buildUrl() {
/* Language and Readme language variables */
    var englishLangCodeNum = "Lang_1033",
	englishReadme = "Readme/",
        englishPDFFolder = "en/",
        englishLangCodeAlpha = "/en-us/",	
        frenchLangCodeNum = "Lang_1036",
        frenchReadme = "Readme-FR",
        frenchPDFFolder = "fr/",
        frenchLangCodeAlpha = "/fr/",
        germanLangCodeNum = "Lang_1031",
        germanReadme = "Readme-DE",
        germanPDFFolder = "de/",
        germanLangCodeAlpha = "/de/",
        spanishLangCodeNum = "Lang_3082",
        spanishReadme = "Readme-ES",
        spanishPDFFolder = "es/",
        spanishLangCodeAlpha = "/es-es/",
	koreanLangCodeNum = "Lang_1042",
        koreanReadme = "Readme-KO",
        koreanPDFFolder = "ko/",
        koreanLangCodeAlpha = "/ko/",
        japaneseLangCodeNum = "Lang_1041",
        japaneseReadme = "Readme-JA",
        japanesePDFFolder = "ja/",
        japaneseLangCodeAlpha = "/ja/",
        chineseLangCodeNum = "Lang_2052",
        chineseReadme = "Readme-CN",
        chinesePDFFolder = "szh/",
        chineseLangCodeAlpha = "/zh-cn/",
        portugueseLangCodeNum = "Lang_1046",
        portugueseReadme = "Readme-BR",
        portuguesePDFFolder = "pt/",
        portugueseLangCodeAlpha = "/pt-br/",
        italianLangCodeNum = "Lang_1040",
        italianReadme = "Readme-IT",
        italianPDFFolder = "it/",
        italianLangCodeAlpha = "/it/",

/*
    Online help guide folder and PDF file name variables
*/
	sagFolder = "SystemAdmin",
	sagPDF = "Admin.pdf",
	argFolder = "AdvancedReportingGuide",
	argPDF = "AdvancedReporting.pdf",
	brgFolder = "BasicReporting",
	brgPDF = "BasicReporting.pdf",
	dawgFolder = "DashboardsWidgets",
	dawgPDF = "DashboardsWidgets.pdf",
	dugFolder = "Desktop",
	dugPDF = "AnalyticsDesktopUserGuide.pdf",
	dcgFolder = "DocCreationGuide",
	dcgPDF = "DocumentCreation.pdf",
	emFolder = "EnterpriseManager",
	emPDF = "EnterpriseManager.pdf",
	funcFolder = "FunctionsRef",
	funcPDF = "FunctionsReference.pdf",
	hramFolder = "HRAM",
	hramPDF = "HRAMref.pdf",
	idenFolder = "IdentityHelp",
	idenPDF = "Identity.pdf",
	imaFolder = "InMemoryAnalytics",
	imaPDF = "InMemoryAnalytics.pdf",
	icgFolder = "InstallConfig",
	icgPDF = "InstallationConfig.pdf",
	intFolder = "IntroMSTR",
	intPDF = "mstrintro.pdf",
	mdxFolder = "MDXCubeReporting",
	mdxPDF = "MDXCubeReporting.pdf",
	moaFolder = "MobileAdmin",
	moaPDF = "MobileAdmin.pdf",
	mobFolder = "MobileAnalysis",
	mobPDF = "MobileAnalysis.pdf",
	paFolder = "PlatformAnalytics",
	paPDF = "PlatformAnalyticsGuide.pdf",
	pdgFolder = "ProjectDesignGuide",
	pdgPDF = "ProjectDesign.pdf",
	upgFolder = "UpgradeGuide",
	upgPDF = "UpgradeGuide.pdf",
	wksFolder = "Workstation",
	wksPDF = "WorkstationUserGuide.pdf",
	readmePDF = "Readme.pdf",
	readmeFolder = "Readme";
	/*
	Split URL and build new base URL for manuals folder
	*/
	var pathArray = window.location.pathname.split('/');
	var newPath = window.location.protocol + "//" + window.location.host + pathArray[0] + "/" + pathArray[1] + "/" + pathArray[2] + "/manuals/";
	var urlString = window.location.href;
	/*
	Read urlString to check for language and guide.
	Build and return final url to PDF file on Prod Server.
	*/
	/*
		English
	*/
	if((urlString).includes(englishLangCodeNum) && (urlString).includes(sagFolder)){
		finalUrl = newPath + englishPDFFolder + sagPDF;
	}
	else if((urlString).includes(funcFolder)){
		finalUrl = newPath + englishPDFFolder + funcPDF;
	}
	else if((urlString).includes(englishLangCodeNum) && (urlString).includes(argFolder)){
		finalUrl = newPath + englishPDFFolder + argPDF;
	}
	else if((urlString).includes(englishLangCodeNum) && (urlString).includes(brgFolder)){
		finalUrl = newPath + englishPDFFolder + brgPDF;
	}
	else if((urlString).includes(englishLangCodeNum) && (urlString).includes(dawgFolder)){
		finalUrl = newPath + englishPDFFolder + dawgPDF;
	}
	else if((urlString).includes(englishLangCodeNum) && (urlString).includes(dugFolder)){
		finalUrl = newPath + englishPDFFolder + dugPDF;
	}
	else if((urlString).includes(englishLangCodeNum) && (urlString).includes(dcgFolder)){
		finalUrl = newPath + englishPDFFolder + dcgPDF;
	}
	else if((urlString).includes(englishLangCodeNum) && (urlString).includes(emFolder)){
		finalUrl = newPath + englishPDFFolder + emPDF;
	}
	else if((urlString).includes(englishLangCodeNum) && (urlString).includes(hramFolder)){
		finalUrl = newPath + englishPDFFolder + hramPDF;
	}
	else if((urlString).includes(englishLangCodeNum) && (urlString).includes(idenFolder)){
		finalUrl = newPath + englishPDFFolder + idenPDF;
	}
	else if((urlString).includes(englishLangCodeNum) && (urlString).includes(imaFolder)){
		finalUrl = newPath + englishPDFFolder + imaPDF;
	}
	else if((urlString).includes(englishLangCodeNum) && (urlString).includes(icgFolder)){
		finalUrl = newPath + englishPDFFolder + icgPDF;
	}
	else if((urlString).includes(englishLangCodeAlpha) && (urlString).includes(icgFolder)){
		finalUrl = newPath + englishPDFFolder + icgPDF;
	}
	else if((urlString).includes(englishLangCodeNum) && (urlString).includes(intFolder)){
		finalUrl = newPath + englishPDFFolder + intPDF;
	}
	else if((urlString).includes(englishLangCodeNum) && (urlString).includes(mdxFolder)){
		finalUrl = newPath + englishPDFFolder + mdxPDF;
	}
	else if((urlString).includes(englishLangCodeNum) && (urlString).includes(moaFolder)){
		finalUrl = newPath + englishPDFFolder + moaPDF;
	}
	else if((urlString).includes(englishLangCodeNum) && (urlString).includes(mobFolder)){
		finalUrl = newPath + englishPDFFolder + mobPDF;
	}
	else if((urlString).includes(englishLangCodeAlpha) && (urlString).includes(paFolder)){
		finalUrl = newPath + englishPDFFolder + paPDF;
	}
	else if((urlString).includes(englishLangCodeNum) && (urlString).includes(pdgFolder)){
		finalUrl = newPath + englishPDFFolder + pdgPDF;
	}
	else if((urlString).includes(englishLangCodeNum) && (urlString).includes(upgFolder)){
		finalUrl = newPath + englishPDFFolder + upgPDF;
	}
	else if((urlString).includes(englishLangCodeAlpha) && (urlString).includes(upgFolder)){
		finalUrl = newPath + englishPDFFolder + upgPDF;
	}	
	else if((urlString).includes(englishLangCodeNum) && (urlString).includes(wksFolder)){
		finalUrl = newPath + englishPDFFolder + wksPDF;
	}
	else if((urlString).includes(englishLangCodeNum) && (urlString).includes(readmeFolder)){
		finalUrl = newPath + englishPDFFolder + readmePDF;
	}
	else if((urlString).includes(englishLangCodeAlpha) && (urlString).includes(readmeFolder)){
		finalUrl = newPath + englishPDFFolder + readmePDF;
	}
	/*
		Portuguese
	*/
	else if ((urlString).includes(portugueseLangCodeNum) && (urlString).includes(dugFolder)){
		finalUrl = newPath + portuguesePDFFolder + dugPDF;
	}
	else if ((urlString).includes(portugueseLangCodeAlpha) && (urlString).includes(paFolder)){
		finalUrl = newPath + portuguesePDFFolder + paPDF;
	}
	else if ((urlString).includes(portugueseLangCodeNum) && (urlString).includes(wksFolder)){
		finalUrl = newPath + portuguesePDFFolder + wksPDF;
	}
	else if((urlString).includes(portugueseLangCodeNum) && (urlString).includes(readmeFolder)){
		finalUrl = newPath + portuguesePDFFolder + readmePDF;
	}
	else if((urlString).includes(portugueseLangCodeAlpha) && (urlString).includes(readmeFolder)){
		finalUrl = newPath + portuguesePDFFolder + readmePDF;
	}
	/*
		German
	*/
	else if ((urlString).includes(germanLangCodeAlpha) && (urlString).includes(paFolder)){
		finalUrl = newPath + germanPDFFolder + paPDF;
	}
	else if((urlString).includes(germanLangCodeNum) && (urlString).includes(readmeFolder)){
		finalUrl = newPath + germanPDFFolder + readmePDF;
	}
	else if((urlString).includes(germanLangCodeAlpha) && (urlString).includes(readmeFolder)){
		finalUrl = newPath + germanPDFFolder + readmePDF;
	}
	/*
		Spanish
	*/
	else if ((urlString).includes(spanishLangCodeAlpha) && (urlString).includes(paFolder)){
		finalUrl = newPath + spanishPDFFolder + paPDF;
	}
	else if((urlString).includes(spanishLangCodeNum) && (urlString).includes(readmeFolder)){
		finalUrl = newPath + spanishPDFFolder + readmePDF;
	}
	else if((urlString).includes(spanishLangCodeAlpha) && (urlString).includes(readmeFolder)){
		finalUrl = newPath + spanishPDFFolder + readmePDF;
	}
	/*
		Italian
	*/
	else if ((urlString).includes(italianLangCodeAlpha) && (urlString).includes(paFolder)){
		finalUrl = newPath + italianPDFFolder + paPDF;
	}
	else if((urlString).includes(italianLangCodeNum) && (urlString).includes(readmeFolder)){
		finalUrl = newPath + italianPDFFolder + readmePDF;
	}
	else if((urlString).includes(italianLangCodeAlpha) && (urlString).includes(readmeFolder)){
		finalUrl = newPath + italianPDFFolder + readmePDF;
	}
	/*
		Japanese
	*/
	else if ((urlString).includes(japaneseLangCodeAlpha) && (urlString).includes(paFolder)){
		finalUrl = newPath + japanesePDFFolder + paPDF;
	}
	else if((urlString).includes(japaneseLangCodeNum) && (urlString).includes(readmeFolder)){
		finalUrl = newPath + japanesePDFFolder + readmePDF;
	}
	else if((urlString).includes(japaneseLangCodeAlpha) && (urlString).includes(readmeFolder)){
		finalUrl = newPath + japanesePDFFolder + readmePDF;
	}
	else if ((urlString).includes(japaneseLangCodeNum) && (urlString).includes(icgFolder)){
		finalUrl = newPath + japanesePDFFolder + icgPDF;
	}
	else if ((urlString).includes(japaneseLangCodeAlpha) && (urlString).includes(icgFolder)){
		finalUrl = newPath + japanesePDFFolder + icgPDF;
	}
	else if ((urlString).includes(japaneseLangCodeNum) && (urlString).includes(upgFolder)){
		finalUrl = newPath + japanesePDFFolder + upgPDF;
	}
	else if ((urlString).includes(japaneseLangCodeAlpha) && (urlString).includes(upgFolder)){
		finalUrl = newPath + japanesePDFFolder + upgPDF;
	}
	/*
		Korean
	*/
	else if ((urlString).includes(koreanLangCodeAlpha) && (urlString).includes(paFolder)){
		finalUrl = newPath + koreanPDFFolder + paPDF;
	}
	else if ((urlString).includes(koreanLangCodeNum) && (urlString).includes(upgFolder)){
		finalUrl = newPath + koreanPDFFolder + upgPDF;
	}
	else if ((urlString).includes(koreanLangCodeAlpha) && (urlString).includes(upgFolder)){
		finalUrl = newPath + koreanPDFFolder + upgPDF;
	}
	else if((urlString).includes(koreanLangCodeNum) && (urlString).includes(readmeFolder)){
		finalUrl = newPath + koreanPDFFolder + readmePDF;
	}
	else if((urlString).includes(koreanLangCodeAlpha) && (urlString).includes(readmeFolder)){
		finalUrl = newPath + koreanPDFFolder + readmePDF;
	}
	/*
		Chinese
	*/
	else if ((urlString).includes(chineseLangCodeAlpha) && (urlString).includes(paFolder)){
		finalUrl = newPath + chinesePDFFolder + paPDF;
	}
	else if ((urlString).includes(chineseLangCodeNum) && (urlString).includes(upgFolder)){
		finalUrl = newPath + chinesePDFFolder + upgPDF;
	}
	else if ((urlString).includes(chineseLangCodeAlpha) && (urlString).includes(upgFolder)){
		finalUrl = newPath + chinesePDFFolder + upgPDF;
	}
	else if((urlString).includes(chineseLangCodeNum) && (urlString).includes(readmeFolder)){
		finalUrl = newPath + chinesePDFFolder + readmePDF;
	}
	else if((urlString).includes(chineseLangCodeAlpha) && (urlString).includes(readmeFolder)){
		finalUrl = newPath + chinesePDFFolder + readmePDF;
	}
	/*
		French
	*/
	else if ((urlString).includes(frenchLangCodeAlpha) && (urlString).includes(paFolder)){
		finalUrl = newPath + frenchLangCodeNum + paPDF;
	}
	else if ((urlString).includes(frenchLangCodeNum) && (urlString).includes(upgFolder)){
		finalUrl = newPath + frenchLangCodeNum + upgPDF;
	}
	else if((urlString).includes(frenchLangCodeNum) && (urlString).includes(readmeFolder)){
		finalUrl = newPath + frenchPDFFolder + readmePDF;
	}
	else if((urlString).includes(frenchLangCodeAlpha) && (urlString).includes(readmeFolder)){
		finalUrl = newPath + frenchPDFFolder + readmePDF;
	}
	return finalUrl;
}//end buildUrl function