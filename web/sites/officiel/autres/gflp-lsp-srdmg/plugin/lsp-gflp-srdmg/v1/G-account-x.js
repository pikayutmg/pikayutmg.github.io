
        // Définir la classe de la balise <g-account-1>
        class GAccount1 extends HTMLElement {
            constructor() {
                super();
                const shadow = this.attachShadow({ mode: 'open' });

                // Récupérer les attributs personnalisés
                const email = this.getAttribute('email');
                const mdp = this.getAttribute('mdp');
                const pseudo = this.getAttribute('pseudo');
                const id = this.getAttribute('id');

                // Créer le contenu de la balise <g-account-1>
                const content = document.createElement('div');
                content.innerHTML = `
                    <label>Email:</label>
                    <input type="email" value="${email || ''}"><br>
                    <label>Mot de passe:</label>
                    <input type="password" value="${mdp || ''}"><br>
                    <label>Pseudo:</label>
                    <input type="text" value="${pseudo || ''}"><br>
                    <label>ID:</label>
                    <input type="text" value="${id || ''}">
                `;

                // Appliquer les styles CSS
                content.style.display = 'block';
                content.style.border = '1px solid #ddd';
                content.style.padding = '10px';
                content.style.marginBottom = '20px';
                content.style.borderRadius = '4px';
                content.style.backgroundColor = '#f2f2f2';
                content.style.color = '#333';

                // Ajouter le contenu au shadow DOM
                shadow.appendChild(content);
            }
        }

        // Définir la classe de la balise <g-account-2>
        class GAccount2 extends HTMLElement {
            constructor() {
                super();
                const shadow = this.attachShadow({ mode: 'open' });

                // Récupérer les attributs personnalisés
                const email = this.getAttribute('email');
                const mdp = this.getAttribute('mdp');
                const pseudo = this.getAttribute('pseudo');

                // Créer le contenu de la balise <g-account-2>
                const content = document.createElement('div');
                content.innerHTML = `
                    <label>Email:</label>
                    <input type="email" value="${email || ''}"><br>
                    <label>Pseudo:</label>
                    <input type="text" value="${pseudo || ''}"><br>
                    <label>Mot de passe:</label>
                    <input type="password" value="${mdp || ''}">
                `;

                // Appliquer les styles CSS
                content.style.display = 'block';
                content.style.border = '1px solid #ddd';
                content.style.padding = '10px';
                content.style.marginBottom = '20px';
                content.style.borderRadius = '4px';
                content.style.backgroundColor = '#f2f2f2';
                content.style.color = '#333';

                // Ajouter le contenu au shadow DOM
                shadow.appendChild(content);
            }
        }

        // Définir la classe de la balise <g-account-3>
        class GAccount3 extends HTMLElement {
            constructor() {
                super();
                const shadow = this.attachShadow({ mode: 'open' });

                // Récupérer les attributs personnalisés
                const email = this.getAttribute('email');
                const mdp = this.getAttribute('mdp');

                // Créer le contenu de la balise <g-account-3>
                const content = document.createElement('div');
                content.innerHTML = `
                    <label>Email:</label>
                    <input type="email" value="${email || ''}"><br>
                    <label>Mot de passe:</label>
                    <input type="password" value="${mdp || ''}">
                `;

                // Appliquer les styles CSS
                content.style.display = 'block';
                content.style.border = '1px solid #ddd';
                content.style.padding = '10px';
                content.style.marginBottom = '20px';
                content.style.borderRadius = '4px';
                content.style.backgroundColor = '#f2f2f2';
                content.style.color = '#333';

                // Ajouter le contenu au shadow DOM
                shadow.appendChild(content);
            }
        }

        // Définir la classe de la balise <g-account-4>
        class GAccount4 extends HTMLElement {
            constructor() {
                super();
                const shadow = this.attachShadow({ mode: 'open' });

                // Récupérer les attributs personnalisés
                const pseudo = this.getAttribute('pseudo');
                const mdp = this.getAttribute('mdp');

                // Créer le contenu de la balise <g-account-4>
                const content = document.createElement('div');
                content.innerHTML = `
                    <label>Pseudo:</label>
                    <input type="text" value="${pseudo || ''}"><br>
                    <label>Mot de passe:</label>
                    <input type="password" value="${mdp || ''}">
                `;

                // Appliquer les styles CSS
                content.style.display = 'block';
                content.style.border = '1px solid #ddd';
                content.style.padding = '10px';
                content.style.marginBottom = '20px';
                content.style.borderRadius = '4px';
                content.style.backgroundColor = '#f2f2f2';
                content.style.color = '#333';

                // Ajouter le contenu au shadow DOM
                shadow.appendChild(content);
            }
        }

        // Définir la classe de la balise <g-account-5>
        class GAccount5 extends HTMLElement {
            constructor() {
                super();
                const shadow = this.attachShadow({ mode: 'open' });

                // Récupérer les attributs personnalisés
                const id = this.getAttribute('id');
                const mdp = this.getAttribute('mdp');

                // Créer le contenu de la balise <g-account-5>
                const content = document.createElement('div');
                content.innerHTML = `
                    <label>ID:</label>
                    <input type="text" value="${id || ''}"><br>
                    <label>Mot de passe:</label>
                    <input type="password" value="${mdp || ''}">
                `;

                // Appliquer les styles CSS
                content.style.display = 'block';
                content.style.border = '1px solid #ddd';
                content.style.padding = '10px';
                content.style.marginBottom = '20px';
                content.style.borderRadius = '4px';
                content.style.backgroundColor = '#f2f2f2';
                content.style.color = '#333';

                // Ajouter le contenu au shadow DOM
                shadow.appendChild(content);
            }
        }

        // Enregistrer les éléments personnalisés
        customElements.define('g-account-1', GAccount1);
        customElements.define('g-account-2', GAccount2);
        customElements.define('g-account-3', GAccount3);
        customElements.define('g-account-4', GAccount4);
        customElements.define('g-account-5', GAccount5);
          
