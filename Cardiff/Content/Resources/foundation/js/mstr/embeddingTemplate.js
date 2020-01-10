/*
Instructions for this file:
  This template is for embedding a dossier from the demo site into a Flare page.
  Once you have made the changes to the file indicated by the comments,
  save a copy of this file as **yourDossierNameHere**.js and place it in the
  Content/Resources/js/ folder of your Flare project.

Instructions for Flare topic:
  In the Flare topic where you want to embed the dossier, copy/paste the
  following code where you want the dossier to appear:

  <script src="https://demo.microstrategy.com/MicroStrategyLibrary/javascript/embeddinglib.js"></script>
  <div id="dossierContainer1" style="width: 1000px; height: 900px;"></div>
  <script src="https://demo.microstrategy.com/MicroStrategyLibrary/javascript/embeddinglib.js"></script>
  <script src="Resources/js/***yourDossierNameHere***.js" type="text/javascript"></script>

  make sure to replace the name of your javascript file in last script call.
*/




//START CONFIG PARAMETERS-------------------------------------------------------------------------

//Configure Dossier url
/*
To find your Dossier configuration values, open your dossier in Library Web
and look at the url.
[**********************baseRestURL***************************]/app/[***********projectID*************]/[************dossierID***********]/
[https://mobiledossier.microstrategy.com/MicroStrategyLibrary]/app/[EC70648611E7A2F962E90080EFD58751]/[E78B61F411E8D873343A0080EF25B903]/**page # ids - ignore**
*/
baseRestURL = "https://mobiledossier.microstrategy.com/MicroStrategyLibrary";
projectID = ""; //place the project id for the dossier here between the quotes
dossierID = "";//place the dossier id for the dossier here between the quotes
//enable the TOC, Filter, Account, etc navigation. If you have a one page dossier you can set to false.
var nav = {
    enabled: true
  }

//Stands for Cross Origin Requests. If this sample is deployed on the different server than MicroStrategyLibrary, set CORS to true.
CORS = true;

//END CONFIG PARAMETERS -------------------------------------------------------------------------

//Form PostData for login REST request
var projectUrl = baseRestURL + '/app/' + projectID;
var dossierUrl = projectUrl + '/' + dossierID;
console.log("DossierURL: " + dossierUrl);

//populate div with dossier
microstrategy.dossier.create({
  placeholder: document.getElementById("dossierContainer1"),
  url: dossierUrl,
  enableResponsive: true,
  navigationBar: nav
}).then(function(dossier) {

  var navDiv = document.getElementById("nav1");
  createChapterPageNav(dossier, navDiv);
});

function getXHRRequestPromise(url, body, method, contentType, desiredHeader) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.withCredentials=true;
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader("Accept", "application/json");

    //Setting CORS to true will work even if the sample and MicroStrategy Library are on the same server
    if(CORS){
      xhr.withCredentials = true;
    }
    xhr.send(JSON.stringify(body));
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 2) {
        resolve(xhr.getResponseHeader(desiredHeader));
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
  });
};