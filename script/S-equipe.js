document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("https://enes-cde.vercel.app/data/json/equipe.json");
        const equipeData = await response.json();
        const container = document.getElementById("enescde_team");
        
        equipeData.forEach(equipe => {
            const equipeElement = document.createElement("div");
            equipeElement.className = "space-y-4";
            
            equipeElement.innerHTML = `
                <div class="flex items-center space-x-4 p-3 bg-indigo-50 dark:bg-gray-700 rounded-lg transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-gray-600">
                    <img src="${equipe.pdp}" alt="${equipe.pseudo}" class="w-12 h-12 rounded-full border-2 border-indigo-800 dark:border-blue-900">
                    <div>
                        <h3 class="text-lg font-semibold text-indigo-800 dark:text-white"> ${equipe.pseudo} </h3>
                        <p class="text-sm text-gray-600 dark:text-gray-300"> <b> ${equipe.role} </b> </p>
                    </div>
                </div>
                <br>
            `;
            
            container.appendChild(equipeElement);
        });
    } catch (error) {
        console.error("Erreur lors de la récupération du JSON:", error);
    }
});

