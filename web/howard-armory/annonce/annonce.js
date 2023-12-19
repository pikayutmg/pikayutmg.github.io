document.addEventListener('DOMContentLoaded', function () {
    // Charger les données JSON à partir du lien (attention aux politiques de sécurité)
    fetch('https://pikayutmg.github.io/web/howard-armory/annonce/annonces.json')
        .then(response => response.json())
        .then(data => handleAnnouncements(data))
        .catch(error => console.error('Error fetching JSON:', error));
});

function handleAnnouncements(data) {
    const infoContainer = document.getElementById('info-container');

    // Vérifier si le cookie "lastVisit" existe
    const lastVisit = getCookie('lastVisit');

    // Si le cookie n'existe pas ou si la date de la dernière visite est il y a plus de 14 jours
    if (!lastVisit || isMoreThan14Days(lastVisit)) {
        // Afficher le message d'annonce
        infoContainer.innerHTML = `
            <div class="notification-container">
                <div class="notification-line"></div>
                <p>Il y a une nouvelle annonce ! <a href="#" onclick="showAnnouncement()">Voir l'annonce</a></p>
            </div>
        `;

        // Mettre à jour le cookie "lastVisit" avec la date actuelle
        setCookie('lastVisit', new Date().toUTCString());
    }
}

function showAnnouncement() {
    // Vous pouvez implémenter le code pour afficher l'annonce complète ici
    alert('Afficher l\'annonce complète');
}
