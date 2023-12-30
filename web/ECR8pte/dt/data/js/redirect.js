const redirectUrlSuccess = 'https://pikayutmg.github.io/web/ECR8pte/index.html';
const redirectUrlFailure = 'https://pikayutmg.github.io/web/ECR8pte/login/';

// Simule une vÃ©rification cÃ´tÃ© client (remplacez cela par une logique appropriÃ©e)
const isLoggedIn = true;  // Mettez Ã  true si la connexion est rÃ©ussie, Ã  false sinon

// Redirige en fonction du statut de connexion
if (isLoggedIn) {
  window.location.href = redirectUrlSuccess;
} else {
  window.location.href = redirectUrlFailure;
}
