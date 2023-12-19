// Fonction pour récupérer la valeur d'un cookie
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Fonction pour définir la valeur d'un cookie
function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/`;
}

// Fonction pour vérifier si plus de 14 jours se sont écoulés depuis la dernière visite
function isMoreThan14Days(lastVisit) {
    const fourteenDaysInMilliseconds = 14 * 24 * 60 * 60 * 1000; // 14 jours en millisecondes
    const currentDate = new Date().getTime();
    const lastVisitDate = new Date(lastVisit).getTime();

    return currentDate - lastVisitDate > fourteenDaysInMilliseconds;
}
