document.addEventListener('DOMContentLoaded', (event) => {

    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const textArea = document.getElementById('text-area');
    const animationSelect = document.getElementById('animation');
    const turboCheckbox = document.getElementById('turbo');

    let intervalId;
    let currentFrame = 0;
    let frames = [];
    const normalSpeed = 250;
    const turboSpeed = 50;

    startButton.addEventListener('click', startAnimation);
    stopButton.addEventListener('click', stopAnimation);

    function startAnimation() {
        frames = ANIMATIONS[animationSelect.value].split('=====');
        currentFrame = 0;
        
        startButton.disabled = true;
        stopButton.disabled = false;
        
        intervalId = setInterval(displayNextFrame, getSpeed());
    }

    function stopAnimation() {
        clearInterval(intervalId);
        startButton.disabled = false;
        stopButton.disabled = true;
    }

    function displayNextFrame() {
        textArea.value = frames[currentFrame];
        currentFrame = (currentFrame + 1) % frames.length;
    }

    function getSpeed() {
        return turboCheckbox.checked ? turboSpeed : normalSpeed;
    }

    turboCheckbox.addEventListener('change', () => {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = setInterval(displayNextFrame, getSpeed());
        }
    });
});
