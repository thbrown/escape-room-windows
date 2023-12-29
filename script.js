document.addEventListener('DOMContentLoaded', (event) => {
    const panels = document.querySelectorAll('.panel');
    const winMessage = document.getElementById('win-message');
    const colors = ['red', 'green', 'blue'];
    let gameWon = false;

    // Function to change the color of a panel
    const changeColor = (panel) => {
        let currentColorIndex = colors.indexOf(panel.style.backgroundColor);
        let nextColorIndex = (currentColorIndex + 1) % colors.length;
        panel.style.backgroundColor = colors[nextColorIndex];
    };

    // Function to check if all panels are red
    const checkWin = () => {
        return Array.from(panels).every(panel => panel.style.backgroundColor === 'red');
    };

    // Initialize panels with random colors
    const initPanels = () => {
        panels.forEach(panel => {
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            panel.style.backgroundColor = randomColor;
        });
    };

    // Set up click event for each panel
    panels.forEach((panel, index) => {
        panel.addEventListener('click', () => {
            if (gameWon) return; // Do nothing if the game is already won

            // Change color of clicked panel
            changeColor(panel);
            // Change color of adjacent panels
            if (index > 0) changeColor(panels[index - 1]); // Left panel
            if (index < panels.length - 1) changeColor(panels[index + 1]); // Right panel

            // Check for win after each click
            if (checkWin()) {
                winMessage.textContent = 'Congratulations! You won!';
                gameWon = true;
            }
        });
    });

    // Initialize the game
    initPanels();
});