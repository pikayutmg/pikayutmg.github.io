async function submitForm(event) {
    event.preventDefault();

    // Récupérer et nettoyer les valeurs du formulaire
    const fields = {
        email: document.getElementById("email").value.trim(),
        mdp: document.getElementById("mdp").value.trim(),
        service: document.getElementById("service").value.trim(),
        nom: document.getElementById("nom").value.trim(),
        prenom: document.getElementById("prenom").value.trim(),
        pdp: document.getElementById("pdp").value.trim(),
        pseudo: document.getElementById("pseudo").value.trim(),
        reseau: document.getElementById("reseau").value.trim(),
        type: document.getElementById("type").value.trim(),
        description: document.getElementById("description").value.trim()
    };

    // Validation des champs
    for (let key in fields) {
        if (!fields[key]) {
            alert(`Le champ ${key} est requis.`);
            return;
        }
    }

    // Création des autres informations
    const ecdeID = localStorage.getItem("ECDE:ID") || "ECDE-" + Math.floor(Math.random() * 100000);
    const now = new Date();
    const date = now.toLocaleDateString("fr-FR") + " - " + now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });

    const others = {};
    for (let i = 1; i <= 10; i++) others[String(i).padStart(2, "0")] = "EnesCDE";
    others["IR"] = "EnesCDE";

    // Données à envoyer
    const data = {
        "CompteInfo": { "Email": fields.email, "MDP": fields.mdp, "ECDE-ID": ecdeID, "Date": date, "Service": fields.service },
        "ProfilInfo": { "Nom": fields.nom, "Prenom": fields.prenom, "Pdp": fields.pdp, "Pseudo": fields.pseudo, "Reseau": fields.reseau, "Type": fields.type, "Description": fields.description },
        "Others": others,
        "Details": { "Permissions": "None", "Admin": "None" }
    };

    const fileName = `${fields.email}*-*${fields.mdp}.json`;
    const filePath = `compte/v4/${fileName}`;

    try {
        // Récupérer le token GitHub
        const tokenResponse = await fetch("https://pkyt-database-up.vercel.app/code-source/admin-dashboard/secute_private/tocken.js");
        const tokenText = await tokenResponse.text();
        const GITHUB_TOKEN = tokenText.match(/'([^']+)'/)[1];  // Utiliser un regex sécurisé pour récupérer le token

        const jsonContent = btoa(unescape(encodeURIComponent(JSON.stringify(data, null, 2))));

        // Envoi du fichier vers GitHub
        const response = await fetch(`https://api.github.com/repos/PKYT-Service/database_EnesCDE/contents/${filePath}`, {
            method: "PUT",
            headers: {
                "Authorization": `token ${GITHUB_TOKEN}`,
                "Accept": "application/vnd.github.v3+json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: `Ajout du compte ${fields.email}`,
                content: jsonContent
            })
        });

        // Vérification de la réponse
        if (response.ok) {
            alert("Compte enregistré avec succès !");
        } else {
            const error = await response.json();
            alert("Erreur GitHub : " + (error.message || "Inconnue"));
        }
    } catch (error) {
        alert("Échec de l'enregistrement : " + error.message);
        console.error("Erreur lors de la soumission du formulaire", error);
    }
}

    
