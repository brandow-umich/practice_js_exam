let billing = document.querySelector('#billing');
let billingCB = document.querySelector('input');
let home = document.querySelector('#home');

// When page loads, print the default value to the console
window.addEventListener("load", function () {
    console.log(billing.value);
});

// When the checkbox is checked the information from the billing field
// is copied into the home address field and the home element is disabled.
// When the checkbox is unchecked, the home address field is cleared and
// the home element is enabled.
billingCB.addEventListener("click", function () {
    if (billingCB.checked) {
        home.value = billing.value;
        home.disabled = true;
    } else {
        home.value = "";
        home.disabled = false;
    }
});