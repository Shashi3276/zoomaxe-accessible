import React from 'react';

export default function Home() {
  return (
    <>
      <a className="skip-to-main" href="#main">Skip to main content</a>

      <header className="site-header" role="banner" aria-label="Zoomaxe header">
        <div className="brand">
          <h1>Zoomaxe</h1>
          <p className="tagline">Team collaboration representing accessible digital solutions</p>
        </div>

        <nav className="main-nav" role="navigation" aria-label="Primary">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#get-started" className="cta">Get Started</a></li>
          </ul>
        </nav>
      </header>

      <main id="main" tabIndex={-1} role="main">
        <section id="hero" aria-labelledby="hero-title" className="hero">
          <h2 id="hero-title">Accessible Solutions for Everyone</h2>
          <p className="lead">
            Building inclusive digital experiences that work for everyone, everywhere. WCAG 2.2 AAA compliant services.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn primary">Explore Services</a>
            <a href="#contact" className="btn ghost">Get In Touch</a>
          </div>
        </section>

        <section id="stats" aria-labelledby="stats-heading" className="stats">
          <h3 id="stats-heading">Our achievements and statistics</h3>
          <ul className="stat-list" aria-hidden="false">
            <li>
              <strong aria-label="Projects delivered">500+</strong>
              <span>Projects Delivered</span>
            </li>
            <li>
              <strong aria-label="Client satisfaction">98%</strong>
              <span>Client Satisfaction</span>
            </li>
            <li>
              <strong aria-label="WCAG compliant">100%</strong>
              <span>WCAG Compliant</span>
            </li>
            <li>
              <strong aria-label="Support available">24/7</strong>
              <span>Support Available</span>
            </li>
          </ul>
        </section>

        <section id="about" aria-labelledby="about-heading" className="about">
          <h3 id="about-heading">Building Inclusive Digital Experiences</h3>
          <p>
            At Zoomaxe, we believe technology should be accessible to everyone. Our team combines cutting-edge
            development with accessibility expertise to create digital solutions that work for all users.
          </p>
          <ul>
            <li>WCAG 2.2 AA/AAA compliance expertise</li>
            <li>Comprehensive accessibility audits</li>
            <li>Assistive technology integration</li>
            <li>Ongoing support and training</li>
          </ul>
          <a className="link" href="/about">Learn More About Us</a>
        </section>

        <section id="testimonials" aria-labelledby="testimonials-heading" className="testimonials">
          <h3 id="testimonials-heading">Client Success</h3>

          <blockquote aria-label="Testimonial from Sarah Johnson">
            <p>"Zoomaxe transformed our website into an accessible platform that serves all our users. Outstanding work!"</p>
            <footer>— Sarah Johnson, CTO, TechCorp Inc.</footer>
          </blockquote>

          <blockquote aria-label="Testimonial from Michael Chen">
            <p>"Their accessibility audit revealed issues we never knew existed. Now our platform is truly inclusive."</p>
            <footer>— Michael Chen, Head of Digital, Global Finance</footer>
          </blockquote>

          <blockquote aria-label="Testimonial from Emily Rodriguez">
            <p>"Professional, knowledgeable, and dedicated to creating accessible experiences. Highly recommend!"</p>
            <footer>— Emily Rodriguez, Product Manager, HealthPlus</footer>
          </blockquote>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className="contact">
          <h3 id="contact-heading">Ready to Get Started?</h3>
          <p>Let's build accessible, inclusive digital experiences together</p>

          <form aria-labelledby="contact-heading" className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} />

            <div role="status" aria-live="polite" className="sr-only" id="form-status" />

            <button type="submit" className="btn primary">Contact Us</button>
          </form>
        </section>
      </main>

      <footer role="contentinfo" className="site-footer">
        <div>
          <h4>Zoomaxe</h4>
          <p>Building accessible, inclusive digital experiences for everyone.</p>
        </div>
        <nav aria-label="Footer Links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <address className="contact-info">
          <a href="mailto:info@zoomaxe.com">info@zoomaxe.com</a><br/>
          <a href="tel:+918826297757">+91 88262 97757</a><br/>
          Dwarka, New Delhi 110043, India
        </address>
        <p className="copyright">Copyright© 2026 Zoomaxe. All rights reserved.</p>
      </footer>
    </>
  );
}