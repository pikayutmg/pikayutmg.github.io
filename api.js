// Création de la balise div
var div = document.createElement("div");
div.className = "d";

// Création de la balise h3
var h3 = document.createElement("h3");
h3.innerHTML = "<center><p>En maintenance prévue vers les 20heures | 21 heures</p></center>";

// Ajout du h3 à la div
div.appendChild(h3);

// Ajout de la div au body du document
document.body.appendChild(div);

// Modification de la balise meta og:title
var ogTitleMeta = document.querySelector('meta[property="og:title"]');
ogTitleMeta.setAttribute('content', 'PikaYutMG FR');

// Modification de la balise meta description
var descriptionMeta = document.querySelector('meta[name="description"]');
descriptionMeta.setAttribute('content', 'MultiGaming FR');

// Création de la balise doctype
var doctype = document.createElement("DOCTYPE");
doctype.innerHTML = "<!DOCTYPE html>";

// Création de la balise html
var html = document.createElement("html");
html.lang = "en";

// Création de la balise head
var head = document.createElement("head");

// Création de la balise meta charset
var metaCharset = document.createElement("meta");
metaCharset.setAttribute("charset", "UTF-8");

// Création de la balise meta viewport
var metaViewport = document.createElement("meta");
metaViewport.setAttribute("name", "viewport");
metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0");

// Création de la balise title
var title = document.createElement("title");
title.innerHTML = "Maintenance en cours";

// Création de la balise link stylesheet
var linkStylesheet = document.createElement("link");
linkStylesheet.setAttribute("rel", "stylesheet");
linkStylesheet.setAttribute("href", "./css/sstyle.css");

// Ajout des balises meta, title et link à la balise head
head.appendChild(metaCharset);
head.appendChild(metaViewport);
head.appendChild(title);
head.appendChild(linkStylesheet);

// Création de la balise body
var body = document.createElement("body");

// Création de la balise container
var container = document.createElement("div");
container.className = "container";

// Création de la balise h1
var h1 = document.createElement("h1");
h1.className = "logo";
h1.innerHTML = "LsFly";

// Création de la balise div maintenance-content
var maintenanceContent = document.createElement("div");
maintenanceContent.className = "maintenance-content";

// Création de la balise h2
var h2 = document.createElement("h2");
h2.className = "title";
h2.innerHTML = "Maintenance en cours";

// Création de la balise p description
var pDescription = document.createElement("p");
pDescription.className = "description";
pDescription.innerHTML = "Nous sommes en train d'effectuer des travaux de maintenance pour améliorer notre site. Nous serons de retour bientôt. Merci de votre patience.";

// Création de la balise div countdown
var divCountdown = document.createElement("div");
divCountdown.className = "countdown";

// Création de la balise span countdown-label
var spanCountdownLabel = document.createElement("span");
spanCountdownLabel.className = "countdown-label";
spanCountdownLabel.innerHTML = "Temps restant :";

// Création de la balise div countdown-timer
var divCountdownTimer = document.createElement("div");
divCountdownTimer.className = "countdown-timer";

// Création des balises span countdown-item pour les heures.

