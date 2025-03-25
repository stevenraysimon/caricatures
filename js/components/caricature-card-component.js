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

        // Render the HTML structure
        this.innerHTML = `
        <div class="caricature">
          <picture>
            <source srcset="${webpSrc}" type="image/webp" sizes="(max-width: 600px) 100vw, 50vw" width="400" height="450" loading="lazy">
            <img src="${jpgSrc}" alt="${name}" title="${name}" width="400" height="450" style="max-width: 100%; height: auto;" loading="lazy">
          </picture>
          <p class="text">${name}</p>
        </div>
      `;
    }
}

// Register the new element
customElements.define('caricature-card', CaricatureCard);
