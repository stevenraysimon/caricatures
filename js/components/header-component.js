// js/components/header-component.js
class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <h1 class="hiddenTags">Caricatures by Steven Simon</h1>
                <a href="https://stevenraysimon.github.io/caricatures/">
                    <picture>
                        <source srcset="https://stevenraysimon.github.io/caricatures/images/logo.webp" type="image/webp"
                            sizes="(max-width: 600px) 80vw, 250px" width="766" height="217">
                        <img src="https://stevenraysimon.github.io/caricatures/images/logo.png"
                            alt="Caricatures by Steven Simon" title="Caricatures by Steven Simon" class="logo"
                            style="width: 100%; height: auto;" width="766" height="217">
                    </picture>
                </a>
                <div class="inside-wrapper">
                    <p>Hey there! I’m a caricature artist on a mission to bring smiles and laughter to faces, one caricature
                        at a time!</p>
                </div><!--inside wrapper-->
                <icon-nav-component></icon-nav-component>
            </header>
        `;
    }
}

// Register the new element
customElements.define('header-component', HeaderComponent);
