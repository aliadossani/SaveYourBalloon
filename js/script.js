window.addEventListener("load", () => {

    let game;

    const startButton = document.getElementById("start-button");

    const restartButton = document.getElementById("restart-button");

    const difficultyLevelRadio = document.querySelectorAll(".difficultyLevel");

    difficultyLevelRadio.forEach(element => {
        element.addEventListener('click', (event) => {
            localStorage.setItem("difficultyLevel", event.target.value)
        });


    })


    startButton.addEventListener("click", () => {
        game = new Game();
        game.saveName();
        game.startGame();
    });

    restartButton.addEventListener("click", () => {
        location.reload();
    });

    document.addEventListener("keydown", (event) => {
        if (game) {
            if (event.code === "ArrowUp") {
                game.player.directionY = -5;

            }
            if (event.code === "ArrowDown") {
                game.player.directionY = 5;
            }
            if (event.code === "ArrowLeft") {
                game.player.directionX = -5;
            }
            if (event.code === "ArrowRight") {
                game.player.directionX = 5;
            }
        }
    })

    document.addEventListener("keyup", (event) => {
        if (game) {
            if (event.code === "ArrowUp" || event.code === "ArrowDown") {
                game.player.directionY = 0;
            }
            if (event.code === "ArrowLeft" || event.code === "ArrowRight") {
                game.player.directionX = 0;
            }
        }
    })
})


