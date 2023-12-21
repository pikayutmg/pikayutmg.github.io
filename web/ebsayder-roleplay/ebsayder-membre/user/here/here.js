 async function loadData() {
      try {
        const response = await fetch('https://pikayutmg.github.io/web/ebsayder-roleplay/ebsayder-membre/user/here/here.json');
        const jsonData = await response.json();

        // Sélectionnez l'élément où les données JSON seront ajoutées
        const jsonContainer = document.getElementById('json-container');

        // Convertissez l'objet JSON en une chaîne JSON formatée
        const jsonString = JSON.stringify(jsonData, null, 2);

        // Ajoutez la chaîne JSON à l'élément HTML
        jsonContainer.textContent = jsonString;

      } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
      }
    }

    // Appelez la fonction pour charger les données JSON
    loadData();
