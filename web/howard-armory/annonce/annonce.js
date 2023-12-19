document.addEventListener('DOMContentLoaded', function () {
    // Charger les données JSON à partir du lien (attention aux politiques de sécurité)
    fetch('https://pikayutmg.github.io/web/howard-armory/annonce/annonces.json')
        .then(response => response.json())
        .then(data => handleAnnouncements(data))
        .catch(error => console.error('Error fetching JSON:', error));
});

function handleAnnouncements(data) {
    const notificationContainer = document.getElementById('notification-container');

    // Vérifier si le cookie "lastVisit" existe
    const lastVisit = getCookie('lastVisit');

    // Si le cookie n'existe pas ou si la date de la dernière visite est il y a plus de 14 jours
    if (!lastVisit || isMoreThan14Days(lastVisit)) {
        // Afficher le message d'annonce
        notificationContainer.innerHTML = `
            <div class="rectangle" id="notification">
                <div class="notification-text">
                    <i class="material-icons">info</i>
                    <span>&nbsp;&nbsp;This is a test notification.</span>
                    <button onclick="closeNotification()">Fermer</button>
                </div>
            </div>
        `;

        // Mettre à jour le cookie "lastVisit" avec la date actuelle
        setCookie('lastVisit', new Date().toUTCString());
    }
}

function closeNotification() {
    const notificationContainer = document.getElementById('notification-container');
    notificationContainer.parentElement.remove(); // Supprimer le conteneur parent
}


function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/`;
}

function isMoreThan14Days(lastVisit) {
    const fourteenDaysInMilliseconds = 14 * 24 * 60 * 60 * 1000; // 14 jours en millisecondes
    const currentDate = new Date().getTime();
    const lastVisitDate = new Date(lastVisit).getTime();

    return currentDate - lastVisitDate > fourteenDaysInMilliseconds;
}
