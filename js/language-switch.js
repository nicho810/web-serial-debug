let currentLanguage = 'cn'; // Default language

function switchLanguage() {
    currentLanguage = currentLanguage === 'cn' ? 'en' : 'cn';
    updatePageLanguage();
    updateButtonText();
}

function updatePageLanguage() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key]) {
            element.textContent = translations[key][currentLanguage];
        }
    });
}

function updateButtonText() {
    const button = document.getElementById('language-switch-button');
    // Set button text to 'English' if current language is Chinese, otherwise set it to '中文' (Chinese)
    button.textContent = currentLanguage === 'cn' ? 'English' : '中文';
}

document.addEventListener('DOMContentLoaded', () => {
    const switchButton = document.getElementById('language-switch');
    switchButton.addEventListener('click', switchLanguage);
    updatePageLanguage(); // Initial language set
});