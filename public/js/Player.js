class Player extends Entity{

    constructor() {
        super();
        this.src = "public/img/pac-pac.jpeg";
    }

    init() {
        $("#pac-pac").attr("src", this.src);
    }
}