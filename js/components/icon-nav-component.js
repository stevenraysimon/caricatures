// js/components/icon-nav-component.js
class IconNavComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav>
                <a href="tel:3463730801" title="call" target="_top" onclick="playSound('sounds/smallPop.wav');">
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
            </nav>
        `;
    }
}

// Register the new element
customElements.define('icon-nav-component', IconNavComponent);
