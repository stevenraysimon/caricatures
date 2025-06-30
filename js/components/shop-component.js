// items.js - Centralized item data storage
const shopItems = [
    {
        name: "Drake Bell",
        price: 180,
        frontImage: "items/drake-front.png",
        backImage: "items/drake-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/E54CEU9EJT52N",
        soldOut: false
    },
    {
        name: "Howie Mandel",
        price: 200,
        frontImage: "items/howieMandel-front.png",
        backImage: "items/howieMandel-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/K8CMZRLZR2536",
        soldOut: false
    },
    {
        name: "Jim 'Mattress Mack' McIngvale",
        price: 60,
        frontImage: "items/mattressMack-front.png",
        backImage: "items/mattressMack-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/UH4CM6LPS2S3W",
        soldOut: true
    },
    {
        name: "Joel Osteen",
        price: 100,
        frontImage: "items/joelOsteen-front.png",
        backImage: "items/joelOsteen-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/P5DM9SM5Y8E98",
        soldOut: false
    },
    {
        name: "Kane",
        price: 150,
        frontImage: "items/kane-front.png",
        backImage: "items/kane-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/TWQ6R88D7J5L2",
        soldOut: true
    },
    {
        name: "Kurt Angle",
        price: 150,
        frontImage: "items/kurtAngle-front.png",
        backImage: "items/kurtAngle-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/LK2H45RCN946Q",
        soldOut: false
    },
    {
        name: "Larry Bird",
        price: 300,
        frontImage: "items/larryBird-front.png",
        backImage: "items/larryBird-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/BKG4AZ7ES2LBA",
        soldOut: false
    },
    {
        name: "Bam Margera",
        price: 180,
        frontImage: "items/bam-front.png",
        backImage: "items/bam-back.png",
        paypalLink: "#",
        soldOut: true
    },
    {
        name: "Mara 'Matilda' Wilson",
        price: 200,
        frontImage: "items/maraWilson-front.png",
        backImage: "items/maraWilson-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/NE66W2QXAY8ZW",
        soldOut: false
    },
    {
        name: "Mike Tyson",
        price: 300,
        frontImage: "items/mikeTyson-front.png",
        backImage: "items/mikeTyson-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/5VBU2H96AVEZ8",
        soldOut: true
    },
    {
        name: "Ozzy Osbourne",
        price: 400,
        frontImage: "items/ozzyOsbourne-front.png",
        backImage: "items/ozzyOsbourne-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/DURDGAGM3EC7Y",
        soldOut: false
    },
    {
        name: "Paul Wall",
        price: 150,
        frontImage: "items/paulWall-front.png",
        backImage: "items/paulWall-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/UTU3PHN8FTZPN",
        soldOut: false
    },
    {
        name: "Radney Foster",
        price: 100,
        frontImage: "items/radneyFoster-front.png",
        backImage: "items/radneyFoster-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/R6AA8KXGGRDJ8",
        soldOut: false
    },
    {
        name: "Ric Flair",
        price: 180,
        frontImage: "items/ricFlair-front.png",
        backImage: "items/ricFlair-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/LHH8NWVKJ8Y66",
        soldOut: false
    },
    {
        name: "The Big Show",
        price: 200,
        frontImage: "items/bigShow-front.png",
        backImage: "items/bigShow-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/4CTN2H9RW2R5L",
        soldOut: false
    },
    {
        name: "Bill Farmer",
        price: 150,
        frontImage: "items/billFarmer-front.png",
        backImage: "items/billFarmer-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/ZSZF9JPB2C4UQ",
        soldOut: false
    },
    {
        name: "Bulk and Skull",
        price: 200,
        frontImage: "items/bulkSkull-front.png",
        backImage: "items/bulkSkull-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/P47F87GKAY38Y",
        soldOut: false
    },
    {
        name: "Butch Hartman (Danny Phantom)",
        price: 200,
        frontImage: "items/butch-dannyPhantom-front.png",
        backImage: "items/butch-dannyPhantom-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/DYLZ4Z73CT236",
        soldOut: false
    },
    {
        name: "Butch Hartman (Fairly OddParents)",
        price: 200,
        frontImage: "items/butch-oddParents-front.png",
        backImage: "items/butch-oddParents-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/ZUHUWN7EXYV2J",
        soldOut: false
    },
    {
        name: "Jason Marsden",
        price: 150,
        frontImage: "items/jasonMarsden-front.png",
        backImage: "items/jasonMarsden-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/NBHEW6SCW2K86",
        soldOut: false
    },
    {
        name: "Kathleen Herles",
        price: 150,
        frontImage: "items/kathleenHerles-front.png",
        backImage: "items/kathleenHerles-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/32PU5EAZHUBHE",
        soldOut: false
    },
    {
        name: "Married With... Children",
        price: 300,
        frontImage: "items/married-front.png",
        backImage: "items/married-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/B8F6XA8RUS87S",
        soldOut: false
    },
    {
        name: "Dawes Band - Unsigned<br><strong>Profits for LA Wildfires</strong>",
        price: 60,
        frontImage: "items/dawes-front.png",
        backImage: "items/dawes-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/P9SMTVG522Y86",
        soldOut: false
    },
    {
        name: "Newsboys",
        price: 150,
        frontImage: "items/newsboys-front.png",
        backImage: "items/newsboys-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/KL85KV3URRS8J",
        soldOut: false
    },
    {
        name: "Donald Trump - Unsigned Limited Edition",
        price: 60,
        frontImage: "items/trump-front.png",
        backImage: "items/trump-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/2443F45QES4ZA",
        soldOut: true
    },
    {
        name: "Hulk Hogan",
        price: 300,
        frontImage: "items/hulk-front.png",
        backImage: "items/hulk-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/H7RYTNBREVBUG",
        soldOut: false
    },
    {
        name: "Rick Trevino",
        price: 100,
        frontImage: "items/rick-front.png",
        backImage: "items/rick-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/5D9LMSCYFXDGL",
        soldOut: false
    },
    {
        name: "Ben Kweller",
        price: 100,
        frontImage: "items/benk-front.png",
        backImage: "items/benk-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/NY478MEZCXNGS",
        soldOut: false
    },
    {
        name: "Chris Mintz-Plasse",
        price: 100,
        frontImage: "items/mclovin-front.png",
        backImage: "items/mclovin-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/3APT6BRN3YV9Q",
        soldOut: false
    },
    {
        name: "Matthew Koma - Unsigned<br><strong>Profits for LA Wildfires</strong>",
        price: 60,
        frontImage: "items/matthewKoma-front.png",
        backImage: "items/matthewKoma-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/N6KPKGGVAKT3J",
        soldOut: false
    },
    {
        name: "Austin St. John",
        price: 180,
        frontImage: "items/austin-st-john-front.png",
        backImage: "items/austin-st-john-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/87CJ9EWUHEMDY",
        soldOut: false
    },
    {
        name: "Squire Fridell, Ronald McDonald",
        price: 100,
        frontImage: "items/squire-front.png",
        backImage: "items/squire-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/ANL6TGG9BAQL6",
        soldOut: false
    }
];

