class Player {
    constructor() {
        this.width = 40;
        this.height = 60;
        this.top = 400;
        this.left = 200;

        this.element = document.createElement("img");
        this.element.src = "../images/player.png";
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        console.log(this.element);
    }
}

const player = new Player();