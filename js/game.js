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
        this.isGameOver = false;
    }
    // saveName() {
    //     const getName = document.getElementById("name").value;

    //     localStorage.setItem("playerName", getName);


    //     this.startGame();


    // }
    startGame() {

        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        this.player = new Player(this.gameScreen);
        this.gameLoop();

    }

    gameLoop() {
        this.player.move();
        //obstacle
        this.obstacles.forEach((obstacle) => {
            obstacle.move();
            if (obstacle.top < SCREEN_HEIGHT) {
                if (this.player.didCollideObtacle(obstacle)) {
                    console.log("collision");
                    obstacle.element.remove();
                    this.obstacles.shift();
                    this.lives -= 1;
                    if (this.lives === 0) {
                        this.isGameOver = true;
                    }
                }
            } else {
                this.score += 10;
                obstacle.element.remove();
                this.obstacles.shift();

            }
        });

        if (this.animateId % 200 === 0) {
            this.obstacles.push(new Obstacle(this.gameScreen))
        }
        //fuel
        this.fuels.forEach((fuel) => {
            fuel.move();
            if (fuel.top < SCREEN_HEIGHT) {
                if (this.player.didCollideObtacle(fuel)) {
                    console.log("collision");
                    fuel.element.remove();
                    this.score += 100;
                    this.fuels.shift();
                }
            }
        });

        if (this.animateId % 800 === 0) {
            this.fuels.push(new Fuel(this.gameScreen))
        }

        if (this.isGameOver) {
            this.gameScreen.style.display = "none";
            this.endScreen.style.display = "block";
            // const displayName = document.getElementById("displayName");
            // displayName.textContent = `${getName}, you lose!`
        }


        document.getElementById('your-score').innerText = this.score
        document.getElementById('lives').innerText = this.lives
        this.animateId = requestAnimationFrame(() => this.gameLoop())
    }
}
