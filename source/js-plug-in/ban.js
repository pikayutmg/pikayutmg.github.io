
   // Fonction pour effectuer une requête AJAX et obtenir la liste noire depuis un fichier JSON
        function getBlacklistedIPs(callback) {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://pikayutmg.github.io/source/js-plug-in/ban.json', true);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    callback(response.blacklistedIPs);
                }
            };
            xhr.send();
        }

        // Fonction pour vérifier si l'adresse IP est sur la liste noire
        function isBlacklisted(ip, blacklistedIPs) {
            return blacklistedIPs.includes(ip);
        }

        // Fonction pour obtenir l'adresse IP de l'utilisateur en utilisant une API externe
        function getIPAddress(callback) {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://api64.ipify.org?format=json', true);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    callback(response.ip);
                }
            };
            xhr.send();
        }

        // Fonction de redirection si l'adresse IP est sur la liste noire
        function redirectIfBlacklisted() {
            getBlacklistedIPs(function(blacklistedIPs) {
                getIPAddress(function(ip) {
                    if (isBlacklisted(ip, blacklistedIPs)) {
                        window.location.href = 'https://pikayutmg.github.io/web/redirection/ban.html';
                    }
                });
            });
        }

        // Appel de la fonction lors du chargement de la page
        window.onload = redirectIfBlacklisted;
