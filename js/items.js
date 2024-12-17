// items.js - Centralized item data storage
const shopItems = [
    {
        name: "Drake Bell",
        price: 180,
        frontImage: "items/drake-front.png",
        backImage: "items/drake-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/E54CEU9EJT52N"
    },
    {
        name: "Howie Mandel",
        price: 200,
        frontImage: "items/howieMandel-front.png",
        backImage: "items/howieMandel-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/K8CMZRLZR2536"
    },
    {
        name: "Jim 'Mattress Mack' McIngvale",
        price: 60,
        frontImage: "items/mattressMack-front.png",
        backImage: "items/mattressMack-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/UH4CM6LPS2S3W"
    },
    {
        name: "Joel Osteen",
        price: 100,
        frontImage: "items/joelOsteen-front.png",
        backImage: "items/joelOsteen-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/P5DM9SM5Y8E98"
    },
    {
        name: "Kane",
        price: 150,
        frontImage: "items/kane-front.png",
        backImage: "items/kane-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/TWQ6R88D7J5L2"
    },
    {
        name: "Kurt Angle",
        price: 150,
        frontImage: "items/kurtAngle-front.png",
        backImage: "items/kurtAngle-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/LK2H45RCN946Q"
    },
    {
        name: "Larry Bird",
        price: 300,
        frontImage: "items/larryBird-front.png",
        backImage: "items/larryBird-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/BKG4AZ7ES2LBA"
    },
    {
        name: "Mara 'Matilda' Wilson",
        price: 200,
        frontImage: "items/maraWilson-front.png",
        backImage: "items/maraWilson-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/NE66W2QXAY8ZW"
    },
    {
        name: "Mike Tyson",
        price: 300,
        frontImage: "items/mikeTyson-front.png",
        backImage: "items/mikeTyson-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/5VBU2H96AVEZ8"
    },
    {
        name: "Ozzy Osbourne",
        price: 400,
        frontImage: "items/ozzyOsbourne-front.png",
        backImage: "items/ozzyOsbourne-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/DURDGAGM3EC7Y"
    },
    {
        name: "Paul Wall",
        price: 150,
        frontImage: "items/paulWall-front.png",
        backImage: "items/paulWall-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/UTU3PHN8FTZPN"
    },
    {
        name: "Radney Foster",
        price: 100,
        frontImage: "items/radneyFoster-front.png",
        backImage: "items/radneyFoster-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/R6AA8KXGGRDJ8"
    },
    {
        name: "Ric Flair",
        price: 180,
        frontImage: "items/ricFlair-front.png",
        backImage: "items/ricFlair-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/LHH8NWVKJ8Y66"
    },
    {
        name: "The Big Show",
        price: 200,
        frontImage: "items/bigShow-front.png",
        backImage: "items/bigShow-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/4CTN2H9RW2R5L"
    },
    {
        name: "Bill Farmer",
        price: 150,
        frontImage: "items/billFarmer-front.png",
        backImage: "items/billFarmer-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/ZSZF9JPB2C4UQ"
    },
    {
        name: "Bulk and Skull",
        price: 200,
        frontImage: "items/bulkSkull-front.png",
        backImage: "items/bulkSkull-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/P47F87GKAY38Y"
    },
    {
        name: "Butch Hartman (Danny Phantom)",
        price: 200,
        frontImage: "items/butch-dannyPhantom-front.png",
        backImage: "items/butch-dannyPhantom-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/DYLZ4Z73CT236"
    },
    {
        name: "Butch Hartman (Fairly OddParents)",
        price: 200,
        frontImage: "items/butch-oddParents-front.png",
        backImage: "items/butch-oddParents-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/ZUHUWN7EXYV2J"
    },
    {
        name: "Jason Marsden",
        price: 150,
        frontImage: "items/jasonMarsden-front.png",
        backImage: "items/jasonMarsden-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/NBHEW6SCW2K86"
    },
    {
        name: "Kathleen Herles",
        price: 150,
        frontImage: "items/kathleenHerles-front.png",
        backImage: "items/kathleenHerles-back.png",
        paypalLink: "https://www.paypal.com/ncp/payment/32PU5EAZHUBHE"
    }
];

// Function to create item HTML
function createItemHTML(item) {
    return `
    <div class="item">
        <div class="image-container">
            <img class="front" src="${item.frontImage}" title="${item.name}" />
            <img class="back" src="${item.backImage}" title="${item.name}" />
        </div>
        <div class="text">
            <button class="flipButton">Flip to Back <i class="fa fa-mail-reply"></i></button>
            <h3>$${item.price}</h3>
            <p>${item.name}</p>
            <form action="${item.paypalLink}" method="post" target="_top"
                style="display:inline-grid;justify-items:center;align-content:start;gap:0.5rem;">
                <input type="submit" value="Buy Now" />
                <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
                <section> Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg"
                    alt="paypal" style="height:0.875rem;vertical-align:middle;" /></section>
            </form>
        </div>
    </div>`;
}

// Function to render items
function renderItems(items) {
    const shopContainer = document.querySelector('.shop');
    
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
            rowDiv.innerHTML += createItemHTML(item);
        });
        
        // Append row after the first row (which contains the description)
        shopContainer.appendChild(rowDiv);
    }

    // Reattach flip button event listeners
    attachFlipButtonListeners();
}

// Function to attach flip button listeners
function attachFlipButtonListeners() {
    $('.flipButton').click(function() {
        var $button = $(this);
        var $imageContainer = $button.closest('.item').find('.image-container');
        // Toggle the flipped class
        $imageContainer.toggleClass('flipped');
        // Update the button text based on the current state
        if ($imageContainer.hasClass('flipped')) {
            $button.html('Flip to Front <i class="fa fa-mail-forward"></i>');
        } else {
            $button.html('Flip to Back <i class="fa fa-mail-reply"></i>');
        }
    });
}

// Sorting functions
function sortItemsAlphabetically(items) {
    return items.sort((a, b) => a.name.localeCompare(b.name));
}

function sortItemsByPriceLowToHigh(items) {
    return items.sort((a, b) => a.price - b.price);
}

function sortItemsByPriceHighToLow(items) {
    return items.sort((a, b) => b.price - a.price);
}

// Initialize sorting controls
$(document).ready(function() {
    // Create sorting dropdown
    const sortingContainer = document.createElement('div');
    sortingContainer.className = 'sorting-controls';
    sortingContainer.innerHTML = `
        <label for="sort-select">Sort by: </label>
        <select id="sort-select">
            <option value="default">Default</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
        </select>
    `;

    // Insert sorting controls before the shop content
    // const shopContainer = document.querySelector('.shop');
    // shopContainer.insertAdjacentElement('afterbegin', sortingContainer);
    const firstRow = document.querySelector('.row');
    firstRow.insertAdjacentElement('afterend', sortingContainer);

    // Add event listener for sorting
    $('#sort-select').on('change', function() {
        let sortedItems = [...shopItems]; // Create a copy to avoid mutating original array
        
        switch($(this).val()) {
            case 'alphabetical':
                sortedItems = sortItemsAlphabetically(sortedItems);
                break;
            case 'price-low':
                sortedItems = sortItemsByPriceLowToHigh(sortedItems);
                break;
            case 'price-high':
                sortedItems = sortItemsByPriceHighToLow(sortedItems);
                break;
            default:
                // Use original order
                break;
        }

        renderItems(sortedItems);
    });

    // Initial render
    renderItems(shopItems);
});