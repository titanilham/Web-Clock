tippy('[data-tippy-content]');

function updateTime() {
    const now = new Date();
    document.getElementById('time').innerText = now.toLocaleTimeString();
}
setInterval(updateTime, 1000); // Update every second

const fullscreenBtn = document.getElementById('fullscreen-btn');

fullscreenBtn.addEventListener('click', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
});

document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
        fullscreenBtn.style.display = 'none'; // Hide button in fullscreen
    } else {
        fullscreenBtn.style.display = 'block'; // Show button when not in fullscreen
    }
});

