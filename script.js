const toggleButton = document.getElementById("toggle-theme");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleButton.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Simple form submission feedback
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your message! I’ll get back to you soon.");
    this.reset();
});