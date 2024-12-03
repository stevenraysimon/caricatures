class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="wrapper footer">
                    <p>Designed and developed by Steven Simon <span id="date">${new Date().getFullYear()}</span></p>
                </div><!--Closing wrapper-->
            </footer><!--Closing footer-->
            <script>
                function trackInstagramClick() {
                    // Send an event to Google Analytics
                    ga('send', 'event', 'Button', 'Click', 'Instagram Follow');
                }
            </script>
        `;
    }
}

// Register the new element
customElements.define('footer-component', FooterComponent);