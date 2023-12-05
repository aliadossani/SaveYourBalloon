class Fuel {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.width = 30;
        this.height = 30;
        this.top = -100;
        this.left = Math.random() * (400 - this.width);

        this.element = document.createElement("img");
        this.element.src = "images/fuel.png";
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`

        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;

        this.gameScreen.appendChild(this.element);
    }

    move() {
        this.top += 1;
        if (this.top <= SCREEN_HEIGHT - this.height) {
            this.element.style.top = `${this.top}px`;
        } else {
            this.element.style.display = "none";
        }

    }
}