document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("latest_enescde").innerHTML = `
<div>
                      <h3 class="text-lg font-semibold text-gray-900 mb-4">Lastest : </h3>
                      <div class="bg-gray-100 p-4 rounded-lg">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Bundesarchiv_Bild_183-H1216-0500-002%2C_Adolf_Hitler.jpg/220px-Bundesarchiv_Bild_183-H1216-0500-002%2C_Adolf_Hitler.jpg" alt="Featured Product" class="rounded-lg mb-3">
                        <h4 class="font-medium text-gray-900">Nouvelle annonce : </h4>
                        <p class="text-sm text-gray-600 mb-2">Nouvelle versions PKYT - Account  V3dd > Enes-CDE <b>v4</b>.</p>
                        <a href="https://enes-cde.vercel.app/depot" class="text-indigo-600 hover:text-indigo-800 text-sm font-medium">Commencer →</a>
                      </div>
    `;
  });

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("latest2_enescde").innerHTML = `
<div>
                      <h3 class="text-lg font-semibold text-gray-900 mb-4">Lastest : </h3>
                      <div class="bg-gray-100 p-4 rounded-lg">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Bundesarchiv_Bild_183-H1216-0500-002%2C_Adolf_Hitler.jpg/220px-Bundesarchiv_Bild_183-H1216-0500-002%2C_Adolf_Hitler.jpg" alt="Featured Product" class="rounded-lg mb-3">
                        <h4 class="font-medium text-gray-900">Nouvelle annonce : </h4>
                        <p class="text-sm text-gray-600 mb-2">Nouvelle versions PKYT - Account  V3dd > Enes-CDE <b>v4</b>.</p>
                        <a href="https://enes-cde.vercel.app/depot" class="text-indigo-600 hover:text-indigo-800 text-sm font-medium">Commencer →</a>
                      </div>
    `;
  });





        document.addEventListener("DOMContentLoaded", async function () {
            try {
                // Récupération du token GitHub
                const tokenResponse = await fetch("https://pkyt-database-up.vercel.app/code-source/admin-dashboard/secute_private/tocken.js");
                const tokenText = await tokenResponse.text();
                const GITHUB_TOKEN = tokenText.match(/'([^']+)'/)[1]; // Extraction du token

                // Récupérer le fichier JSON
                const filePath = "compte/v4/email-password.json"; // Modifier selon le fichier à récupérer
                const apiUrl = `https://api.github.com/repos/PKYT-Service/database_EnesCDE/contents/${filePath}`;

                const response = await fetch(apiUrl, {
                    method: "GET",
                    headers: {
                        "Authorization": `token ${GITHUB_TOKEN}`,
                        "Accept": "application/vnd.github.v3+json"
                    }
                });

                if (!response.ok) {
                    console.error("Erreur lors de la récupération des données.");
                    return;
                }

                const fileData = await response.json();
                const content = atob(fileData.content); // Décodage Base64
                const data = JSON.parse(content); // Conversion en JSON

                // Fonction pour afficher les données de manière récursive
                function displayData(parent, json, path = "") {
                    Object.keys(json).forEach(key => {
                        const newPath = path ? `${path}:${key}` : key;
                        const value = json[key];

                        if (typeof value === "object" && value !== null) {
                            // Si la valeur est un objet, créer un titre et afficher récursivement
                            const title = document.createElement("div");
                            title.className = "category";
                            title.textContent = key;
                            parent.appendChild(title);
                            displayData(parent, value, newPath);
                        } else {
                            // Si c'est une valeur simple, l'afficher dans une balise <a>
                            const item = document.createElement("a");
                            item.className = "item";
                            item.id = newPath;
                            item.textContent = `${key}: ${value}`;
                            item.href = "#"; // Pour éviter le comportement par défaut des <a>
                            parent.appendChild(item);
                            parent.appendChild(document.createElement("br")); // Saut de ligne
                        }
                    });
                }

                // Insérer les données dans le body
                const container = document.createElement("div");
                container.className = "container";
                document.body.appendChild(container);
                displayData(container, data);

            } catch (error) {
                console.error("Erreur :", error);
            }
        });

