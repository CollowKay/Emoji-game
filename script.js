document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-btn');
    const emoji = document.getElementById('emoji');
    const scoreDisplay = document.getElementById('score-display');
    let score = 0;
    let timeLeft = 10;
    let gameInterval;
    let countdownInterval;

    startButton.addEventListener('click', startGame);

    emoji.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = Score: ${score};
        moveEmoji();
    });

    function startGame() {
        console.log("Start button clicked");
        score = 0;
        timeLeft = 10;
        scoreDisplay.textContent = Score: ${score};
        emoji.style.display = 'block';
        startButton.disabled = true;

        // Countdown Timer
        countdownInterval = setInterval(() => {
            timeLeft--;
            if (timeLeft <= 0) {
                endGame();
            }
        }, 1000);

        // Main Game Interval
        gameInterval = setInterval(() => {
            moveEmoji();
        }, 700);
    }

    function moveEmoji() {
        const container = document.getElementById('game-container');
        const containerWidth = container.offsetWidth - 60; // Adjust for emoji size
        const containerHeight = container.offsetHeight - 60;

        const randomX = Math.floor(Math.random() * containerWidth);
        const randomY = Math.floor(Math.random() * containerHeight);

        emoji.style.left = ${randomX}px;
        emoji.style.top = ${randomY}px;
    }

    function endGame() {
        clearInterval(countdownInterval);
        clearInterval(gameInterval);
        startButton.disabled = false;
        emoji.style.display = 'none';
        alert(Game Over! Your final score is: ${score});
    }
});