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
    const { GITHUB_TOKEN } = await tokenResponse.json();
    
    const url = `https://api.github.com/repos/database_EnesCDE/contents/compte/v4/${email}*-*${password}.json`;
    
    const response = await fetch(url, {
        headers: { Authorization: `token ${GITHUB_TOKEN}` }
    });
    
    if (!response.ok) {
        console.warn("Compte non valide, redirection...");
        window.location.href = "index.html";
        return;
    }
    
    const data = await response.json();
    const fileContent = JSON.parse(atob(data.content));
    
    if (fileContent.CompteInfo.Email === email && fileContent.CompteInfo.MDP === password) {
        console.log("Compte valide");
    } else {
        console.warn("Compte non valide, redirection...");
        window.location.href = "index.html";
    }
}

// Vérification initiale
verifierCompte();

// Vérification toutes les 5 minutes
setInterval(verifierCompte, 5 * 60 * 1000);
