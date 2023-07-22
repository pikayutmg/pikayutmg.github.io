// Sélectionnez l'élément p pour lequel vous souhaitez appliquer le dégradé au texte
const texteDegrade = document.getElementById('b-v');

// Appliquez le dégradé au texte en utilisant les propriétés CSS "background-image" et "background-clip"
texteDegrade.style.backgroundImage = `linear-gradient(to right, ${blue}, ${green})`;
texteDegrade.style.backgroundClip = 'text';
texteDegrade.style.color = 'transparent';
