// Définir la classe du G-bloc
class GBloc extends HTMLElement {
  connectedCallback() {
    // Logique de construction du G-bloc
    this.classList.add('custom-g-bloc'); // Ajout de la classe "custom-g-bloc"
    this.style.display = 'block';
    this.style.border = '1px solid #ddd';
    this.style.padding = '10px';
    this.style.marginBottom = '20px';
  }
}

// Définir la classe du G-titre
class GTitre extends HTMLElement {
  connectedCallback() {
    // Logique de construction du G-titre
    this.classList.add('custom-g-titre'); // Ajout de la classe "custom-g-titre"
    this.style.display = 'block';
    this.style.fontWeight = 'bold';
    this.style.marginBottom = '10px';
  }
}

// Définir la classe du G-paragraph
class GParagraph extends HTMLElement {
  connectedCallback() {
    // Logique de construction du G-paragraph
    this.classList.add('custom-g-paragraph'); // Ajout de la classe "custom-g-paragraph"
    this.style.display = 'block';
    this.style.marginBottom = '10px';
  }
}

// ... (Définitions des autres classes de formes géométriques)

// Enregistrer les éléments personnalisés
customElements.define('g-bloc', GBloc);
customElements.define('g-titre', GTitre);
customElements.define('g-paragraph', GParagraph);
// ... (Enregistrement des autres éléments personnalisés)

// Ajouter du CSS en JavaScript (utilisation de la balise <style>)
const customStyles = `
  /* Style pour le G-bloc */
  .custom-g-bloc {
    background-color: #f7f7f7;
  }

  /* Style pour le G-titre */
  .custom-g-titre {
    color: blue;
  }

  /* Style pour le G-paragraph */
  .custom-g-paragraph {
    font-style: italic;
  }

  /* Ajoutez ici les styles pour les autres classes personnalisées */
`;

const styleTag = document.createElement('style');
styleTag.textContent = customStyles;
document.head.appendChild(styleTag);
