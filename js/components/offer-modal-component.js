// Offer Modal Component
class OfferModalComponent extends HTMLElement {
    constructor() {
        super();
        // Bind methods to ensure correct 'this' context
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="blackOverlay modal-overlay"></div>
            <div class="offer-modal">
                <div class="modal-header">
                    <h3>Make an Offer</h3>
                    <button class="close-x" aria-label="Close">&times;</button>
                </div>
                <div class="modal-body">
                    <form id="offerForm">
                        <div class="form-group">
                            <label for="autograph">Autograph *</label>
                            <input type="text" class="form-control" id="autograph" name="entry.2128365415" readonly required>
                        </div>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" name="entry.198405434">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" name="entry.1189469493">
                        </div>
                        <div class="form-group">
                            <label for="offer">Offer Amount</label>
                            <input type="text" class="form-control" id="offer" name="entry.855884435" placeholder="$">
                        </div>
                        <div id="formStatus" class="form-status"></div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn-submit" id="submitOffer">Submit</button>
                    <button type="button" class="btn-close">Close</button>
                </div>
            </div>
        `;

        // Add event listeners
        const closeX = this.querySelector('.close-x');
        const closeBtn = this.querySelector('.btn-close');
        const submitBtn = this.querySelector('#submitOffer');
        const overlay = this.querySelector('.modal-overlay');

        closeX.addEventListener('click', this.closeModal);
        closeBtn.addEventListener('click', this.closeModal);
        overlay.addEventListener('click', this.closeModal);
        submitBtn.addEventListener('click', this.handleSubmit);

        // Listen for custom event to open modal
        document.addEventListener('openOfferModal', (e) => {
            this.openModal(e.detail.autographName);
        });
    }

    closeModal() {
        const modal = this.querySelector('.offer-modal');
        const overlay = this.querySelector('.modal-overlay');
        const form = this.querySelector('#offerForm');
        const statusDiv = this.querySelector('#formStatus');

        // Hide modal and overlay
        modal.style.display = 'none';
        overlay.style.display = 'none';

        // Reset form and status
        form.reset();
        statusDiv.textContent = '';
        statusDiv.className = 'form-status';
    }

    openModal(autographName) {
        const modal = this.querySelector('.offer-modal');
        const overlay = this.querySelector('.modal-overlay');
        const autographInput = this.querySelector('#autograph');

        // Set the autograph name
        autographInput.value = autographName;

        // Show modal and overlay
        overlay.style.display = 'block';
        modal.style.display = 'block';

        // Slight delay to ensure display is set before transition
        requestAnimationFrame(() => {
            overlay.style.opacity = '1';
            modal.style.opacity = '1';
            modal.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    }

    handleSubmit() {
        const form = this.querySelector('#offerForm');
        const formData = new FormData(form);
        const statusDiv = this.querySelector('#formStatus');
        const submitBtn = this.querySelector('#submitOffer');

        // Disable submit button
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';

        // Google Form URL
        const googleFormUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScRUxj2a5xFIwqTPzNWt4ci4i7G06WFL7K5KCq-G_O-PVuaPg/formResponse';

        fetch(googleFormUrl, {
            method: 'POST',
            body: formData,
            mode: 'no-cors' // Important: Google Forms doesn't support CORS
        }).then(() => {
            // Show success message
            statusDiv.className = 'form-status success';
            statusDiv.textContent = 'Thank you! Your offer has been submitted.';

            // Reset form
            form.reset();

            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit';

            // Close modal after 2 seconds
            setTimeout(() => {
                this.closeModal();
            }, 2000);
        }).catch(() => {
            // Show error message
            statusDiv.className = 'form-status error';
            statusDiv.textContent = 'Something went wrong. Please try again.';

            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit';
        });
    }
}

// Register the new element
customElements.define('offer-modal', OfferModalComponent);