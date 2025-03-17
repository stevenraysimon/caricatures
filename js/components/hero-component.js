class HeroComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        requestIdleCallback(() => {
            this.innerHTML = `
                <a name="jump-to-top"></a>
                <div id="hero">
                    <div id="fade">
                        <div id="pattern">
                            <div class="wrapper feature">
                                <header>
                                    <h1 class="hiddenTags">Caricatures by Steven Simon</h1>
                                    <a href="https://stevenraysimon.github.io/caricatures/">
                                        <picture>
                                            <source srcset="https://stevenraysimon.github.io/caricatures/images/logo.webp" type="image/webp" sizes="(max-width: 600px) 80vw, 250px" width="766" height="217">
                                            <img src="https://stevenraysimon.github.io/caricatures/images/logo.png" alt="Caricatures by Steven Simon" title="Caricatures by Steven Simon" class="logo" loading="lazy" style="max-width: 250px; width: 100%; height: auto;" width="766" height="217">
                                        </picture>
                                    </a>
                                    <div class="inside-wrapper">
                                        <p>Hey there! I’m a caricature artist on a mission to bring smiles and laughter to faces, one caricature at a time!</p>
                                    </div><!--inside wrapper-->
                                    <nav>
                                        <a href="tel:3463730801" title="call" target="_top" class="call-link">
                                            <i class="fa fa-phone"></i>
                                        </a>
                                        <a href="mailto:stevenraysimon@gmail.com" title="email" target="_top" class="email-link">
                                            <i class="fa fa-envelope"></i>
                                        </a>
                                        <a href="https://www.instagram.com/stevensimon50" title="instagram" target="_blank" class="instagram-link">
                                            <i class="fa fa-instagram"></i>
                                        </a>
                                        <a href="https://paypal.me/stevensimon50" title="paypal" target="_blank" class="paypal-link">
                                            <i class="fa fa-paypal"></i>
                                        </a>
                                    </nav><!--Closing nav-->
                                </header>
                            </div><!--wrapper-->
                        </div><!--pattern-->
                    </div><!--fade -->
                </div><!--Hero-->
            `;

            // Attach event listeners after the DOM is created
            this._attachEventListeners();
        });
    }

    _attachEventListeners() {
        // Adding event listeners to the elements after the DOM has been updated
        this.querySelector('.call-link').addEventListener('click', () => {
            playSound('sounds/smallPop.wav');
        });

        this.querySelector('.email-link').addEventListener('click', () => {
            playSound('sounds/smallPop.wav');
        });

        this.querySelector('.instagram-link').addEventListener('click', () => {
            trackInstagramClick();
        });

        this.querySelector('.paypal-link').addEventListener('click', () => {
            playSound('sounds/smallPop.wav');
        });
    }
}

// Register the new element
customElements.define('hero-component', HeroComponent);
