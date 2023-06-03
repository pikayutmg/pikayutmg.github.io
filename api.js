
// Attendre que le DOM soit entièrement chargé
document.addEventListener("DOMContentLoaded", function() {
  // Obtenir la date et l'heure actuelles
  var currentDate = new Date();

  // Définir la date de fin de la maintenance (ex. : 1er janvier 2024 à 00:00:00)
  var maintenanceEndDate = new Date("2024-01-01T00:00:00");

  // Calculer la différence entre la date de fin de la maintenance et la date actuelle
  var timeDiff = maintenanceEndDate.getTime() - currentDate.getTime();

  // Convertir la différence de temps en jours, heures, minutes et secondes
  var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Sélectionner l'élément de la minuterie du compte à rebours
  var countdownTimer = document.querySelector(".countdown-timer");

  // Mettre à jour le contenu de la minuterie du compte à rebours
  function updateCountdown() {
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

  // Mettre à jour la minuterie du compte à rebours toutes les secondes
  setInterval(function() {
    // Mettre à jour la date et l'heure actuelles
    currentDate = new Date();

    // Calculer la nouvelle différence de temps
    timeDiff = maintenanceEndDate.getTime() - currentDate.getTime();

    // Vérifier si la maintenance est terminée
    if (timeDiff > 0) {
      // Calculer les jours, heures, minutes et secondes restants
      days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      // Mettre à jour le contenu de la minuterie du compte à rebours
      updateCountdown();
    } else {
      // La maintenance est terminée, afficher un message approprié ou rediriger
