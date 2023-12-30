// Définir la classe du G-bloc
class GBloc extends HTMLElement {
  connectedCallback() {
    // Logique de construction du G-bloc
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
    this.style.display = 'block';
    this.style.fontWeight = 'bold';
    this.style.marginBottom = '10px';
  }
}

// Définir la classe du G-paragraph
class GParagraph extends HTMLElement {
  connectedCallback() {
    // Logique de construction du G-paragraph
    this.style.display = 'block';
    this.style.marginBottom = '10px';
  }
}

// Définir la classe du G-bouton
class GBouton extends HTMLElement {
  connectedCallback() {
    // Logique de construction du G-bouton
    this.style.display = 'inline-block';
    this.style.padding = '8px 16px';
    this.style.backgroundColor = '#f5f5f5';
    this.style.border = '1px solid #ddd';
    this.style.cursor = 'pointer';
  }
}

// Définir la classe du G-rond
class GRond extends HTMLElement {
  connectedCallback() {
    // Récupérer les attributs personnalisés
    const rayon = this.getAttribute('rayon') || '50';
    const couleur = this.getAttribute('couleur') || 'gray';

    // Logique de construction du G-rond
    this.style.display = 'inline-block';
    this.style.width = `${rayon * 2}px`;
    this.style.height = `${rayon * 2}px`;
    this.style.backgroundColor = couleur;
    this.style.borderRadius = '50%';
  }
}

// Définir la classe du G-rectangle
class GRectangle extends HTMLElement {
  connectedCallback() {
    // Récupérer les attributs personnalisés
    const largeur = this.getAttribute('largeur') || '100';
    const hauteur = this.getAttribute('hauteur') || '50';
    const couleur = this.getAttribute('couleur') || 'gray';

    // Logique de construction du G-rectangle
    this.style.display = 'inline-block';
    this.style.width = `${largeur}px`;
    this.style.height = `${hauteur}px`;
    this.style.backgroundColor = couleur;
  }
}

// Définir la classe du G-carre
class GCarre extends HTMLElement {
  connectedCallback() {
    // Récupérer les attributs personnalisés
    const taille = this.getAttribute('taille') || '100';
    const couleur = this.getAttribute('couleur') || 'gray';

    // Logique de construction du G-carre
    this.style.display = 'inline-block';
    this.style.width = `${taille}px`;
    this.style.height = `${taille}px`;
    this.style.backgroundColor = couleur;
  }
}

// Définir la classe du G-triangle
class GTriangle extends HTMLElement {
  connectedCallback() {
    // Récupérer les attributs personnalisés
    const base = this.getAttribute('base') || '100';
    const hauteur = this.getAttribute('hauteur') || '100';
    const couleur = this.getAttribute('couleur') || 'gray';

    // Logique de construction du G-triangle
    this.style.display = 'inline-block';
    this.style.width = '0';
    this.style.height = '0';
    this.style.borderLeft = `${base}px solid transparent`;
    this.style.borderRight = `${base}px solid transparent`;
    this.style.borderBottom = `${hauteur}px solid ${couleur}`;
  }
}

// Définir la classe du G-octogone
class GOctogone extends HTMLElement {
  connectedCallback() {
    // Récupérer les attributs personnalisés
    const taille = this.getAttribute('taille') || '100';
    const couleur = this.getAttribute('couleur') || 'gray';

    // Logique de construction du G-octogone
    this.style.display = 'inline-block';
    this.style.width = `${taille}px`;
    this.style.height = `${taille}px`;
    this.style.backgroundColor = couleur;
    this.style.clipPath = 'polygon(50% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)';
  }
}

// ... Ajoutez d'autres classes pour les formes géométriques supplémentaires

// Enregistrer les éléments personnalisés
customElements.define('g-bloc', GBloc);
customElements.define('g-titre', GTitre);
customElements.define('g-paragraph', GParagraph);
customElements.define('g-bouton', GBouton);
customElements.define('g-rond', GRond);
customElements.define('g-rectangle', GRectangle);
customElements.define('g-carre', GCarre);
customElements.define('g-triangle', GTriangle);
customElements.define('g-octogone', GOctogone);
      
