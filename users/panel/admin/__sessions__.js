async function verifierCompte() {
    const credentials = localStorage.getItem("compte");
    const sessionData = localStorage.getItem("Enes-CDE-C");

    if (!credentials || !sessionData) {
        console.warn("Données manquantes, redirection...");
        window.location.href = "index.html";
        return;
    }

    const { email, password } = JSON.parse(credentials);
    const session = JSON.parse(sessionData);

    // Vérification de la session
    if (!session.valid || new Date(session.expiry) < new Date(Date.now() - 3 * 60 * 60 * 1000)) {
        console.warn("Session invalide ou expirée, redirection...");
        window.location.href = "index.html";
        return;
    }

    // Récupération des infos du compte via GitHub API
    const tokenResponse = await fetch("https://pkyt-database-up.vercel.app/code-source/admin-dashboard/secute_private/tocken.js");
    const tokenText = await tokenResponse.text();
    const GITHUB_TOKEN = tokenText.match(/['"](ghp_[A-Za-z0-9]+)['"]/)[1]; // Extraction du token

    const encodedEmail = encodeURIComponent(email);
    const encodedPassword = encodeURIComponent(password);
    const url = `https://api.github.com/repos/database_EnesCDE/contents/compte/v4/${encodedEmail}*-*${encodedPassword}.json`;

    const response = await fetch(url, {
        headers: { Authorization: `token ${GITHUB_TOKEN}` }
    });

    if (!response.ok) {
        if (response.status === 404) {
            console.warn("Fichier non trouvé, redirection...");
        } else {
            console.warn("Erreur inconnue, redirection...");
        }
        window.location.href = "../index.html";
        return;
    }

    const data = await response.json();
    const fileContent = JSON.parse(atob(data.content));

    if (fileContent.CompteInfo.Email === email && fileContent.CompteInfo.MDP === password) {
        console.log("Compte valide");

        // Vérification du champ Admin
        if (fileContent.Details.Admin !== "EnesCDE002009") {
            console.warn("Accès refusé, redirection...");
            window.location.href = "../index.html";
            return;
        }
    } else {
        console.warn("Compte non valide, redirection...");
        window.location.href = "../index.html";
    }
}

// Vérification initiale
verifierCompte();

// Vérification toutes les 5 minutes
setInterval(verifierCompte, 5 * 60 * 1000);
