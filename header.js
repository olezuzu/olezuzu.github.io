// Function to create header
function createHeader() {
    const header = document.createElement('nav');
    header.innerHTML = `
        <!-- Logo: Ole Ahrenhold, link to landing page -->
        <h2><a href="/" style="color: #333; text-decoration: none;">Ole Ahrenhold</a></h2>
        <ul>
            <li><a href="#about">Über mich</a></li>
            <li><a href="#projects">Projekte</a></li>
            <li><a href="#socials">Soziales</a></li>
            <li><a href="#contact">Kontakt</a></li>
        </ul>
    `;
    document.body.insertBefore(header, document.body.firstChild);
}

// Function to create footer
function createFooter() {
    const footerHTML = `
      <footer>
        <p>&copy; 2025 Ole Ahrenhold. All Rights Reserved.</p>
    </footer>
    `;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
}

// Call functions to add header and footer to the page
createHeader();
createFooter();
