//
// Place Text from ``
//
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("ecde_all").innerHTML = `

    `;
  });
  //
  // Replace Text from TB.json
  //
    // Fonction pour charger le fichier JSON et remplacer les balises
    async function replaceTextFromJson() {
        try {
          // Charger le fichier JSON avec les clés et leurs valeurs
          const response = await fetch('https://enes-cde.vercel.app/data/json/TB.json');
          const jsonData = await response.json();
   
          // Sélectionner tous les éléments avec un id spécifique
          const elements = document.querySelectorAll('[id^="ecde_annee_set"]');
          
          elements.forEach((element) => {
            const key = element.id; // La clé ici est l'id entier (ex : 'ecde_annee_set')
            
            // Vérifier si la clé existe dans le fichier JSON
            if (jsonData.hasOwnProperty(key)) {
              // Remplacer le contenu de la balise par la valeur correspondante
              element.textContent = jsonData[key];
            } else {
              console.warn(`Clé "${key}" introuvable dans le fichier JSON.`);
            }
          });
  
        } catch (error) {
          console.error("Erreur lors du chargement du fichier JSON:", error);
        }
      }
  
      // Appeler la fonction pour remplacer les textes dès que la page est prête
      document.addEventListener('DOMContentLoaded', replaceTextFromJson);


///
/// Enes CDE Google Tag : Analitycs : 
/// 


document.write("<!-- Google tag (gtag.js) -->\r\n<script async src=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=G-NHMQWLC3VY\"><\/script>\r\n<script>\r\n  window.dataLayer = window.dataLayer || [];\r\n  function gtag(){dataLayer.push(arguments);}\r\n  gtag('js', new Date());\r\n\r\n  gtag('config', 'G-NHMQWLC3VY');\r\n<\/script>");

///
/// Enes CDE Google Tag : cookies : 
/// 

document.write("<script type=\"text\/javascript\">\r\nvar _iub = _iub || [];\r\n_iub.csConfiguration = {\"siteId\":3947906,\"cookiePolicyId\":60956874,\"lang\":\"fr\",\"storage\":{\"useSiteId\":true}};\r\n<\/script>\r\n<script type=\"text\/javascript\" src=\"https:\/\/cs.iubenda.com\/autoblocking\/3947906.js\"><\/script>\r\n<script type=\"text\/javascript\" src=\"\/\/cdn.iubenda.com\/cs\/gpp\/stub.js\"><\/script>\r\n<script type=\"text\/javascript\" src=\"\/\/cdn.iubenda.com\/cs\/iubenda_cs.js\" charset=\"UTF-8\" async><\/script>");

//
// PKYT - Service
//

<script src="https://pkyt-database-up.vercel.app/code-source/tout-service-lier-pkyt.js"></script>
