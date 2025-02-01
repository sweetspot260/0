document.addEventListener("DOMContentLoaded", function () {
    let username = localStorage.getItem("username");
    if (!username) {
        document.querySelector(".topper-indicator").textContent ="New User";
    } else {
        document.querySelector(".topper-indicator").textContent =username;
    }

    
});


