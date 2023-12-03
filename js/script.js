const startButton = document.getElementById("start-button");
console.log({ startButton });

startButton.addEventListener("click", () => {
    const game = new Game();
    game.startGame();

})