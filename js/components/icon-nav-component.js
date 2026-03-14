// js/components/icon-nav-component.js
class IconNavComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <nav>
          <a href="tel:3462910862" title="call" target="_top" onclick="playSound('sounds/smallPop.wav');">
            <i class="fa fa-phone"></i>
          </a>
  
          <a href="mailto:stevenraysimon@gmail.com" title="email" target="_top" onclick="playSound('sounds/smallPop.wav');">
            <i class="fa fa-envelope"></i>
          </a>
  
          <a href="https://www.instagram.com/stevensimon50" title="instagram" target="_blank" onclick="trackInstagramClick();">
            <i class="fa fa-instagram"></i>
          </a>
  
          <a href="https://paypal.me/stevensimon50" title="paypal" target="_blank" onclick="playSound('sounds/smallPop.wav');">
            <i class="fa fa-paypal"></i>
          </a>
  
          <!-- Venmo SVG Icon -->
          <a href="https://venmo.com/u/Steven-Simon-5" title="venmo" target="_blank" onclick="playSound('sounds/smallPop.wav');">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="var(--links)" style="display:block; margin-top:-9px;">
              <path d="M21.428 4.4c.77 1.281 1.119 2.601 1.119 4.27 0 5.32-4.541 12.23-8.227 17.08H6.15L2.776 5.563l7.37-.7 1.792 14.362c1.65-2.67 3.815-6.648 3.815-9.52 0-1.594-.273-2.678-.7-3.57z"/>
            </svg>
          </a>
        </nav>
      `;
    }
  }
  
  // Register the custom element
  customElements.define('icon-nav-component', IconNavComponent);