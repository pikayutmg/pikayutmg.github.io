     // Fonction pour charger les données du profil depuis le fichier JSON
  async function loadProfileData() {
    try {
      const response = await fetch('https://pikayutmg.github.io/web/PikaYut-warn/sys/user/xz-thermique/user.json');
      const userData = await response.json();

      // Sélectionnez les éléments où les informations du profil seront ajoutées
      const nameElement = document.getElementById('name');
      const idElement = document.getElementById('id');
      const profileImageElement = document.getElementById('profile-image');

      // Récupérez les données du profil depuis le JSON
      const userProfileData = userData[0].categories['user-details'];

      // Mettez à jour le contenu des éléments HTML avec les informations du profil
      nameElement.textContent = `Pseudo : ${userProfileData.Pseudo}`;
      idElement.textContent = `Identifiant : ${userProfileData.Identifiant}`;
      profileImageElement.src = userProfileData.Profilescreen;  // Mettez à jour la source de l'image

    } catch (error) {
      console.error('Erreur lors du chargement des données:', error);
    }
  }

  // Appelez la fonction pour charger les données du profil
  loadProfileData();
