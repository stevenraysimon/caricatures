class MainNavComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const isHomePage = window.location.href === 'https://stevenraysimon.github.io/caricatures/';
        const baseUrl = window.location.origin;
        const basePath = isHomePage ? '#' : baseUrl + '/caricatures#';

        this.innerHTML = `
            <div class="mainnav">
                <ul>
                    <li><a href="https://stevenraysimon.github.io/caricatures/" title="Home">Home</a></li>
                    <li><a href="${basePath}pricing" title="Pricing">Pricing</a></li>
                    <li><a href="${basePath}travel" title="Travel">Travel</a></li>
                    <li><a href="${basePath}questions" title="Questions">Questions</a></li>
                    <li><a href="${basePath}reviews" title="Reviews">Reviews</a></li>
                    <li><a href="https://stevenraysimon.github.io/caricatures/media" title="Media">Media</a></li>
                    <li><a href="https://stevenraysimon.github.io/caricatures/shop" title="Shop">Shop</a></li>
                    <li><a href="mailto:stevenraysimon@gmail.com" title="Email" target="_top"
                        onClick="playSound('sounds/smallPop.wav');">Email</a></li>
                    <li><a href="tel:3463730801" title="Call" target="_top" onClick="playSound('sounds/smallPop.wav');">Call</a></li>
                    <li><a href="https://www.instagram.com/stevensimon50" title="Instagram" target="_blank"
                        onclick="trackInstagramClick();">Instagram</a></li>
                    <li><a href="https://www.facebook.com/people/Caricatures-by-Steven-Simon/61557635126131/?mibextid=LQQJ4d"
                        title="Facebook" target="_blank" onclick="trackInstagramClick();">Facebook</a></li>
                    <li><a href="https://paypal.me/stevensimon50" title="PayPal" target="_blank"
                        onclick="playSound('sounds/smallPop.wav');">PayPal</a></li>
                    <li><a href="https://venmo.com/u/Steven-Simon-5" title="Venmo" target="_blank"
                        onclick="playSound('sounds/smallPop.wav');">Venmo</a></li>
                    <li><a href="https://cash.app/$stevensimon50" title="Cash App" target="_blank"
                        onclick="playSound('sounds/smallPop.wav');">Cash App</a></li>
                </ul>
            </div>
        `;
    }
}

// Register the new element
customElements.define('main-nav', MainNavComponent);

class MenuComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="menu-icon">
                <div class="bar" id="barOne"></div>
                <div class="bar" id="barTwo"></div>
            </div>
            <div class="blackOverlay"></div>
            <main-nav></main-nav>
        `;
    }
}

// Register the new element
customElements.define('menu-component', MenuComponent);
