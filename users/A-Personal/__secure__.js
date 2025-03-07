document.addEventListener("DOMContentLoaded", function() {
    // Appliquer les styles généraux à la page
    document.body.style.margin = "0";
    document.body.style.height = "100vh";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.backgroundColor = "#000";
    document.body.style.fontFamily = "Arial, sans-serif";

    // Création du conteneur principal
    const container = document.createElement("div");
    container.style.background = "#111";
    container.style.padding = "20px";
    container.style.borderRadius = "10px";
    container.style.boxShadow = "0px 0px 10px rgba(255,255,255,0.2)";
    container.style.textAlign = "center";
    container.style.width = "300px";
    document.body.appendChild(container);

    // Titre
    const title = document.createElement("h2");
    title.innerText = "Connexion";
    title.style.color = "#fff";
    container.appendChild(title);

    // Champ utilisateur
    const userInput = document.createElement("input");
    userInput.type = "text";
    userInput.placeholder = "Pseudo";
    userInput.style.width = "90%";
    userInput.style.padding = "10px";
    userInput.style.margin = "10px 0";
    userInput.style.border = "1px solid #333";
    userInput.style.borderRadius = "5px";
    userInput.style.background = "#222";
    userInput.style.color = "#fff";
    container.appendChild(userInput);

    // Champ mot de passe
    const passInput = document.createElement("input");
    passInput.type = "password";
    passInput.placeholder = "Mot de passe";
    passInput.style.width = "90%";
    passInput.style.padding = "10px";
    passInput.style.margin = "10px 0";
    passInput.style.border = "1px solid #333";
    passInput.style.borderRadius = "5px";
    passInput.style.background = "#222";
    passInput.style.color = "#fff";
    container.appendChild(passInput);

    // Bouton de connexion
    const loginBtn = document.createElement("button");
    loginBtn.innerText = "Se connecter";
    loginBtn.style.width = "100%";
    loginBtn.style.padding = "10px";
    loginBtn.style.marginTop = "10px";
    loginBtn.style.border = "none";
    loginBtn.style.borderRadius = "5px";
    loginBtn.style.background = "#007bff";
    loginBtn.style.color = "#fff";
    loginBtn.style.cursor = "pointer";
    loginBtn.style.fontSize = "16px";
    loginBtn.style.transition = "background 0.3s";
    container.appendChild(loginBtn);

    // Effet de survol pour le bouton de connexion
    loginBtn.addEventListener("mouseover", () => {
        loginBtn.style.background = "#0056b3";
    });
    loginBtn.addEventListener("mouseout", () => {
        loginBtn.style.background = "#007bff";
    });

    // Vérification de la dernière connexion réussie (3 heures)
    const lastLoginTime = localStorage.getItem("lastLoginTime");
    const currentTime = Date.now();
    const threeHours = 3 * 60 * 60 * 1000; // 3 heures en millisecondes

    if (lastLoginTime && (currentTime - lastLoginTime < threeHours)) {
        // Si l'utilisateur a déjà réussi la connexion récemment, afficher un message de bienvenue
        showWelcomePopup();
    }

    // Fetch des comptes depuis GitHub
    async function getAccounts() {
        try {
            const response = await fetch("https://raw.githubusercontent.com/PKYT-Service/database_EnesCDE/main/compte/account_personal.json");
            if (!response.ok) {
                throw new Error("Impossible de récupérer les comptes.");
            }
            return await response.json();
        } catch (error) {
            console.error("Erreur lors du fetch des comptes :", error);
            return null;
        }
    }

    // Affichage de la popup de bienvenue
    function showWelcomePopup() {
        const popup = document.createElement("div");
        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.backgroundColor = "#333";
        popup.style.padding = "20px";
        popup.style.borderRadius = "10px";
        popup.style.color = "#fff";
        popup.style.textAlign = "center";
        popup.style.boxShadow = "0px 0px 15px rgba(255, 255, 255, 0.5)";
        popup.innerHTML = `
            <h3>Bienvenue, vous êtes connecté !</h3>
            <button id="closePopup" style="background: #007bff; color: white; border: none; padding: 10px; border-radius: 5px; cursor: pointer; font-size: 14px;">Fermer</button>
        `;
        document.body.appendChild(popup);

        // Fermeture de la popup
        const closePopupBtn = document.getElementById("closePopup");
        closePopupBtn.addEventListener("click", () => {
            document.body.removeChild(popup);
        });
    }

    // Vérification des identifiants
    loginBtn.addEventListener("click", async () => {
        const accounts = await getAccounts();
        if (!accounts) {
            window.location.href = "https://enes-cde.vercel.app/"; // Redirection si problème avec le fetch
            return;
        }

        const username = userInput.value.trim();
        const password = passInput.value.trim();

        if (accounts[username] && accounts[username] === password) {
            alert("Accès autorisé !");
            // Sauvegarder l'heure de la dernière connexion réussie
            localStorage.setItem("lastLoginTime", Date.now());
            showWelcomePopup(); // Affichage de la popup de bienvenue
        } else {
            window.location.href = "https://enes-cde.vercel.app/"; // Redirection si identifiants incorrects
        }
    });

    // Récupérer les paramètres de l'URL
    const params = new URLSearchParams(window.location.search);
    const username = params.get("user");

    // Vérifier si le pseudo existe
    if (username) {
        document.getElementById("username").textContent = username;
    } else {
        document.getElementById("username").textContent = "Utilisateur inconnu";
    }
});
