    // Fonction pour formater la date au format européen (dd/mm/yyyy)
    function getEuropeanDate() {
      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth() + 1; // Les mois commencent à 0, donc ajoutez 1
      const year = today.getFullYear();

      // Ajoute un zéro devant le jour et le mois si nécessaire
      const formattedDay = day < 10 ? '0' + day : day;
      const formattedMonth = month < 10 ? '0' + month : month;

      // Format final : dd/mm/yyyy
      const europeanDate = `${formattedDay}/${formattedMonth}/${year}`;

      return europeanDate;
    }

    // Obtenez l'élément avec l'ID "timels"
    const timelsElement = document.getElementById('timels');

    // Afficher la date dans l'élément "timels"
    timelsElement.textContent = 'Date européenne : ' + getEuropeanDate();
  
