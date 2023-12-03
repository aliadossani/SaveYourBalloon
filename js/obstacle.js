class Obstacle {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.width = 30;
        this.height = 30;
        this.top = 100;
        this.left = 100;

        this.element = document.createElement("img");
        this.element.src = "../images/obstacle.png";
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;

        this.gameScreen.appendChild(this.element);
    }
}