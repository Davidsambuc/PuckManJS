class Player extends Entity {

    constructor(x, y) {
        super(x, y, "pac-pac");
        this.src = "public/img/pacmanGauche.gif";
        $("#pac-pac").attr("src", this.src);
    }

    init() {
        super.init();
    }

}
