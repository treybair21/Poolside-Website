// Header HTML
const headerHTML = `<a href="#main-content" class="skip-nav">Skip to main content</a>
<nav role="navigation" aria-label="Main navigation">
    <div class="logo">
        <a href="/">
            <img src="pbb-logo-horizontal.png" alt="Poolside Business Brokers - Home">
        </a>
    </div>
    <button class="mobile-menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="navLinks" onclick="toggleMenu()">&#9776;</button>
    <ul class="nav-links" id="navLinks" role="menubar">
        <li role="none"><a href="/" role="menuitem">Home</a></li>
        <li role="none"><a href="/about-us" role="menuitem">About</a></li>
        <li role="none"><a href="/sellers" role="menuitem">Sellers</a></li>
        <li role="none"><a href="/buyers" role="menuitem">Buyers</a></li>
        <li role="none"><a href="/routes-for-sale" role="menuitem">Routes for Sale</a></li>
        <li role="none"><a href="/contact" role="menuitem">Contact</a></li>
        <li role="none"><a href="tel:+15126937086" class="phone-btn" role="menuitem">(512) 693-7086</a></li>
    </ul>
</nav>`;

// Footer HTML
const footerHTML = `<footer role="contentinfo">
    <div class="footer-content">
        <div class="footer-section">
            <img src="pbb-logo-vertical-white.png" alt="Poolside Business Brokers" class="footer-logo">
            <p>Sell-side advisory for pool service businesses. Industry-low 12% commission. Nationwide coverage.</p>
        </div>

        <div class="footer-section">
            <h3>Contact</h3>
            <ul>
                <li><a href="tel:+15126937086">(512) 693-7086</a></li>
                <li><a href="mailto:info@poolsidebrokers.com">info@poolsidebrokers.com</a></li>
                <li style="color: rgba(255,255,255,0.5); font-size: 0.95em;">Serving All 50 States</li>
            </ul>
        </div>

        <div class="footer-section">
            <h3>Navigation</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/sellers">For Sellers</a></li>
                <li><a href="/buyers">For Buyers</a></li>
                <li><a href="/routes-for-sale">Routes for Sale</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>

        <div class="footer-section">
            <h3>Legal</h3>
            <ul>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/accessibility-statement">Accessibility</a></li>
            </ul>
        </div>
    </div>

    <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Poolside Business Brokers. All Rights Reserved.</p>
    </div>
</footer>`;

// Load header and footer
function loadHeaderFooter() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
        headerPlaceholder.style.position = 'sticky';
        headerPlaceholder.style.top = '0';
        headerPlaceholder.style.zIndex = '1000';
    }

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
}

// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const toggle = document.querySelector('.mobile-menu-toggle');
    if (navLinks && toggle) {
        const isOpen = navLinks.classList.toggle('active');
        toggle.setAttribute('aria-expanded', isOpen);
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const navLinks = document.getElementById('navLinks');
    const toggle = document.querySelector('.mobile-menu-toggle');
    if (navLinks && toggle && navLinks.classList.contains('active')) {
        if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
            navLinks.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        }
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    loadHeaderFooter();

    setTimeout(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }, 100);
});
