class Player {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.width = 70;
        this.height = 100;
        this.top = 650 - this.height - 20; // 20 starting padding from bottom
        this.left = (400 - this.width) / 2;

        this.element = document.createElement("img");
        this.element.src = "../images/player.png";
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
        this.gameScreen.appendChild(this.element);


    }
}
