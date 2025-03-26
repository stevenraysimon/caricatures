class CaricatureCard extends HTMLElement {
    constructor() {
        super();

        // Create a shadow root
        this.attachShadow({ mode: 'open' });

        // Get attributes or use defaults
        const name = this.getAttribute('name') || 'Default Name';
        const webpSrc = this.getAttribute('webp-src') || '';
        const jpgSrc = this.getAttribute('jpg-src') || '';

        // Define minimal styles that use CSS variables from the main stylesheet
        const styles = `
        :host {
          display: block;
          width: 100%;
        }
        
        .caricature {
          /* This will match your main stylesheet's .caricature class */
        }
        
        picture {
          display: block;
          width: 100%;
          aspect-ratio: 400 / 450;
        }
        
        img {
          display: block;
          width: 100%;
          height: auto;
          max-width: 100%;
        }
        
        .text {
          margin: 10px 0;
          text-align: center;
          font-family: var(--font-family, "chaloops", sans-serif);
          color: var(--text-color, inherit);
        }
      `;

        // Create the HTML structure with caricature class and inject the styles
        this.shadowRoot.innerHTML = `
        <style>${styles}</style>
        <div class="caricature">
          <picture>
            <source srcset="${webpSrc}" type="image/webp" sizes="(max-width: 600px) 100vw, 50vw">
            <img src="${jpgSrc}" alt="${name}" title="${name}" width="400" height="450" loading="lazy">
          </picture>
          <p class="text">${name}</p>
        </div>
      `;
    }
}

// Register the custom element
customElements.define('caricature-card', CaricatureCard);

console.log('CaricatureCard web component registered with CSS variable support');