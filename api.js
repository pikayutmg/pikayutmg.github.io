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
