const startTime = Date.now();
const timerElement = document.querySelector('.timer_text');

function updateTimer() {
    if (!timerElement) return;
    
    const totalSeconds = Math.floor((Date.now() - startTime) / 1000);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const paddedHours = String(hours).padStart(2, '0');
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');
    
    // Display only hours, minutes, and seconds
    timerElement.textContent = `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}

// Run immediately and every second
updateTimer();
setInterval(updateTimer, 1000);

window.addEventListener('beforeunload', () => {
    const totalSeconds = Math.floor((Date.now() - startTime) / 1000);
    console.log(`User stayed for: ${totalSeconds} seconds`);
});