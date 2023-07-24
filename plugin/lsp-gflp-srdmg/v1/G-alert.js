 
        // Définir la classe de l'alerte personnalisée
        class GAlert extends HTMLElement {
            connectedCallback() {
                this.style.display = 'inline-block';
                this.style.padding = '8px 16px';
                this.style.backgroundColor = '#f2f2f2';
                this.style.border = 'none';
                this.style.borderRadius = '4px';
                this.style.color = 'black';
                this.style.cursor = 'pointer';

                // Ajouter un gestionnaire d'événement pour le clic de l'alerte
                this.addEventListener('click', () => {
                    const alertMessage = this.getAttribute('alert') || 'Alerte personnalisée !';
                    alert(alertMessage);
                });
            }
        }

        // Enregistrer l'élément personnalisé
        customElements.define('g-alert', GAlert);
 
