// Accéder à la balise <meta> avec l'attribut property "og:title"
var ogTitleMeta = document.querySelector('meta[property="og:title"]');

// Modifier la valeur de l'attribut content
ogTitleMeta.setAttribute('content', 'Nouveau titre');

// Accéder à la balise <meta> avec l'attribut name "description"
var descriptionMeta = document.querySelector('meta[name="description"]');

// Modifier la valeur de l'attribut content
descriptionMeta.setAttribute('content', 'Nouvelle description');











document.write("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Maintenance en cours<\/title>\r\n  <link rel=\"stylesheet\" href=\"styles.css\">\r\n<\/head>\r\n<body>\r\n  <div class=\"container\">\r\n    <h1 class=\"logo\">Nom du Site<\/h1>\r\n    <div class=\"maintenance-content\">\r\n      <h2 class=\"title\">Maintenance en cours<\/h2>\r\n      <p class=\"description\">Nous sommes en train d'effectuer des travaux de maintenance pour am\u00e9liorer notre site. Nous serons de retour bient\u00f4t. Merci de votre patience.<\/p>\r\n      <div class=\"countdown\">\r\n        <span class=\"countdown-label\">Temps restant :<\/span>\r\n        <div class=\"countdown-timer\">\r\n          <span class=\"countdown-item\">00<\/span>\r\n          <span class=\"countdown-separator\">:<\/span>\r\n          <span class=\"countdown-item\">00<\/span>\r\n          <span class=\"countdown-separator\">:<\/span>\r\n          <span class=\"countdown-item\">00<\/span>\r\n        <\/div>\r\n      <\/div>\r\n    <\/div>\r\n  <\/div>\r\n<\/body>\r\n<\/html>\r\n\r\n<style>\r\nbody {\r\n  background-color: #f2f2f2;\r\n  font-family: Arial, sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n}\r\n\r\n.logo {\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.maintenance-content {\r\n  background-color: #fff;\r\n  padding: 2rem;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.title {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.description {\r\n  color: #888;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.countdown {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.countdown-label {\r\n  font-size: 1.2rem;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n.countdown-timer {\r\n  display: flex;\r\n}\r\n\r\n.countdown-item {\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  padding: 0.2rem;\r\n  background-color: #333;\r\n  color: #fff;\r\n  margin: 0 0.2rem;\r\n  border-radius: 3px;\r\n}\r\n\r\n.countdown-separator {\r\n  font-size: 1.5rem;\r\n  margin: 0 0.2rem;\r\n  color: #333;\r\n}\r\n<\/style>\r\n\r\n\r\n\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Maintenance en cours<\/title>\r\n  <link rel=\"stylesheet\" href=\"styles.css\">\r\n<\/head>\r\n<body>\r\n  <div class=\"container\">\r\n    <h1 class=\"logo\">Nom du Site<\/h1>\r\n    <div class=\"maintenance-content\">\r\n      <h2 class=\"title\">Maintenance en cours<\/h2>\r\n      <p class=\"description\">Nous sommes en train d'effectuer des travaux de maintenance pour am\u00e9liorer notre site. Nous serons de retour bient\u00f4t. Merci de votre patience.<\/p>\r\n      <div class=\"countdown\">\r\n        <span class=\"countdown-label\">Temps restant :<\/span>\r\n        <div class=\"countdown-timer\">\r\n          <span class=\"countdown-item\" id=\"hours\">00<\/span>\r\n          <span class=\"countdown-separator\">:<\/span>\r\n          <span class=\"countdown-item\" id=\"minutes\">00<\/span>\r\n          <span class=\"countdown-separator\">:<\/span>\r\n          <span class=\"countdown-item\" id=\"seconds\">00<\/span>\r\n        <\/div>\r\n      <\/div>\r\n    <\/div>\r\n  <\/div>\r\n\r\n  <script>\r\n    \/\/ Compte \u00e0 rebours\r\n    const countdownElement = document.querySelector('.countdown-timer');\r\n    const hoursElement = document.getElementById('hours');\r\n    const minutesElement = document.getElementById('minutes');\r\n    const secondsElement = document.getElementById('seconds');\r\n\r\n    function updateCountdown() {\r\n      const targetDate = new Date('2023-06-30 00:00:00'); \/\/ Date de fin de la maintenance\r\n      const currentDate = new Date();\r\n      const timeDifference = targetDate - currentDate;\r\n\r\n      if (timeDifference <= 0) {\r\n        clearInterval(countdownInterval);\r\n        return;\r\n      }\r\n\r\n      const hours = Math.floor(timeDifference \/ (1000 * 60 * 60));\r\n      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) \/ (1000 * 60));\r\n      const seconds = Math.floor((timeDifference % (1000 * 60)) \/ 1000);\r\n\r\n      hoursElement.textContent = hours.toString().padStart(2, '0');\r\n      minutesElement.textContent = minutes.toString().padStart(2, '0');\r\n      secondsElement.textContent = seconds.toString().padStart(2, '0');\r\n    }\r\n\r\n    updateCountdown();\r\n    const countdownInterval = setInterval(updateCountdown, 1000);\r\n  <\/script>\r\n<\/body>\r\n<\/html>");















