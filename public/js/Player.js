class Player extends Entity {

    constructor(x, y) {
        super(x, y, "pac-pac");
        this.src = "public/img/pacmanGauche.gif";
        //$("#pac-pac").attr("src", this.src);
        document.getElementById("pac-pac").src = this.src;
    }

    updatePos() {
        super.updatePos();
    }

    changeDirection(d) {
        switch (d) {
            case "right":
                this.src = "public/img/pacmanDroite.gif";
                break;
            case "left":
                this.src = "public/img/pacmanGauche.gif";
                break;
            case "up":
                this.src = "public/img/pacmanHaut.gif";
                break;
            case "down":
                this.src = "public/img/pacmanBas.gif";
                break;
        }
        document.getElementById("pac-pac").src = this.src;
    }

}
