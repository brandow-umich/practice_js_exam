let toggle = document.querySelector('#toggle');
let emailBox = document.querySelector('#emailBox');

// When site loads, apply css
window.addEventListener("load", function () {
    console.log('Apply CSS to h1 when site loads');
    document.querySelector("h1").classList.add("heading");
});

// If the visitor double-clicks anywhere on the page, an alert
// should appear with the current time.
window.addEventListener("dblclick", function () {
    this.alert(new Date());
});

// If the visitor clicks on the input for "Check to toggle email" field,
// modify the page so that the email field is available when the input is checked
// and unavailable when the input is unchecked.
toggle.addEventListener("click", function () {
    console.log("Toggle clicked");
    if (this.checked) {
        // if checked, remove .hidden class
        console.log("Checked: Remove hidden class");
        emailBox.classList.remove("hidden");
    } else {
        // if not checked, add .hidden class
        console.log("Not checked: Add hidden class");
        emailBox.classList.add("hidden");
    }
});
