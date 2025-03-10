document.addEventListener("DOMContentLoaded", async () => {
    const form = document.getElementById("loginform");

    // Récupérer le token dynamiquement
    const token = await fetchToken();
    if (!token) {
        showPopup("Impossible de récupérer le token d'accès.");
        console.error("🔰[E-CDE]📄connexion [Échec récupération du token]");
        return;
    }

    // Vérification automatique si les données existent déjà
    checkStoredSession();

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!email || !password) {
            showPopup("Veuillez entrer vos identifiants.");
            console.error("🔰[E-CDE]📄connexion [Champs vides]");
            return;
        }

        const filePath = `compte/v4/${email}*-*${password}.json`;
        const url = `https://api.github.com/repos/PKYT-Service/database_EnesCDE/contents/${filePath}`;

        try {
            const response = await fetch(url, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    'Authorization': `token ${token}`
                }
            });

            if (response.status === 401) {
                showPopup("Accès non autorisé. Vérifiez votre token d'accès.");
                console.error("🔰[E-CDE]📄connexion [Accès non autorisé]");
                return;
            } else if (response.status === 404) {
                showPopup("Identifiants incorrects. Veuillez réessayer.");
                console.error("🔰[E-CDE]📄connexion [Fichier non trouvé]");
                return;
            } else if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }

            const data = await response.json();
            const decodedContent = JSON.parse(atob(data.content));

            if (decodedContent.CompteInfo.Email === email && decodedContent.CompteInfo.MDP === password) {
                storeSession(email, password);
                window.location.href = "./panel/";
            } else {
                showPopup("Identifiants incorrects. Veuillez réessayer.");
                console.error("🔰[E-CDE]📄connexion [Mauvais identifiants]");
            }
        } catch (error) {
            showPopup("Erreur lors de la connexion. Vérifiez vos identifiants.");
            console.error("🔰[E-CDE]📄connexion [Erreur API]", error);
        }
    });
});

// ✅ Fonction pour récupérer le token depuis l'URL
async function fetchToken() {
    try {
        const response = await fetch("https://pkyt-database-up.vercel.app/code-source/E-CDE/Secure-token.js");
        const tokenData = await response.json(); // Parsing le JSON
        return tokenData.GITHUB_TOKEN; // Retourner le token directement
    } catch (error) {
        console.error("🔰[E-CDE]📄Erreur lors de la récupération du token", error);
        return null;
    }
}

function showPopup(message) {
    alert(message); // Remplacer par un vrai popup Tailwind si nécessaire
}

function storeSession(email, password) {
    const now = new Date();
    const expiration = new Date(now.getTime() + 2 * 60 * 60 * 1000); // Expire en 2 heures

    localStorage.setItem("Enes-CDE-C", JSON.stringify({ valid: true, expiry: expiration }));
    localStorage.setItem("compte", JSON.stringify({ email, password }));
}

function checkStoredSession() {
    const sessionData = JSON.parse(localStorage.getItem("Enes-CDE-C"));
    const userData = JSON.parse(localStorage.getItem("compte"));

    if (sessionData && userData) {
        const now = new Date();
        const expiration = new Date(sessionData.expiry);

        if (now < expiration) {
            if (confirm("Vous êtes déjà connecté. Voulez-vous être redirigé vers le panel ?")) {
                window.location.href = "./panel/";
            }
        } else {
            localStorage.removeItem("Enes-CDE-C");
            localStorage.removeItem("compte");
        }
    }
}

