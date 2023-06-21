document.write("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <style>\r\n    \/* Styles pour le menu contextuel *\/\r\n    .context-menu {\r\n      display: none;\r\n      position: absolute;\r\n      background-color: #f1f1f1;\r\n      min-width: 120px;\r\n      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n      z-index: 1;\r\n      border-top-right-radius: 20px;\r\n      border-top-left-radius: 20px;\r\n      border-bottom-right-radius: 20px;\r\n      border-bottom-left-radius: 20px;\r\n    }\r\n    \r\n    .context-menu a {\r\n      color: black;\r\n      padding: 12px 16px;\r\n      text-decoration: none;\r\n      display: block;\r\n      border-top-right-radius: 50px;\r\n      border-top-left-radius: 50px;\r\n      border-bottom-right-radius: 50px;\r\n      border-bottom-left-radius: 50px;\r\n\r\n    }\r\n\r\n\r\n    .context-menu a:hover {\r\n      background-color: #ddd;\r\n\r\n    }\r\n  <\/style>\r\n<\/head>\r\n<body>\r\n  <!-- Contenu principal de votre site -->\r\n  <h1>\u26a0\ufe0fEn developpement\u26a0\ufe0f<\/h1>\r\n  \r\n  <!-- Menu contextuel -->\r\n  <div id=\"myContextMenu\" class=\"context-menu\">\r\n\r\n<a>Menue Contextuels|LSP<\/a>\r\n    <a href=\"https:\/\/pikayutmg.github.io\/\">LosFly<\/a>\r\n    <a href=\"https:\/\/pikayutmg.github.io\/pika\/\">PikaYutMG<\/a>\r\n    <a><center>- - - - - <\/center><\/a>\r\n    <a href=\"#\" id=\"copy\">Copier<\/a>\r\n    <a href=\"#\" id=\"paste\">Coller<\/a>\r\n    <a href=\"#\" id=\"cut\">Couper<\/a>\r\n    <a>GFLP - LSP|Groups<\/a>\r\n  <\/div>\r\n\r\n  <script>\r\n    \/\/ Script pour afficher le menu contextuel\r\n    window.addEventListener(\"contextmenu\", function(e) {\r\n      e.preventDefault();\r\n      var contextMenu = document.getElementById(\"myContextMenu\");\r\n      contextMenu.style.display = \"block\";\r\n      contextMenu.style.left = e.pageX + \"px\";\r\n      contextMenu.style.top = e.pageY + \"px\";\r\n    });\r\n\r\n    \/\/ Fonctions pour les options du menu contextuel\r\n    document.getElementById(\"copy\").addEventListener(\"click\", function() {\r\n      var selectedText = window.getSelection().toString();\r\n      if (selectedText !== \"\") {\r\n        copyToClipboard(selectedText);\r\n      }\r\n    });\r\n\r\n    document.getElementById(\"paste\").addEventListener(\"click\", function() {\r\n      pasteFromClipboard();\r\n    });\r\n\r\n    document.getElementById(\"cut\").addEventListener(\"click\", function() {\r\n      var selectedText = window.getSelection().toString();\r\n      if (selectedText !== \"\") {\r\n        copyToClipboard(selectedText);\r\n        \/\/ Ajoutez ici votre code pour supprimer le texte s\u00e9lectionn\u00e9\r\n      }\r\n    });\r\n\r\n    \/\/ Fonction pour copier le texte dans le presse-papiers\r\n    function copyToClipboard(text) {\r\n      navigator.clipboard.writeText(text).then(function() {\r\n        console.log(\"Texte copi\u00e9 : \" + text);\r\n      }, function(err) {\r\n        console.error(\"Erreur lors de la copie du texte : \", err);\r\n      });\r\n    }\r\n\r\n    \/\/ Fonction pour coller le texte depuis le presse-papiers\r\n    function pasteFromClipboard() {\r\n      navigator.clipboard.readText().then(function(text) {\r\n        console.log(\"Texte coll\u00e9 : \" + text);\r\n        \/\/ Ajoutez ici votre code pour ins\u00e9rer le texte dans votre page\r\n      }, function(err) {\r\n        console.error(\"Erreur lors du collage du texte : \", err);\r\n      });\r\n    }\r\n\r\n    \/\/ Fermer le menu contextuel en cliquant en dehors de celui-ci\r\n    window.addEventListener(\"click\", function() {\r\n      var contextMenu = document.getElementById(\"myContextMenu\");\r\n      contextMenu.style.display = \"none\";\r\n    });\r\n  <\/script>\r\n<\/body>\r\n<\/html>");


