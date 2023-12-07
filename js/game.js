const SCREEN_WIDTH = 400;
const SCREEN_HEIGHT = 650;

class Game {
    constructor() {
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-container");
        this.endScreen = document.getElementById("game-end");
        this.audioForObstacle = document.getElementById('obstacleCollision');
        this.audioForObstacle.playbackRate = 2;
        this.audioForFuel = document.getElementById('fuelCollision');
        this.animateId = null;
        this.player = null;
        this.playerName = '';
        this.obstacles = [];
        this.fuels = [];
        this.score = 0;
        this.highestScore = 0;
        this.lives = 3;
        this.isGameOver = false;

        this.loadHighestScore();
        this.updateHighestScoreElement();
    }

    loadHighestScore() {
        // Load the highest score from localStorage
        const storedHighestScore = localStorage.getItem("highestScore");
        this.highestScore = storedHighestScore ? parseInt(storedHighestScore) : 0;
    }

    updateHighestScoreElement() {
        const highestScoreElement = document.getElementById("highest-score");
        highestScoreElement.textContent = `${this.highestScore}`;

        const highestScoreElementEnd = document.getElementById("highest-score-end");
        highestScoreElementEnd.textContent = `Highest Score: ${this.highestScore}`;
    }

    saveHighestScore() {
        // Save the highest score to localStorage
        localStorage.setItem("highestScore", this.highestScore.toString());
    }

    saveName() {
        this.playerName = document.getElementById("name").value;
        localStorage.setItem("playerName", this.playerName);
    }

    updatePlayerNameElement() {
        const playerNameElement = document.getElementById("player-name");
        playerNameElement.textContent = `${this.playerName}` || "Player";
    }

    startGame() {
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        this.loadHighestScore();
        this.updateHighestScoreElement();
        this.player = new Player(this.gameScreen);
        this.updatePlayerNameElement();
        this.gameLoop();
    }

    gameLoop() {
        this.player.move();

        //obstacle
        const obstaclesToRemove = [];
        this.obstacles.forEach((obstacle) => {
            obstacle.move();
            if (obstacle.top < SCREEN_HEIGHT) {
                if (this.player.didCollideObtacle(obstacle)) {
                    this.audioForObstacle.pause();
                    this.audioForObstacle.currentTime = 0;
                    this.audioForObstacle.play()
                    obstacle.element.remove();
                    this.lives -= 1;
                    if (this.lives <= 0) {
                        this.isGameOver = true;
                    }
                } else {
                    obstaclesToRemove.push(obstacle);
                }
            } else {
                this.score += 10;
                obstacle.element.remove();
            }
        });
        this.obstacles = obstaclesToRemove;

        //Frames according to the Difficulty Level selected
        const difficultyLevel = localStorage.getItem("difficultyLevel") || 500;
        if (this.animateId % difficultyLevel === 0) {
            this.obstacles.push(new Obstacle(this.gameScreen))
        }

        //fuel
        const fuelsToRemove = [];
        this.fuels.forEach((fuel) => {
            fuel.move();
            if (fuel.top < SCREEN_HEIGHT) {
                if (this.player.didCollideObtacle(fuel)) {
                    fuel.element.remove();
                    this.score += 100;
                    this.audioForFuel.play();
                } else {
                    fuelsToRemove.push(fuel);
                }
            }
        });
        this.fuels = fuelsToRemove;

        if (this.animateId % 800 === 0) {
            this.fuels.push(new Fuel(this.gameScreen))
        }

        if (this.isGameOver) {
            this.gameScreen.style.display = "none";
            this.endScreen.style.display = "block";

            this.score = document.getElementById("your-score").innerText;

            if (this.score > this.highestScore) {
                this.highestScore = this.score;
                this.saveHighestScore();
                this.updateHighestScoreElement();

                const displayName = document.getElementById("displayName");
                displayName.textContent = `You are the best, ${this.playerName || "Player"}!`
            } else {
                const displayName = document.getElementById("displayName");
                displayName.textContent = `Better luck next time, ${this.playerName || "Player"}!`
            }

            const yourScore = document.getElementById("score");
            localStorage.getItem(yourScore);
            yourScore.textContent = `Your Score:${this.score}`

        } else {
            this.animateId = requestAnimationFrame(() => this.gameLoop())
        }

        document.getElementById('your-score').innerText = this.score
        document.getElementById('lives').innerText = this.lives
        this.updatePlayerNameElement();
    }

}



