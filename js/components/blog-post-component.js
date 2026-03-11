// js/components/blog-post-component.js
class BlogPostComponent extends HTMLElement {

    connectedCallback() {
        // Derive year and slug from the URL
        // Expected path: /blog/2026/tips-for-hiring-a-caricature-artist.html
        //             or /blog/2026/tips-for-hiring-a-caricature-artist/
        const parts = window.location.pathname.replace(/\/$/, '').split('/');
        const year = parts[parts.length - 2];
        const slug = parts[parts.length - 1].replace(/\.html$/, '');

        this._year = year;
        this._slug = slug;

        this._renderLoading();
        this._fetchAndRender(year, slug);
    }

    async _fetchAndRender(year, slug) {
        try {
            const res = await fetch(`/blog/${year}.json`);
            if (!res.ok) throw new Error(`Could not load /blog/${year}.json`);
            const posts = await res.json();
            const post = posts.find(p => p.slug === slug);
            if (!post) throw new Error(`Slug "${slug}" not found in ${year}.json`);
            this._renderPost(post, year);
        } catch (e) {
            this._renderError(e.message);
        }
    }

    _renderLoading() {
        this.innerHTML = `<div class="blog-post__loading">Loading&hellip;</div>`;
    }

    _renderError(msg) {
        this.innerHTML = `<div class="blog-post__loading">Could not load post. ${msg}</div>`;
    }

    _renderPost(post, year) {
        const dateFormatted = post.date
            ? new Date(post.date + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
            : '';

        const pngSrc = post.image.replace(/\.webp$/, '.png');
        const imageHTML = post.image
            ? `<div class="blog-post__image">
                 <picture>
                   <source srcset="${post.image}" type="image/webp">
                   <img src="${pngSrc}" alt="${post.imageAlt || post.title}" loading="lazy">
                 </picture>
               </div>`
            : `<div class="blog-post__image blog-post__image--placeholder">
                 <i class="fa fa-paint-brush"></i>
               </div>`;

        this.innerHTML = `
            <article class="blog-post">

                <div class="blog-post__header">
                    <div class="blog-post__header-inner">
                        ${imageHTML}
                        <div class="blog-post__header-text">
                            <div class="blog-post__meta">
                                ${post.category ? `<span class="blog-post__category">${post.category}</span>` : ''}
                                ${post.date     ? `<time class="blog-post__date" datetime="${post.date}">${dateFormatted}</time>` : ''}
                                ${post.readTime ? `<span class="blog-post__read-time"><i class="fa fa-clock-o"></i> ${post.readTime}</span>` : ''}
                            </div>
                            <h1 class="blog-post__title">${post.title}</h1>
                            <div class="blog-post__byline">By ${post.author || 'Steven Simon'}</div>
                        </div>
                    </div>
                </div>

                <div class="blog-post__body">
                    <div class="blog-post__content">
                        ${post.content || ''}
                    </div>

                    <aside class="blog-post__sidebar">
                        <div class="blog-post__cta-card">
                            <h3>Ready to Book?</h3>
                            <p>Bring Steven to your next event — parties, weddings, corporate events, and more.</p>
                            <button onclick="document.dispatchEvent(new CustomEvent('openBookingModal')); playSound('pop');" class="hero-button">Book Now</button>
                        </div>
                        <div class="blog-post__back">
                            <a href="/blog/" class="blog-post__back-link"><i class="fa fa-arrow-left"></i> All Posts</a>
                        </div>
                    </aside>
                </div>

            </article>
        `;
    }
}

customElements.define('blog-post-component', BlogPostComponent);