function createLogoElement(id, options = {}) {
  const logoElement = document.createElement('g-png');
  const imageUrl = `https://source-devMG.github.io/api/logo/${id}.png`;
  logoElement.style.backgroundImage = `url(${imageUrl})`;

  // Utiliser les attributs pour le CSS
  for (const [attribute, value] of Object.entries(options)) {
    logoElement.style[attribute] = value;
  }

  return logoElement;
}

// Exemple d'utilisation :
const logoContainer = document.getElementById('logo-container');
const options = {
  width: '100px',
  height: '100px',
  border: '1px solid black',
  'border-radius': '50%', // Les attributs CSS avec des tirets doivent être mis entre guillemets
};
const logoElement = createLogoElement('id-du-logo', options);
logoContainer.appendChild(logoElement);
