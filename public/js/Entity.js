class Entity {
    constructor(x, y, id) {
        this.id = id;
        this.x = x;
        this.y = y;
    }

    init() {
        document.getElementById(this.id).style.position = "absolute";
        document.getElementById(this.id).style.left = this.x + "vw";
        document.getElementById(this.id).style.top = this.y + "vh";
    }

    move(x,y) {
        this.x += 5*x;
        this.y += 5*y;
        this.init();
    }
}