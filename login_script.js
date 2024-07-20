document.addEventListener("DOMContentLoaded", function() {
    const loginPopup = document.querySelector(".btnLogin-popup");
    const loginForm = document.getElementById("login_Form");
    const closeIcon = document.querySelector(".icon-close");

    // By default, hide the login form
    loginForm.style.display = "none";

    // Function to show the login form
    loginPopup.addEventListener("click", function() {
        loginForm.style.display = "block";
    });

    // Function to hide the login form
    closeIcon.addEventListener("click", function() {
        loginForm.style.display = "none";
    });
});
