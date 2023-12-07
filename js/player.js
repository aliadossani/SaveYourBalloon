class Player {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.width = 70;
        this.height = 100;
        this.top = SCREEN_HEIGHT - this.height - 20; // 20 starting padding from bottom
        this.left = (SCREEN_WIDTH - this.width) / 2;
        this.directionX = 0;
        this.directionY = 0;

        this.element = document.createElement("img");
        this.element.id = "player"
        this.element.src = "images/player.png";
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;

        this.gameScreen.appendChild(this.element);


    }

    // removePlayer() {
    //     // const player = document.getElementById(this.element.id)
    //     // player.remove();
    //     this.element.remove();
    // }

    move() {
        const newLeft = this.left + this.directionX;
        const newTop = this.top + this.directionY;
        if (newLeft >= 0 && newLeft <= SCREEN_WIDTH - this.width) {
            this.left += this.directionX;
        }
        if (newTop >= 0 && newTop <= SCREEN_HEIGHT - this.height) {
            this.top += this.directionY;
        }

        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }

    didCollideObtacle(obstacle) {

        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();

        if (playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top) {
            return true;
        }
        else {
            return false;
        }

    }

    didCollideFuel(fuel) {
        const playerRect = this.element.getBoundingClientRect();
        const fuelRect = fuel.element.getBoundingClientRect();
        if (playerRect.left < fuelRect.right &&
            playerRect.right > fuelRect.left &&
            playerRect.top < fuelRect.bottom &&
            playerRect.bottom > fuelRect.top) {
            return true;
        }
        else {
            return false;
        }
    }
}
