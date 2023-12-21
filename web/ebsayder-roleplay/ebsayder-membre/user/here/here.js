   // Fonction pour charger les données depuis le fichier JSON
    async function loadJsonData() {
      try {
        const response = await fetch('https://pikayutmg.github.io/web/ebsayder-roleplay/ebsayder-membre/user/here/here.json');
        const jsonData = await response.json();

        // Sélectionnez l'élément où vous voulez ajouter le contenu
        const container = document.getElementById('json-container');

        // Utilisez textContent pour éviter l'interprétation des balises HTML
        container.textContent = jsonData.site;
      } catch (error) {
        console.error('Erreur lors du chargement des données JSON:', error);
      }
    }

    // Appelez la fonction pour charger les données
    loadJsonData();
