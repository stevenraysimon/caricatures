//Main Nav
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
                    <li><a href="tel:3462910862" title="Call" target="_top" onClick="playSound('sounds/smallPop.wav');">Call</a></li>
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

//Menu
class MenuComponent extends HTMLElement {
    constructor() {
        super();
        // Bind methods to ensure correct 'this' context
        this.closeMenu = this.closeMenu.bind(this);
        this.openMenu = this.openMenu.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
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

        // Add event listeners
        const menuIcon = this.querySelector('.menu-icon');
        const navLinks = this.querySelectorAll('main-nav a');

        menuIcon.addEventListener('click', this.toggleMenu);

        // Close menu when nav links are clicked
        navLinks.forEach(link => {
            link.addEventListener('click', this.closeMenu);
        });

        // Smooth scroll for nav links
        this.setupSmoothScroll();
    }

    closeMenu() {
        const mainNav = this.querySelector('.mainnav');
        const barOne = this.querySelector('#barOne');
        const barTwo = this.querySelector('#barTwo');
        const blackOverlay = this.querySelector('.blackOverlay');
        const bars = this.querySelectorAll('.bar');

        // Reset bar styles with transition
        barTwo.style.marginTop = '5px';
        barOne.style.transform = 'rotate(0deg)';
        barTwo.style.transform = 'rotate(0deg)';

        // Slide menu out
        mainNav.style.left = '-300px';

        // Fade out overlay after a slight delay to match slide animation
        setTimeout(() => {
            mainNav.style.display = 'none';
            blackOverlay.style.display = 'none';
        }, 300);

        bars.forEach(bar => bar.classList.remove('invert'));
    }

    openMenu() {
        const mainNav = this.querySelector('.mainnav');
        const barOne = this.querySelector('#barOne');
        const barTwo = this.querySelector('#barTwo');
        const blackOverlay = this.querySelector('.blackOverlay');
        const bars = this.querySelectorAll('.bar');

        // Show menu and overlay
        mainNav.style.display = 'block';
        blackOverlay.style.display = 'block';

        // Slight delay to ensure display is set before transition
        requestAnimationFrame(() => {
            mainNav.style.left = '0px';

            // Transform bars
            barTwo.style.marginTop = '-2px';
            barOne.style.transform = 'rotate(45deg)';
            barTwo.style.transform = 'rotate(-45deg)';

            bars.forEach(bar => bar.classList.add('invert'));
        });
    }

    toggleMenu() {
        const mainNav = this.querySelector('.mainnav');

        if (mainNav.style.display === 'block') {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    setupSmoothScroll() {
        this.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (event) {
                event.preventDefault();

                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);

                if (target) {
                    let scrollPosition;
                    const isHomepage =
                        window.location.href === 'https://stevenraysimon.github.io/caricatures/' ||
                        window.location.pathname === '/index.html';

                    scrollPosition = isHomepage
                        ? target.offsetTop
                        : target.getBoundingClientRect().top + window.pageYOffset;

                    window.scrollTo({
                        top: scrollPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Register the new element
customElements.define('menu-component', MenuComponent);
