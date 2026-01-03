// Booking Modal Component
class BookingModalComponent extends HTMLElement {
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
            <div class="offer-modal booking-modal">
                <div class="modal-header">
                    <h3>Book a Caricature Event</h3>
                    <button class="close-x" aria-label="Close">&times;</button>
                </div>
                <div class="modal-body">
                    <form id="bookingForm">
                        <div class="form-group">
                            <label for="eventName">Event Name *</label>
                            <input type="text" class="form-control" id="eventName" name="entry.809706671" required>
                        </div>
                        <div class="form-group">
                            <label for="eventDate">Event Date *</label>
                            <input type="date" class="form-control" id="eventDate" required>
                        </div>
                        <div class="form-group">
                            <label for="startTime">Start Time *</label>
                            <input type="time" class="form-control" id="startTime" required>
                        </div>
                        <div class="form-group">
                            <label for="duration">Duration *</label>
                            <select class="form-control" id="duration" name="entry.1314586163" required>
                                <option value="">Choose</option>
                                <option value="2 hours">2 hours</option>
                                <option value="3 hours">3 hours</option>
                                <option value="4 hours">4 hours</option>
                                <option value="5 hours">5 hours</option>
                                <option value="6 hours">6 hours</option>
                                <option value="7 hours">7 hours</option>
                                <option value="8 hours">8 hours</option>
                                <option value="Other">Other (contact for custom duration)</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="streetAddress">Street Address *</label>
                            <input type="text" class="form-control" id="streetAddress" name="entry.149695362" placeholder="123 Main St" required>
                        </div>
                        <div class="form-group">
                            <label for="city">City *</label>
                            <input type="text" class="form-control" id="city" name="entry.1260204663" required>
                        </div>
                        <div class="form-group">
                            <label for="state">State *</label>
                            <select class="form-control" id="state" name="entry.1419879540" required>
                                <option value="">Choose</option>
                                <option value="Texas">Texas</option>
                                <option value="Louisiana">Louisiana</option>
                                <option value="Oklahoma">Oklahoma</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="pricingOption">Pricing Option *</label>
                            <select class="form-control" id="pricingOption" name="entry.1434650682" required>
                                <option value="">Choose</option>
                                <option value="$100 per hour with a 2 hour minimum">$100 per hour with a 2 hour minimum</option>
                                <option value="$50 travel fee plus $10 per person charge">$50 travel fee plus $10 per person charge</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="contactName">Name *</label>
                            <input type="text" class="form-control" id="contactName" name="entry.1972940262" required>
                        </div>
                        <div class="form-group">
                            <label for="contactEmail">Email *</label>
                            <input type="email" class="form-control" id="contactEmail" name="entry.615244578" required>
                        </div>
                        <div class="form-group">
                            <label for="phoneNumber">Phone Number *</label>
                            <input type="tel" class="form-control" id="phoneNumber" name="entry.1969738538" required>
                        </div>
                        <div class="form-group">
                            <label for="additionalDetails">Additional Details / Special Requests</label>
                            <textarea class="form-control" id="additionalDetails" name="entry.870405518" rows="3"></textarea>
                        </div>
                        <div id="formStatus" class="form-status"></div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn-submit" id="submitBooking">Submit Booking Request</button>
                    <button type="button" class="btn-close">Close</button>
                </div>
            </div>
        `;

        // Add event listeners
        const closeX = this.querySelector('.close-x');
        const closeBtn = this.querySelector('.btn-close');
        const submitBtn = this.querySelector('#submitBooking');
        const overlay = this.querySelector('.modal-overlay');

        closeX.addEventListener('click', this.closeModal);
        closeBtn.addEventListener('click', this.closeModal);
        overlay.addEventListener('click', this.closeModal);
        submitBtn.addEventListener('click', this.handleSubmit);

        // Listen for custom event to open modal
        document.addEventListener('openBookingModal', () => {
            this.openModal();
        });
    }

    closeModal() {
        const modal = this.querySelector('.booking-modal');
        const overlay = this.querySelector('.modal-overlay');
        const form = this.querySelector('#bookingForm');
        const statusDiv = this.querySelector('#formStatus');

        // Scroll modal back to top
        modal.scrollTop = 0;

        // Hide modal and overlay
        modal.style.display = 'none';
        overlay.style.display = 'none';

        // Reset form and status
        form.reset();
        statusDiv.textContent = '';
        statusDiv.className = 'form-status';
    }

    openModal() {
        const modal = this.querySelector('.booking-modal');
        const overlay = this.querySelector('.modal-overlay');

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
        const form = this.querySelector('#bookingForm');
        
        // Check if form is valid before submitting
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
        
        const statusDiv = this.querySelector('#formStatus');
        const submitBtn = this.querySelector('#submitBooking');

        // Get form values
        const eventDate = document.getElementById('eventDate').value;
        const startTime = document.getElementById('startTime').value;

        // Parse date for Google Forms (needs year, month, day)
        const dateObj = new Date(eventDate);
        const year = dateObj.getFullYear();
        const month = dateObj.getMonth() + 1; // JavaScript months are 0-indexed
        const day = dateObj.getDate();

        // Parse time for Google Forms (needs hour, minute)
        const [hours, minutes] = startTime.split(':');

        // Create FormData and add all fields
        const formData = new FormData(form);
        
        // Add the date components separately (Google Forms date format)
        formData.append('entry.1217645345_year', year);
        formData.append('entry.1217645345_month', month);
        formData.append('entry.1217645345_day', day);

        // Add the time components separately (Google Forms time format)
        formData.append('entry.896170272_hour', hours);
        formData.append('entry.896170272_minute', minutes);

        // Disable submit button
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';

        // Google Form URL
        const googleFormUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSetF78TMvrtX5d-DZNubMjySCk4xBM-Fi02HgQNbtABL8W_9A/formResponse';

        fetch(googleFormUrl, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        }).then(() => {
            // Show success message
            statusDiv.className = 'form-status success';
            statusDiv.textContent = 'Thank you! Your booking request has been submitted. We will contact you shortly.';

            // Reset form
            form.reset();

            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit Booking Request';

            // Close modal after 3 seconds
            setTimeout(() => {
                this.closeModal();
            }, 3000);
        }).catch(() => {
            // Show error message
            statusDiv.className = 'form-status error';
            statusDiv.textContent = 'Something went wrong. Please try again.';

            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit Booking Request';
        });
    }
}

// Register the new element
customElements.define('booking-modal', BookingModalComponent);