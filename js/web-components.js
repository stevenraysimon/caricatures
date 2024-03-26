class MainNav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';
        const basePath = isHomePage ? '' : '#';

        this.innerHTML = `
            <div class="mainnav">
                <ul>
                    <li><a href="${basePath}pricing" title="Pricing">Pricing</a></li>
                    <li><a href="${basePath}travel" title="Travel">Travel</a></li>
                    <li><a href="${basePath}questions" title="Questions">Questions</a></li>
                    <li><a href="${basePath}reviews" title="Reviews">Reviews</a></li>
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

customElements.define('main-nav', MainNav);
