// js/components/icon-nav-component.js
class IconNavComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <nav>
          <a href="tel:3462910862" title="call" target="_top" onclick="playSound('sounds/smallPop.wav');">
            <i class="fa fa-phone"></i>
          </a>
  
          <a href="mailto:stevenraysimon@gmail.com" title="email" target="_top" onclick="playSound('sounds/smallPop.wav');">
            <i class="fa fa-envelope"></i>
          </a>
  
          <a href="https://www.instagram.com/stevensimon50" title="instagram" target="_blank" onclick="trackInstagramClick();">
            <i class="fa fa-instagram"></i>
          </a>
  
          <a href="https://paypal.me/stevensimon50" title="paypal" target="_blank" onclick="playSound('sounds/smallPop.wav');">
            <i class="fa fa-paypal"></i>
          </a>
  
          <!-- Venmo SVG Icon -->
          <a href="https://venmo.com/u/Steven-Simon-5" title="venmo" target="_blank" onclick="playSound('sounds/smallPop.wav');">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-90 -90 400 400" fill="currentColor">
                <path d="M 62.190713,183.0334 C 61.881983,181.72645 37.169133,33.878403 36.714583,30.618964 l -0.18641,-1.336731 1.25636,-0.183356 c 5.53037,-0.807115 54.065574,-5.184307 54.3245,-4.899306 0.118494,0.130425 0.427675,1.928909 0.687068,3.996631 0.259394,2.067723 2.947643,23.410078 5.973884,47.427457 7.816185,62.032111 7.317095,58.272161 7.734925,58.272161 0.59631,0 5.85271,-9.10299 10.85434,-18.79747 10.17892,-19.729414 16.84283,-39.319229 17.87254,-52.539686 0.85456,-10.971757 -0.71206,-21.861822 -4.51401,-31.378231 -0.15209,-0.38069 0.046,-0.552587 0.91353,-0.792882 1.46316,-0.405257 48.78594,-9.854932 49.35227,-9.854932 0.4901,0 3.34017,5.381824 4.82417,9.109543 1.40418,3.527208 3.11964,10.640808 3.499,14.509501 0.54856,5.594067 0.18435,16.925551 -0.70983,22.084659 -2.45803,14.182077 -7.94177,29.49263 -16.98288,47.416068 -9.56125,18.95459 -22.84523,39.76916 -41.47874,64.99275 l -3.46928,4.69627 -13.73661,0.003 c -7.55514,0.002 -22.02499,0.0896 -32.155222,0.19497 L 62.355583,183.731 Z"/>
            </svg>
          </a>
        </nav>
      `;
    }
  }
  
  // Register the custom element
  customElements.define('icon-nav-component', IconNavComponent);
  
