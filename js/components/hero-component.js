class HeroComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <a name="jump-to-top"></a>
            <div id="hero">
                <div id="fade">
                    <div id="pattern">
                        <div class="wrapper feature">
                            <header>
                                <h1 class="hiddenTags">Caricatures by Steven Simon</h1>
                                <a href="https://stevenraysimon.github.io/caricatures/">
                                    <img src="https://stevenraysimon.github.io/caricatures/images/logo.png" title="Caricatures by Steven Simon" 
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
