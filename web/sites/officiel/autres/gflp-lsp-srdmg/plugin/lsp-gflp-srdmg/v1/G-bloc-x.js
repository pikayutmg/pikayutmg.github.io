class GBloc1 extends HTMLElement {
    connectedCallback() {
        this.style.display = 'block';
        this.style.padding = '10px';
        this.style.marginBottom = '20px';
        this.style.border = '5px solid';
        this.style.backgroundClip = 'padding-box';
        this.style.borderImage = this.getGradientBorder('FF5733', 'FFA500');
    }

    getGradientBorder(color1, color2) {
        return `linear-gradient(45deg, #${color1}, #${color2}) 1`;
    }
}

class GBloc2 extends HTMLElement {
    connectedCallback() {
        this.style.display = 'block';
        this.style.padding = '10px';
        this.style.marginBottom = '20px';
        this.style.border = '5px solid';
        this.style.backgroundClip = 'padding-box';
        this.style.borderImage = this.getGradientBorder('FFA500', 'FFD700');
    }

    getGradientBorder(color1, color2) {
        return `linear-gradient(45deg, #${color1}, #${color2}) 1`;
    }
}

class GBloc3 extends HTMLElement {
    connectedCallback() {
        this.style.display = 'block';
        this.style.padding = '10px';
        this.style.marginBottom = '20px';
        this.style.border = '5px solid';
        this.style.backgroundClip = 'padding-box';
        this.style.borderImage = this.getGradientBorder('FFD700', 'ADFF2F');
    }

    getGradientBorder(color1, color2) {
        return `linear-gradient(45deg, #${color1}, #${color2}) 1`;
    }
}

class GBloc4 extends HTMLElement {
    connectedCallback() {
        this.style.display = 'block';
        this.style.padding = '10px';
        this.style.marginBottom = '20px';
        this.style.border = '5px solid';
        this.style.backgroundClip = 'padding-box';
        this.style.borderImage = this.getGradientBorder('ADFF2F', '32CD32');
    }

    getGradientBorder(color1, color2) {
        return `linear-gradient(45deg, #${color1}, #${color2}) 1`;
    }
}

class GBloc5 extends HTMLElement {
    connectedCallback() {
        this.style.display = 'block';
        this.style.padding = '10px';
        this.style.marginBottom = '20px';
        this.style.border = '5px solid';
        this.style.backgroundClip = 'padding-box';
        this.style.borderImage = this.getGradientBorder('32CD32', '00CED1');
    }

    getGradientBorder(color1, color2) {
        return `linear-gradient(45deg, #${color1}, #${color2}) 1`;
    }
}

customElements.define('g-bloc-1', GBloc1);
customElements.define('g-bloc-2', GBloc2);
customElements.define('g-bloc-3', GBloc3);
customElements.define('g-bloc-4', GBloc4);
customElements.define('g-bloc-5', GBloc5);
          
