import React from 'react';

function App() {
  return (
    <div>
      <header aria-label="Main Header">
        <h1>Accessible Website</h1>
      </header>

      <main>
        <section aria-labelledby="hero-heading">
          <h2 id="hero-heading">Welcome to Our Accessible Service</h2>
          <p>This is the hero component with essential information.</p>
        </section>

        <section aria-labelledby="services-heading">
          <h2 id="services-heading">Our Services</h2>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </section>

        <section aria-labelledby="contact-heading">
          <h2 id="contact-heading">Contact Us</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" aria-required="true" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" aria-required="true" />

            <button type="submit">Submit</button>
          </form>
        </section>
      </main>

      <footer aria-label="Footer">
        <p>&copy; 2026 Accessible Company</p>
      </footer>
    </div>
  );
}

export default App;