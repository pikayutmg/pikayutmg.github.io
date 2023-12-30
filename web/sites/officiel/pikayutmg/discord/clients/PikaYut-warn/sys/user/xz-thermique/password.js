function showContent() {
    const passwordInput = document.getElementById('password-input');
    const passwordDiv = document.getElementById('password');
    const protectedContent = document.getElementById('protected-content');

    // Votre mot de passe enregistré dans le JSON
    const motDePasseAttendu = "MODO-1";

    // Vérifier si le mot de passe saisi est correct
    if (passwordInput.value === motDePasseAttendu) {
        // Afficher le contenu protégé
        passwordDiv.style.display = 'block';

        // Mettre à jour le contenu protégé (vous pouvez remplacer cela par votre propre contenu)
        protectedContent.textContent = "Bienvenue sur le site protégé !";
    } else {
        // Afficher un message d'erreur si le mot de passe est incorrect
        alert("Mot de passe incorrect !");
    }

    // Effacer le champ du mot de passe
    passwordInput.value = '';
}
