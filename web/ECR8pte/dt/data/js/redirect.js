const redirectUrlSuccess = 'https://pikayutmg.github.io/web/ECR8pte/index.html';
const redirectUrlFailure = 'https://pikayutmg.github.io/web/ECR8pte/login/';

// Simule une vÃ©rification cÃ´tÃ© client (remplacez cela par une logique appropriÃ©e)
const isLoggedIn = false;  // Mettez Ã  true si la connexion est rÃ©ussie, Ã  false sinon

// Redirige en fonction du statut de connexion
if (isLoggedIn) {
  // Si connectÃ©, rester sur la page
} else {
  // Si non connectÃ©, rediriger vers la page de connexion
  window.location.href = redirectUrlFailure;
}
