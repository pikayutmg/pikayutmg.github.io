// Fonction pour charger les données depuis le fichier JSON
async function loadUserData() {
  try {
    const response = await fetch('https://gflp-p.vercel.app/web/ebsayder-roleplay/ebsayder-membre/json/user/692098372747919480.json');
    const userData = await response.json();

    // Sélectionnez les éléments HTML où les données seront affichées
    const nameElement = document.getElementById('name');
    const idElement = document.getElementById('id');
    const profileImageElement = document.getElementById('profile-image');

    // Vérifiez si "user-details" existe dans les catégories
    if (userData[0].categories['user-details']) {
      const userDetailsData = userData[0].categories['user-details'];

      // Mettez à jour le pseudo
      nameElement.innerText = userDetailsData.Pseudo;

      // Mettez à jour l'identifiant
      idElement.innerText = userDetailsData.Identifiant;

      // Mettez à jour l'image de profil
      profileImageElement.src = userDetailsData.Profilescreen;
      profileImageElement.alt = userDetailsData.Pseudo; // Assurez-vous de donner une description pertinente pour l'accessibilité
    }
  } catch (error) {
    console.error('Erreur lors du chargement des données:', error);
  }
}

// Appelez la fonction pour charger les données
loadUserData();
