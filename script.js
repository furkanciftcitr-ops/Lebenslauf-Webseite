const startScrollBtn = document.getElementById('startScrollID');
const contactScrollBtn = document.getElementById('kontaktdatenScrollID');

const aboutSection = document.getElementById('ueber-mich');
const contactSection = document.getElementById('kontaktdaten');

if (startScrollBtn && aboutSection) {
    startScrollBtn.addEventListener('click', function() {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
}

if (contactScrollBtn && contactSection) {
    contactScrollBtn.addEventListener('click', function() {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
}
