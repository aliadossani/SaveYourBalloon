const SCREEN_WIDTH = 400;
const SCREEN_HEIGHT = 650;

class Game {
    constructor() {
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-container");
        this.endScreen = document.getElementById("game-end");
        this.animateId = null;
        this.player = null;
        this.obstacles = [];

        this.fuels = [];
        this.score = 0;
        this.highestScore = 0;
        this.lives = 3;
    }
    startGame() {
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        this.player = new Player(this.gameScreen);
        this.gameLoop();

        const obstacle = new Obstacle(this.gameScreen);
        this.obstacles.push(obstacle);
        this.obstacles.forEach((obstacle) => {
            setInterval(() => {
                obstacle.move();
            }, 1);
        })

        const fuel = new Fuel(this.gameScreen);
        this.fuels.push(fuel);
        this.fuels.forEach((fuel) => {
            setInterval(() => {
                fuel.move();
            }, 1);
        })

    }

    gameLoop() {
        this.player.move();
        this.animateId = requestAnimationFrame(() => this.gameLoop())
    }
}
