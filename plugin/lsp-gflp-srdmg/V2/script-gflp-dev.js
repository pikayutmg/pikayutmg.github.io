// Fonction pour créer et ajouter un bouton avec une couleur donnée
function createColoredButton(color) {
  class ColoredButton extends HTMLElement {
    connectedCallback() {
      this.classList.add(`custom-g-bouton-${color.toLowerCase().replace(/\s/g, '-')}`);
      this.style.display = 'inline-block';
      this.style.padding = '8px 16px';
      this.style.backgroundColor = color.toLowerCase();
      this.style.border = '1px solid #ddd';
      this.style.cursor = 'pointer';
      this.textContent = color;
    }
  }

  customElements.define(`g-bouton-${color.toLowerCase().replace(/\s/g, '-')}`, ColoredButton);
  const button = document.createElement(`g-bouton-${color.toLowerCase().replace(/\s/g, '-')}`);
  document.body.appendChild(button);
}

// Liste des couleurs
const colors = [
  'Rouge',
  'Bleu',
  'Vert',
  'Orange',
  'Violet',
  'Beige',
  'Gris',
  'Noir',
  'Blanc',
  'Blanc Neige'
];

// Ajouter les boutons pour chaque couleur
colors.forEach(color => createColoredButton(color));
