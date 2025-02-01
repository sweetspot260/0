document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("username")) {
        window.location.href = "../htmlpages/home.html"; // Redirect if already logged in
    }

    document.querySelector("#loginBtn").addEventListener("click", function () {
        let username = document.getElementById("username").value;
        if (username) {
            localStorage.setItem("username", username);
            window.location.href = "../htmlpages/home.html"; // Go to home page
        }
    });
});