class ShopComponent extends HTMLElement {
    constructor() {
        super();
        // Bind methods to ensure correct 'this' context
        this.createItemHTML = this.createItemHTML.bind(this);
        this.renderItems = this.renderItems.bind(this);
        // Add event listener in the constructor to ensure it's only added once
        this.addEventListener('click', this.handleFlipButtonClick);
    }

    connectedCallback() {
        this.innerHTML = `
          <div class="shop-autographs">
            <div class="row">
              <div class="content">
                <div class="inside-wrapper">
                  <h3 class="center">Autographs</h3>
                  <p class="center">Each caricature is hand-signed by the celebrity and authenticated by <a href="https://www.spenceloa.com/verify-authenticity" target="_blank">JSA</a>. I sign each one too—since I drew it! They're one-of-a-kind. Once they're gone, they're gone!</p>
                </div>
              </div>
            </div>
          </div>
        `;

        this.renderItems(shopItems);
        this.initSortingControls();
    }

    // Function to create item HTML
    createItemHTML(item) {
        const itemClass = item.soldOut ? 'item sold-out' : 'item';
        const buttonContent = item.soldOut
            ? '<p class="sold-out-label"><strong>SOLD</strong></p>'
            : `<form action="${item.paypalLink}" method="post" target="_top"
                style="display:inline-grid;justify-items:center;align-content:start;gap:0.5rem;">
                <input type="submit" value="Buy Now" />
                <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
                <section> Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg"
                    alt="paypal" style="height:0.875rem;vertical-align:middle;" /></section>
            </form>`;

        return `
        <div class="${itemClass}">
            <div class="image-container">
                <img class="front" src="${item.frontImage}" title="${item.name}" />
                <img class="back" src="${item.backImage}" title="${item.name}" />
            </div>
            <div class="text">
                <button class="flipButton">Flip to Back <i class="fa fa-mail-reply"></i></button>
                <h3>$${item.price}</h3>
                <p>${item.name}</p>
                ${buttonContent}
            </div>
        </div>`;
    }