document.write("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <link rel=\"stylesheet\" href=\"https:\/\/stackpath.bootstrapcdn.com\/bootstrap\/4.5.0\/css\/bootstrap.min.css\">\r\n  \r\n \r\n \r\n\r\n  <style>\r\n    \/* Styles pour le menu contextuel *\/\r\n    .context-menu {\r\n      display: none;\r\n      position: absolute;\r\n      background-color: #f1f1f1;\r\n      min-width: 120px;\r\n      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n      z-index: 1;\r\n      border-top-right-radius: 20px;\r\n      border-top-left-radius: 20px;\r\n      border-bottom-right-radius: 20px;\r\n      border-bottom-left-radius: 20px;\r\n    }\r\n    \r\n    .context-menu a {\r\n      color: black;\r\n      padding: 12px 16px;\r\n      text-decoration: none;\r\n      display: block;\r\n      border-top-right-radius: 50px;\r\n      border-top-left-radius: 50px;\r\n      border-bottom-right-radius: 50px;\r\n      border-bottom-left-radius: 50px;\r\n\r\n    }\r\n\r\n\r\n    .context-menu a:hover {\r\n      background-color: #ddd;\r\n background: linear-gradient(to right, #0000ff, #000000);\r\n\r\n    }\r\n  <\/style>\r\n<\/head>\r\n<body>\r\n  <!-- Contenu principal de votre site -->\r\n  <h1>\u26a0\ufe0fEn developpement\u26a0\ufe0f<\/h1>\r\n  <p>Certains bug son present ! .<\/p>\r\n  \r\n  <!-- Menu contextuel -->\r\n  <div id=\"myContextMenu\" class=\"context-menu\">\r\n\r\n<a>Menue Contextuels|LSP<\/a>\r\n    <a href=\"https:\/\/pikayutmg.github.io\/\">LosFly<\/a>\r\n    <a href=\"https:\/\/pikayutmg.github.io\/pika\/\">PikaYutMG<\/a>\r\n    <a><center><hr><\/center><\/a>\r\n    <a href=\"#\" id=\"copy\">Copier<\/a>\r\n    <a href=\"#\" id=\"paste\">Coller<\/a>\r\n    <a href=\"#\" id=\"cut\">Couper<\/a>\r\n    <a>GFLP - LSP|Groups<\/a>\r\n  <\/div>\r\n\r\n  <script>\r\n    \/\/ Script pour afficher le menu contextuel\r\n    window.addEventListener(\"contextmenu\", function(e) {\r\n      e.preventDefault();\r\n      var contextMenu = document.getElementById(\"myContextMenu\");\r\n      contextMenu.style.display = \"block\";\r\n      contextMenu.style.left = e.pageX + \"px\";\r\n      contextMenu.style.top = e.pageY + \"px\";\r\n    });\r\n\r\n    \/\/ Fonctions pour les options du menu contextuel\r\n    document.getElementById(\"copy\").addEventListener(\"click\", function() {\r\n      var selectedText = window.getSelection().toString();\r\n      if (selectedText !== \"\") {\r\n        copyToClipboard(selectedText);\r\n      }\r\n    });\r\n\r\n    document.getElementById(\"paste\").addEventListener(\"click\", function() {\r\n      pasteFromClipboard();\r\n    });\r\n\r\n    document.getElementById(\"cut\").addEventListener(\"click\", function() {\r\n      var selectedText = window.getSelection().toString();\r\n      if (selectedText !== \"\") {\r\n        copyToClipboard(selectedText);\r\n        \/\/ Ajoutez ici votre code pour supprimer le texte s\u00e9lectionn\u00e9\r\n      }\r\n    });\r\n\r\n    \/\/ Fonction pour copier le texte dans le presse-papiers\r\n    function copyToClipboard(text) {\r\n      navigator.clipboard.writeText(text).then(function() {\r\n        console.log(\"Texte copi\u00e9 : \" + text);\r\n      }, function(err) {\r\n        console.error(\"Erreur lors de la copie du texte : \", err);\r\n      });\r\n    }\r\n\r\n    \/\/ Fonction pour coller le texte depuis le presse-papiers\r\n    function pasteFromClipboard() {\r\n      navigator.clipboard.readText().then(function(text) {\r\n        console.log(\"Texte coll\u00e9 : \" + text);\r\n        \/\/ Ajoutez ici votre code pour ins\u00e9rer le texte dans votre page\r\n      }, function(err) {\r\n        console.error(\"Erreur lors du collage du texte : \", err);\r\n      });\r\n    }\r\n\r\n    \/\/ Fermer le menu contextuel en cliquant en dehors de celui-ci\r\n    window.addEventListener(\"click\", function() {\r\n      var contextMenu = document.getElementById(\"myContextMenu\");\r\n      contextMenu.style.display = \"none\";\r\n    });\r\n  <\/script>\r\n\r\n<script src=\"https:\/\/code.jquery.com\/jquery-3.5.1.slim.min.js\"><\/script>\r\n  <script src=\"https:\/\/cdn.jsdelivr.net\/npm\/@popperjs\/core@2.5.4\/dist\/umd\/popper.min.js\"><\/script>\r\n  <script src=\"https:\/\/stackpath.bootstrapcdn.com\/bootstrap\/4.5.0\/js\/bootstrap.min.js\"><\/script>\r\n\r\n\r\n\r\n<\/body>\r\n<\/html>");
