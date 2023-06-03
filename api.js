document.addEventListener("DOMContentLoaded", function() {
  var currentDate = new Date();
  var maintenanceEndDate = new Date("2024-01-01T00:00:00");

  function updateCountdown() {
    var timeDiff = maintenanceEndDate.getTime() - currentDate.getTime();

    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    var countdownTimer = document.querySelector(".countdown-timer");
    countdownTimer.innerHTML = `
      <div class="countdown-item">
        <span>${days}</span>
        <span class="countdown-label">Jours</span>
      </div>
      <div class="countdown-separator">:</div>
      <div class="countdown-item">
        <span>${hours}</span>
        <span class="countdown-label">Heures</span>
      </div>
      <div class="countdown-separator">:</div>
      <div class="countdown-item">
        <span>${minutes}</span>
        <span class="countdown-label">Minutes</span>
      </div>
      <div class="countdown-separator">:</div>
      <div class="countdown-item">
        <span>${seconds}</span>
        <span class="countdown-label">Secondes</span>
      </div>
    `;
  }

  setInterval(function() {
    currentDate = new Date();
    updateCountdown();
  }, 1000);

  updateCountdown();
});














document.write("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Maintenance en cours<\/title>\r\n  <link rel=\"stylesheet\" href=\"styles.css\">\r\n<\/head>\r\n<body>\r\n  <div class=\"container\">\r\n    <h1 class=\"logo\">Nom du Site<\/h1>\r\n    <div class=\"maintenance-content\">\r\n      <h2 class=\"title\">Maintenance en cours<\/h2>\r\n      <p class=\"description\">Nous sommes en train de r\u00e9aliser des travaux de maintenance. Nous serons bient\u00f4t de retour.<\/p>\r\n      <div class=\"countdown\">\r\n        <span class=\"countdown-label\">Temps restant :<\/span>\r\n        <div class=\"countdown-timer\">\r\n          <span class=\"countdown-item\" id=\"days\">00<\/span>\r\n          <span class=\"countdown-separator\">:<\/span>\r\n          <span class=\"countdown-item\" id=\"hours\">00<\/span>\r\n          <span class=\"countdown-separator\">:<\/span>\r\n          <span class=\"countdown-item\" id=\"minutes\">00<\/span>\r\n          <span class=\"countdown-separator\">:<\/span>\r\n          <span class=\"countdown-item\" id=\"seconds\">00<\/span>\r\n        <\/div>\r\n      <\/div>\r\n    <\/div>\r\n  <\/div>\r\n\r\n  \r\n<\/body>\r\n<\/html>\r\n\r\n\r\n<script> \r\n  function countdown(endDate) {\r\n  \/\/ R\u00e9cup\u00e9rer la date et l'heure actuelles\r\n  var startDate = new Date();\r\n\r\n  \/\/ Calculer la diff\u00e9rence en millisecondes entre la date de fin et la date actuelle\r\n  var timeRemaining = endDate - startDate;\r\n\r\n  \/\/ Calculer les jours, heures, minutes et secondes restantes\r\n  var days = Math.floor(timeRemaining \/ (1000 * 60 * 60 * 24));\r\n  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) \/ (1000 * 60 * 60));\r\n  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) \/ (1000 * 60));\r\n  var seconds = Math.floor((timeRemaining % (1000 * 60)) \/ 1000);\r\n\r\n  \/\/ Mettre \u00e0 jour les \u00e9l\u00e9ments HTML correspondants avec les valeurs calcul\u00e9es\r\n  document.getElementById('days').textContent = formatTime(days);\r\n  document.getElementById('hours').textContent = formatTime(hours);\r\n  document.getElementById('minutes').textContent = formatTime(minutes);\r\n  document.getElementById('seconds').textContent = formatTime(seconds);\r\n}\r\n\r\nfunction formatTime(time) {\r\n  \/\/ Ajouter un z\u00e9ro devant les chiffres inf\u00e9rieurs \u00e0 10\r\n  return time < 10 ? '0' + time : time;\r\n}\r\n\r\n\/\/ Date de fin de la maintenance (exemple : dans 7 jours \u00e0 partir de maintenant)\r\nvar endDate = new Date();\r\nendDate.setDate(endDate.getDate() + 7);\r\n\r\n\/\/ Mettre \u00e0 jour la minuterie toutes les secondes\r\nsetInterval(function() {\r\n  countdown(endDate);\r\n}, 1000);\r\n\r\n  <\/script>");
