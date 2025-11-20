// Book Now Button Component
class BookNowButtonComponent extends HTMLElement {
    constructor() {
        super();
        this.lastScrollTop = 0;
        this.handleScroll = this.handleScroll.bind(this);
    }

    connectedCallback() {
        this.innerHTML = `
            <button class="book-now-button" onclick="document.dispatchEvent(new CustomEvent('openBookingModal'))">
                Book Now
            </button>
        `;

        // Add scroll listener
        window.addEventListener('scroll', this.handleScroll);
        
        // Initial check
        this.handleScroll();
    }

    disconnectedCallback() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const button = this.querySelector('.book-now-button');
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Check if mobile (button is at bottom)
        const isMobile = window.innerWidth <= 700;
        
        if (isMobile) {
            // Mobile: Show/hide based on scroll direction
            if (currentScrollTop <= 50) {
                // At top of page - always show
                button.classList.add('visible');
            } else if (currentScrollTop > this.lastScrollTop) {
                // Scrolling down - hide
                button.classList.remove('visible');
            } else {
                // Scrolling up - show
                button.classList.add('visible');
            }
        } else {
            // Desktop: Always visible
            button.classList.add('visible');
        }
        
        this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    }
}

// Register the new element
customElements.define('book-now-button', BookNowButtonComponent);