    // Move flip button logic to a separate method
    handleFlipButtonClick(event) {
        const flipButton = event.target.closest('.flipButton');

        if (flipButton) {
            const imageContainer = flipButton.closest('.item').querySelector('.image-container');
            imageContainer.classList.toggle('flipped');

            if (imageContainer.classList.contains('flipped')) {
                flipButton.innerHTML = 'Flip to Front <i class="fa fa-mail-forward"></i>';
            } else {
                flipButton.innerHTML = 'Flip to Back <i class="fa fa-mail-reply"></i>';
            }
        }
    }

    renderItems(items) {
        const shopContainer = this.querySelector('.shop-autographs');

        // Remove all existing rows except the first description row
        const existingRows = shopContainer.querySelectorAll('.row.content');
        existingRows.forEach(row => row.remove());

        // Group items into rows of 4
        for (let i = 0; i < items.length; i += 4) {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'row content';

            // Add up to 4 items to this row
            const rowItems = items.slice(i, i + 4);
            rowItems.forEach(item => {
                rowDiv.innerHTML += this.createItemHTML(item);
            });

            // Append row to the shop container
            shopContainer.appendChild(rowDiv);
        }
    }

    attachFlipButtonListeners() {
        // Use event delegation to handle flip buttons
        this.addEventListener('click', (event) => {
            const flipButton = event.target.closest('.flipButton');

            if (flipButton) {
                const imageContainer = flipButton.closest('.item').querySelector('.image-container');
                imageContainer.classList.toggle('flipped');

                if (imageContainer.classList.contains('flipped')) {
                    flipButton.innerHTML = 'Flip to Front <i class="fa fa-mail-forward"></i>';
                } else {
                    flipButton.innerHTML = 'Flip to Back <i class="fa fa-mail-reply"></i>';
                }
            }
        });
    }

    sortItemsAlphabetically(items) {
        return items.sort((a, b) => a.name.localeCompare(b.name));
    }

    sortItemsByPriceLowToHigh(items) {
        return items.sort((a, b) => a.price - b.price);
    }

    sortItemsByPriceHighToLow(items) {
        return items.sort((a, b) => b.price - a.price);
    }

    filterAvailableItems(items) {
        return items.filter(item => !item.soldOut);
    }

    filterSoldItems(items) {
        return items.filter(item => item.soldOut);
    }

    initSortingControls() {
        const sortingContainer = document.createElement('div');
        sortingContainer.className = 'sorting-controls';
        sortingContainer.innerHTML = `
            <label for="sort-select">Sort by: </label>
            <select id="sort-select">
                <option value="default">Default</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="available">Available</option>
                <option value="sold">Sold</option>
            </select>
        `;

        const firstRow = this.querySelector('.row');
        firstRow.insertAdjacentElement('afterend', sortingContainer);

        sortingContainer.querySelector('#sort-select').addEventListener('change', (event) => {
            let filteredItems = [...shopItems];

            switch (event.target.value) {
                case 'alphabetical':
                    filteredItems = this.sortItemsAlphabetically(filteredItems);
                    break;
                case 'price-low':
                    filteredItems = this.sortItemsByPriceLowToHigh(filteredItems);
                    break;
                case 'price-high':
                    filteredItems = this.sortItemsByPriceHighToLow(filteredItems);
                    break;
                case 'available':
                    filteredItems = this.filterAvailableItems(filteredItems);
                    break;
                case 'sold':
                    filteredItems = this.filterSoldItems(filteredItems);
                    break;
                default:
                    break;
            }

            this.renderItems(filteredItems);
        });
    }
}

customElements.define('shop-component', ShopComponent);