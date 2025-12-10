// js/components/header-component.js
class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <h1 class="hiddenTags">Caricatures by Steven Simon</h1>
                <a href="/">
                    <picture>
                        <source srcset="/images/logo.webp" type="image/webp"
                            sizes="(max-width: 600px) 80vw, 250px" width="766" height="217">
                        <img src="/images/logo.png"
                            alt="Caricatures by Steven Simon" title="Caricatures by Steven Simon" class="logo"
                            style="width: 100%; height: auto;" width="766" height="217">
                    </picture>
                </a>
                <div class="inside-wrapper">
                    <p>Hey! I’m Steven, a caricature artist creating crisp, classy, cartoonish caricatures. I offer the most affordable caricatures.<br><button onclick="document.dispatchEvent(new CustomEvent('openBookingModal')); playSound('sounds/smallPop.wav');" class="hero-button">Book Now</button></p>
                </div><!--inside wrapper-->
                <icon-nav-component></icon-nav-component>
            </header>
        `;
    }
}

// Register the new element
customElements.define('header-component', HeaderComponent);
