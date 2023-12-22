// Mot de passe attendu
    const expectedPassword = "votreMotDePasse"; // Remplacez par votre mot de passe

    // Fonction pour vérifier le mot de passe
    function checkPassword() {
      const passwordInput = document.getElementById('passwordInput');
      const passwordDiv = document.getElementById('password');

      // Vérifiez si le mot de passe est correct
      if (passwordInput.value === expectedPassword) {
        // Affichez le contenu protégé
        passwordDiv.style.display = 'block';
      } else {
        // Affichez un message d'erreur
        alert('Mot de passe incorrect. Veuillez réessayer.');
      }

      // Effacez le champ de mot de passe après vérification (facultatif)
      passwordInput.value = '';
    }
