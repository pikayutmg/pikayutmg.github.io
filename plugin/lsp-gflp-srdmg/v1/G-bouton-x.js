class GBouton1 extends HTMLElement {
    connectedCallback() {
        this.textContent = '';
        this.style.background = 'linear-gradient(45deg, #FF5733, #FFA500)';
        this.style.color = 'white';
        this.style.padding = '8px 16px';
        this.style.border = 'none';
        this.style.cursor = 'pointer';
        this.style.margin = '5px';
    }
}

class GBouton2 extends HTMLElement {
    connectedCallback() {
        this.textContent = '';
        this.style.background = 'linear-gradient(45deg, #FFA500, #FFD700)';
        this.style.color = 'white';
        this.style.padding = '8px 16px';
        this.style.border = 'none';
        this.style.cursor = 'pointer';
        this.style.margin = '5px';
    }
}

class GBouton3 extends HTMLElement {
    connectedCallback() {
        this.textContent = '';
        this.style.background = 'linear-gradient(45deg, #FFD700, #ADFF2F)';
        this.style.color = 'white';
        this.style.padding = '8px 16px';
        this.style.border = 'none';
        this.style.cursor = 'pointer';
        this.style.margin = '5px';
    }
}

class GBouton4 extends HTMLElement {
    connectedCallback() {
        this.textContent = '';
        this.style.background = 'linear-gradient(45deg, #ADFF2F, #32CD32)';
        this.style.color = 'white';
        this.style.padding = '8px 16px';
        this.style.border = 'none';
        this.style.cursor = 'pointer';
        this.style.margin = '5px';
    }
}

class GBouton5 extends HTMLElement {
    connectedCallback() {
        this.textContent = '';
        this.style.background = 'linear-gradient(45deg, #32CD32, #00CED1)';
        this.style.color = 'white';
        this.style.padding = '8px 16px';
        this.style.border = 'none';
        this.style.cursor = 'pointer';
        this.style.margin = '5px';
    }
}

customElements.define('g-bouton-1', GBouton1);
customElements.define('g-bouton-2', GBouton2);
customElements.define('g-bouton-3', GBouton3);
customElements.define('g-bouton-4', GBouton4);
customElements.define('g-bouton-5', GBouton5);