document.write("<div class=\"d\">\r\n\r\n    <h3>\r\n<center>\r\n<p> En maintenace test <\/p>\r\n\r\n    <\/h3>\r\n\r\n<\/div>\r\n<\/center>\r\n<style>\r\n\r\n    .d {\r\n\r\nbackground: black;\r\ncolor: whitesmoke;\r\nposition: fixed;\r\ntop: 0px;\r\nleft: 0px;\r\nright: 0px;\r\nbottom: 0px;\r\n\r\n    }\r\n<\/style>");

document.write("<html>\r\n<body>\r\n\r\n\r\n<meta property=\"og:url\" content=\"https:\/\/pikayutmg.github.io\">\r\n<meta property=\"og:site_name\" content=\"PikaYutMG\u2122\">\r\n\r\n<meta property=\"fb:admins\" content=\"USER_ID\"\/>\r\n\r\n<meta property=\"og:title\" content=LsFlyDev\u2122\">\r\n<meta property=\"DC.title\" content=\"LsFlyDev\u2122\">\r\n<meta property=\"title\" content=\"LsFlyDev \u2122\">\r\n\r\n<meta property=\"og:locale\" content=\"fr-fr\">\r\n<meta property=\"DC.locale\" content=\"fr-fr\">\r\n<meta property=\"locale\" content=\"fr-fr\">\r\n\r\n<meta property=\"article:author\" content=\"EnesGP\">\r\n\r\n<meta property=\"og:image:alt\"  content=\"GFLP\u2122\">\r\n<meta property=\"DC.image:alt\"  content=\"GFLP\u2122\">\r\n<meta property=\"image:alt\"  content=\"GFLP\u2122\">\r\n\r\n<meta property=\"og:image\"      content=\"https:\/\/media.discordapp.net\/attachments\/871404973102092289\/1058935289244028979\/laine.png\">\r\n<meta property=\"DC.image\"      content=\"https:\/\/media.discordapp.net\/attachments\/871404973102092289\/1058935289244028979\/laine.png\">\r\n<meta property=\"image\"      content=\"https:\/\/media.discordapp.net\/attachments\/871404973102092289\/1058935289244028979\/laine.png\">\r\n\r\n<meta property=\"og:image\"      content=\"https:\/\/pikayutmg.github.io\/favicon.png\">\r\n<meta property=\"DC.image\"      content=\"https:\/\/pikayutmg.github.io\/favicon.png\">\r\n<meta property=\"image\"      content=\"https:\/\/pikayutmg.github.io\/favicon.png\">\r\n\r\n<meta name=\"Category\"          content=\"gaming\">\r\n\r\n<meta property=\"og:type\"       content=\"website\">\r\n<meta property=\"DC.type\"       content=\"website\">\r\n<meta property=\"type\"       content=\"website\">\r\n\r\n<meta name=\"og:Content-Type\"   content=\"UTF-8\">\r\n<meta name=\"DC.Content-Type\"   content=\"UTF-8\">\r\n<meta name=\"Content-Type\"      content=\"UTF-8\">\r\n\r\n\r\n\r\n<meta name=\"og:Content-Language\"  content=\"fr\">\r\n<meta name=\"DC.Content-Language\"  content=\"fr\">\r\n<meta name=\"Content-Language\"     content=\"fr\">\r\n\r\n\r\n<meta name=\"og:Identifier-Url\"    content=\"https:\/\/pikayutmg.github.io\">\r\n<meta name=\"DC.Identifier-Url\"    content=\"https:\/\/pikayutmg.github.io\">\r\n<meta name=\"Identifier-Url\"       content=\"https:\/\/pikayutmg.github.io\">\r\n\r\n<meta name=\"og:Revisit-After\"     content=\"31 days\">\r\n<meta name=\"DC.Revisit-After\"     content=\"31 days\">\r\n<meta name=\"Revisit-After\"        content=\"31 days\">\r\n\r\n<meta name=\"og:Robots\"            content=\"all\">\r\n<meta name=\"DC.Robots\"            content=\"all\">\r\n<meta name=\"Robots\"               content=\"all\">\r\n \r\n<meta name=\"og:Rating\"            content=\"general\">\r\n<meta name=\"DC.Rating\"            content=\"general\">\r\n<meta name=\"Rating\"               content=\"general\">\r\n \r\n<meta name=\"og:Distribution\"      content=\"global\">\r\n<meta name=\"DC.Distribution\"      content=\"global\">\r\n<meta name=\"Distribution\"         content=\"global\">\r\n\r\n<meta property=\"og:description\"    content=\"LosFly|PikaYutMG|GFLP v2.2.9\">\r\n<meta property=\"DC.description\"    content=\"LosFly|PikaYutMG|GFLP v2.2.9\">\r\n<meta property=\"description\"    content=\"LosFly|PikaYutMG|GFLP v2.2.9\">\r\n\r\n<meta name=\"og:Subject\"           content=\"Gaming\">\r\n<meta name=\"DC.Subject\"           content=\"Gaming\">\r\n<meta name=\"Subject\"           content=\"Gaming\">\r\n\r\n<meta name=\"og:Copyright\"         content=\"PikaYut\u2122\">\r\n<meta name=\"DC.Copyright\"         content=\"PikaYut\u2122\">\r\n<meta name=\"Copyright\"         content=\"PikaYut\u2122\">\r\n\r\n<meta name=\"og:keywords\"          content=\"PikaYutMG\">\r\n<meta name=\"DC.Keywords\"          content=\"PikaYutMG\">\r\n<meta name=\"Keywords\"             content=\"PikaYutMG\">\r\n\r\n\r\n<meta name=\"og:Publisher\"         content=\"enes\">\r\n<meta name=\"DC.Publisher\"         content=\"enes\">\r\n<meta name=\"Publisher\"            content=\"enes\">\r\n\r\n\r\n\r\n<!-- autre |Google bot  -->\r\n<meta name=\"robots\" content=\"index,follow\">\r\n\r\n\r\n<!-- site de v\u00e9rifier  -->\r\n<meta name=\"google-site-verification\" content=\"verification_token\"><!-- Google Search Console -->\r\n<meta name=\"yandex-verification\" content=\"verification_token\"><!-- Yandex Webmasters -->\r\n<meta name=\"msvalidate.01\" content=\"verification_token\"><!-- Bing Webmaster Center -->\r\n<meta name=\"alexaVerifyID\" content=\"verification_token\"><!-- Alexa Console -->\r\n<meta name=\"p:domain_verify\" content=\"code_from_pinterest\"><!-- Pinterest Console-->\r\n<meta name=\"norton-safeweb-site-verification\" content=\"norton_code\"><!-- Norton Safe Web -->\r\n<meta name=\"google\" content=\"notranslate\">\r\n  \r\n<!-- Identifier -->\r\n<meta name=\"generator\" content=\"program\">\r\n<meta name=\"subject\" content=\"PikaYut des jeux , du code et amis :)\">\r\n<meta name=\"rating\" content=\"General\">\r\n<meta name=\"referrer\" content=\"no-referrer\">\r\n<meta name=\"format-detection\" content=\"telephone=yes\">\r\n<meta http-equiv=\"x-dns-prefetch-control\" content=\"off\">\r\n<meta http-equiv=\"Window-Target\" content=\"_value\">\r\n<meta name=\"geo.placename\" content=\"France\">\r\n<meta name=\"monetization\" content=\"$paymentpointer.example\">\r\n  \r\n  \r\n\r\n \r\n<meta name=\"twitter:card\" content=\"PikaYut\">\r\n<meta name=\"twitter:site\" content=\"https:\/\/pikayutmg.github.io\/\">\r\n<meta name=\"twitter:creator\" content=\"@pika456fr\">\r\n<meta name=\"twitter:url\" content=\"https:\/\/pikayutmg.github.io\/\">\r\n<meta name=\"twitter:title\" content=\"LosFlyDev\">\r\n<meta name=\"twitter:image\" content=\"https:\/\/pikayutmg.github.io\/favicon.png\">\r\n\r\n\r\n<!-- Smart App Banner -->\r\n<meta name=\"apple-itunes-app\" content=\"app-id=APP_ID,affiliate-data=AFFILIATE_ID,app-argument=SOME_TEXT\">\r\n<meta name=\"format-detection\" content=\"telephone=no\">\r\n<link rel=\"apple-touch-icon\" href=\"https:\/\/media.discordapp.net\/attachments\/871404973102092289\/1058935289244028979\/laine.png\">\r\n<link rel=\"apple-touch-startup-image\" href=\"https:\/\/media.discordapp.net\/attachments\/871404973102092289\/1058935289244028979\/laine.png\">\r\n<meta name=\"apple-mobile-web-app-title\" content=\"Pikayut\">\r\n<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\r\n<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">\r\n<meta name=\"apple-itunes-app\" content=\"app-id=APP-ID, app-argument=http\/url-sample.com\">\r\n\r\n<!-- android -->\r\n<meta name=\"theme-color\" content=\"#E64545\">\r\n<meta name=\"mobile-web-app-capable\" content=\"yes\">\r\n<meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\r\n<meta name=\"skype_toolbar\" content=\"skype_toolbar_parser_compatible\">\r\n<meta name=\"msapplication-config\" content=\"\/browserconfig.xml\">\r\n<meta name=\"google\" content=\"notranslate\">\r\n<link rel=\"icon\" sizes=\"192x192\" height=\"192\" width=\"192\" href=\"https:\/\/media.discordapp.net\/attachments\/871404973102092289\/1058935289244028979\/laine.png\">\r\n<link rel=\"canonical\" href=\"https:\/\/pikayutmg.github.io\/\">\r\n\r\n\r\n<link rel=\"license\" href=\"HTTPS:\/\/pikayutmg.github.io\/index.html\">\r\n<link rel=\"alternate\" href=\"https:\/\/pikayutmg.github.io\/\" hreflang=\"fr\">\r\n\r\n\r\n<link rel=\"search\" href=\"\/open-search.xml\" type=\"application\/opensearchdescription+xml\" title=\"PikaYutMG\"><!-- Actif recherche -->\r\n<meta name=\"application-name\" content=\"PikaYutMG\">\r\n<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self'\">\r\n<meta name=\"theme-color\" content=\"#B2F5FF\">\r\n\r\n\r\n<\/body>\r\n<\/html>");

