document.addEventListener('DOMContentLoaded', function () {
    fetch('https://pikayutmg.github.io/web/howard-armory/annonce/annonces.json')
        .then(response => response.json())
        .then(data => handleAnnouncements(data))
        .catch(error => console.error('Error fetching JSON:', error));
});

function handleAnnouncements(data) {
    const notificationContainer = document.getElementById('notification-container');
    const lastVisit = getCookie('lastVisit');

    if (!lastVisit || isMoreThan14Days(lastVisit)) {
        if (!notificationContainer.classList.contains('viewed')) {
            const announcement = data.annonces[0]; // Utilisez l'annonce appropriée depuis votre JSON
            const announcementHTML = generateAnnouncementHTML(announcement);

            notificationContainer.innerHTML = announcementHTML;
            setCookie('lastVisit', new Date().toUTCString());
        }
    }
}

function generateAnnouncementHTML(announcement) {
    return `
        <div class="rectangle" id="notification">
            <div class="notification-text">
                <i class="material-icons">info</i>
                ${announcement.title ? `<h2>${announcement.title}</h2>` : ''}
                ${announcement.date ? `<p>Par ${announcement.date}</p>` : ''}
                ${announcement.steamLink ? `<a href="${announcement.steamLink}" target="_blank">Lien Steam</a>` : ''}
                ${announcement.discordLink ? `<a href="${announcement.discordLink}" target="_blank">Lien Discord</a>` : ''}
                ${announcement.description ? announcement.description : ''}
                <button onclick="closeNotification()">Fermer</button>
            </div>
        </div>
    `;
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
    const fourteenDaysInMilliseconds = 14 * 24 * 60 * 60 * 1000;
    const currentDate = new Date().getTime();
    const lastVisitDate = new Date(lastVisit).getTime();
    return currentDate - lastVisitDate > fourteenDaysInMilliseconds;
}
