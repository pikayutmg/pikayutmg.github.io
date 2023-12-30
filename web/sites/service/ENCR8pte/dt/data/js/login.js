const apiUrl = 'https://pikayutmg.github.io/web/ECR8pte/dt/data/json/acc.json';
const redirectUrlSuccess = 'https://pikayutmg.github.io/web/ECR8pte/index.html';
const redirectUrlFailure = 'https://pikayutmg.github.io/web/ECR8pte/login/';

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simuler les Ã©tapes de connexion
  setStatus('1. Connexion Ã  la base de donnÃ©es');
  simulateDelay(2000, () => {
    setStatus('2. Connexion avec succÃ¨s');
    simulateDelay(1000, () => {
      setStatus('3. Transmission de l\'account vers l\'acc');
      simulateDelay(1500, () => {
        // VÃ©rifier les identifiants cÃ´tÃ© client (simulation avec une API)
        fetch(apiUrl)
          .then(response => response.json())
          .then(accounts => {
            const account = accounts.find(acc => acc.email === email && acc.password === password);
            if (account) {
              setStatus('4. SuccÃ¨s');
              simulateDelay(1000, () => {
                setStatus('5. Transfert vers ECR8pte');
                simulateDelay(2000, () => {
                  window.location.href = redirectUrlSuccess;
                });
              });
            } else {
              setStatus('6. Transfert Ã©chouÃ©');
              simulateDelay(1000, () => {
                setStatus('7. Tentative de reconnexion');
                const randomDelay = Math.floor(Math.random() * 5000) + 1000;
                simulateDelay(randomDelay, () => {
                  setStatus('8. Transfert rÃ©ussi');
                  simulateDelay(1000, () => {
                    window.location.href = redirectUrlSuccess;
                  });
                });
              });
            }
          })
          .catch(error => console.error('Erreur de connexion Ã  la base de donnÃ©es:', error));
      });
    });
  });
}

function setStatus(message) {
  document.getElementById('status').textContent = message;
}

function simulateDelay(delay, callback) {
  setTimeout(callback, delay);
}
