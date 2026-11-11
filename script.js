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

const copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach(button => {
    button.addEventListener('click', function() {
        const textSpan = this.previousElementSibling;
        const textToCopy = textSpan.textContent;

        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = this.textContent;
            this.textContent = 'Kopiert! ✓';
            
            setTimeout(() => {
                this.textContent = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Fehler beim Kopieren: ', err);
        });
    });
});
