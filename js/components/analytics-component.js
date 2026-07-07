// js/components/analytics-component.js
class AnalyticsComponent extends HTMLElement {
    connectedCallback() {
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            window.dataLayer.push(arguments);
        }

        window.gtag = gtag;

        gtag('js', new Date());
        gtag('config', 'G-YHQB2SVCS0'); //stevensimon.art
        gtag('config', 'G-86V1CSS5RL'); //stevenraysimon.github.io/caricatures

        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-YHQB2SVCS0';
        document.head.appendChild(script);
    }
}

customElements.define('analytics-component', AnalyticsComponent);
