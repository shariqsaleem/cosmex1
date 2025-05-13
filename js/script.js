let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(direction = 1) {
    slides[currentIndex].classList.remove('active');

    currentIndex += direction;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    slides[currentIndex].classList.add('active');
}

// Auto change slides every 3 seconds
setInterval(() => {
    changeSlide(1);
}, 3000);



document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you, " + name + "! Your message has been sent.");
        this.reset(); // Clear the form
    } else {
        alert("Please fill in all fields.");
    }
});
    