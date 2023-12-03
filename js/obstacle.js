class Obstacle {
    constructor() {
        this.width = 30;
        this.height = 30;
        this.top = 0;
        this.left = 0;

        this.element = document.createElement("img");
        this.element.src = "../images/obstacle.png";
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
    }
}