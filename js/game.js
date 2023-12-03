class Game {
    constructor() {
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-container");
        this.endScreen = document.getElementById("game-end");
        this.player = null;
        this.obstacles = [];
        this.fuel = [];
        this.score = 0;
        this.highestScore = 0;
        this.lives = 3;
    }
    startGame() {
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        const player = new Player(this.gameScreen)
        const obstacle = new Obstacle(this.gameScreen);
        const fuel = new Fuel(this.gameScreen);
    }
}