function updateDateAndClock() {
    const dateElement = document.getElementById('date');
    const clockElement = document.getElementById('clock');

    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    dateElement.textContent = now.toLocaleDateString(undefined, options);
    clockElement.textContent = now.toLocaleTimeString();
}

// Call the function once to update the date and clock immediately
updateDateAndClock();

// Call the function every second to update the clock in real-time
setInterval(updateDateAndClock, 1000);



// JavaScript to handle image click and enlarge effect
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.clickable-image');

    images.forEach(image => {
        image.addEventListener('click', function() {
            image.classList.toggle('enlarged');
        });
    });
});
