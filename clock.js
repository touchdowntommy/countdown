// Thanksgiving date (adjust to the correct date each year)
const thanksgivingDate = new Date('November 28, 2024 00:00:00').getTime();

// Countdown function
function updateCountdown() {
    const now = new Date().getTime();
    const distance = thanksgivingDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML = 
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // Stop countdown when the date has passed
    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "Happy Thanksgiving!";
    }

    console.log("updated")
}

// Update countdown every second
setInterval(updateCountdown, 1000);
console.log("updated")