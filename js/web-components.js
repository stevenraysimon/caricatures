class MainNav extends HTMLElement {
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

class MenuComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Add the component's HTML structure to the light DOM
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

// Define the custom element
customElements.define('menu-component', MenuComponent);

class HeroComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Adding the hero section's HTML to the component
        this.innerHTML = `
            <a name="jump-to-top"></a>
            <div id="hero">
                <div id="fade">
                    <div id="pattern">
                        <div class="wrapper feature">
                            <header>
                                <h1 class="hiddenTags">Caricatures by Steven Simon</h1>
                                <a href="https://stevenraysimon.github.io/caricatures/">
                                    <img src="images/logo.png" title="Caricatures by Steven Simon" 
                                         alt="Caricatures by Steven Simon" class="logo" />
                                </a>
                                <div class="inside-wrapper">
                                    <p>Hey there! I’m a caricature artist on a mission to bring smiles and laughter to faces, one caricature at a time!</p>
                                </div><!--inside wrapper-->
                                <nav>
                                    <a href="tel:3463730801" title="call" target="_top" onClick="playSound('sounds/smallPop.wav');">
                                        <i class="fa fa-phone"></i>
                                    </a>
                                    <a href="mailto:stevenraysimon@gmail.com" title="email" target="_top" onClick="playSound('sounds/smallPop.wav');">
                                        <i class="fa fa-envelope"></i>
                                    </a>
                                    <a href="https://www.instagram.com/stevensimon50" title="instagram" target="_blank" onclick="trackInstagramClick();">
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                    <a href="https://paypal.me/stevensimon50" title="paypal" target="_blank" onclick="playSound('sounds/smallPop.wav');">
                                        <i class="fa fa-paypal"></i>
                                    </a>
                                </nav><!--Closing nav-->
                            </header>
                        </div><!--wrapper-->
                    </div><!--pattern-->
                </div><!--fade -->
            </div><!--Hero-->
        `;
    }
}

// Register the new element
customElements.define('hero-component', HeroComponent);


