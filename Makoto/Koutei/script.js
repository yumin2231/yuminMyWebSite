const consent = document.querySelector("#with-consent");
const button = document.querySelector("#submit");
consent.addEventListener('change', () => {
    if (consent.checked === true) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
});