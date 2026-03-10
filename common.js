// Header HTML
const headerHTML = `<nav>
    <div class="logo">
        <img src="https://static.wixstatic.com/media/8d06ac_156024b27ebc40fb862bff2f6835f9db~mv2.png" alt="Poolside Business Brokers">
    </div>
    <button class="mobile-menu-toggle" onclick="toggleMenu()">☰</button>
    <ul class="nav-links" id="navLinks">
        <li><a href="/">Home</a></li>
        <li><a href="/about-us">About Us</a></li>
        <li><a href="/routes-for-sale">Routes For Sale</a></li>
        <li><a href="/buyers">Buyers</a></li>
        <li><a href="/sellers">Sellers</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="tel:+15126937086" class="phone-btn">(512) 693-7086</a></li>
    </ul>
</nav>`;

// Footer HTML
const footerHTML = `<footer>
    <div class="footer-content">
        <div class="footer-section">
            <h3>Poolside Business Brokers</h3>
            <p><strong>Phone:</strong> <a href="tel:+15126937086">(512) 693-7086</a></p>
            <p><strong>Email:</strong> <a href="/cdn-cgi/l/email-protection#30595e565f161306040b405f5f5c4359545552425f5b5542431e535f5d" data-cfasync="false">info&#64;poolsidebrokers.com</a></p>
        </div>

        <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="/">Homepage</a></li>
                <li><a href="/about-us">Our Story</a></li>
                <li><a href="/routes-for-sale">Available Routes</a></li>
                <li><a href="/buyers">For Buyers</a></li>
                <li><a href="/sellers">For Sellers</a></li>
                <li><a href="/contact">Get in Touch</a></li>
            </ul>
        </div>

        <div class="footer-section">
            <h3>Legal</h3>
            <ul>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/accessibility-statement">Accessibility Statement</a></li>
            </ul>
        </div>
    </div>

    <div class="footer-bottom">
        <p>© 2025 by Poolside Business Brokers. All Rights Reserved.</p>
    </div>
</footer>`;

// Load header and footer
function loadHeaderFooter() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
        // Make the placeholder sticky so the nav inside sticks
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
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Load header and footer
    loadHeaderFooter();

    // Setup smooth scrolling after a short delay to ensure header/footer are loaded
    setTimeout(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }, 100);
});