class CaricatureCard extends HTMLElement {
    constructor() {
        super();
    }

    // When the component is connected to the DOM
    connectedCallback() {
        // Get the attributes from the component tag
        const name = this.getAttribute('name') || 'Default Name';
        const webpSrc = this.getAttribute('webp-src') || '';
        const jpgSrc = this.getAttribute('jpg-src') || '';

        // Render the HTML structure directly without Shadow DOM
        // This will allow your main styles to apply to these elements
        this.innerHTML = `
        <div class="caricature">
          <picture>
            <source srcset="${webpSrc}" type="image/webp" sizes="(max-width: 600px) 100vw, 50vw" width="400" height="450">
            <img src="${jpgSrc}" alt="${name}" title="${name}" width="400" height="450" loading="lazy" style="max-width: 100%; height: auto;">
          </picture>
          <p class="text">${name}</p>
        </div>
      `;
    }
}

// Register the custom element
customElements.define('caricature-card', CaricatureCard);