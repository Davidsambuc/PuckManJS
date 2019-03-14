class Map {


    /**
     * Construct the map
     * @param tileset : array of tiles sources
     */
    constructor(tileset) {
        this.map = [
            [8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7],
            [11,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,10],
            [11,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,10],
            [11,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,10],
            [11,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,10],
            [11,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,10],
            [11,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,10],
            [11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
            [11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
            [6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,5]
        ];
        this.tileset = tileset;
    }

    drawMap() {
        /*PURE JS TODO
        this.map.forEach(this.map, function (value, index) {
            document.getElementById("gamecontainer").append("<canvas id=\"" + index  + "\"><img id=\"" + index  + "img\" src='' alt=''></canvas>");
            document.getElementById(index).style("backgroud-image", this.tileset[value]);
            $("#" + index + "img").attr("src", this.tileset[value]);
        } );*/

        var cpt = 0;
        $.each(this.map, function (index, value) {
            cpt++;
            $.each(value, function (index, value) {
                var id = index + cpt*100;
                $("#gamecontainer").append("<canvas id=\"" + id + "\"><img id=\"" + id  + "img\" src='' alt=''></canvas>");
                console.log(this.tileset[value]);
                $("#" + id).attr("style","background-image: url(" + this.tileset[value] + "); background-size: cover;");
                $("#" + id + "img").attr("src", this.tileset[value]);
            }.bind(this));
        }.bind(this));
    }

    neihbourg(x, y) {
        var res = [];
        if (x>0) {
            res.push("left");
        }
        if (y>0) {
            res.push("top");
        }
        if (x<this.map[0].length) {
            res.push("right");
        }
        if (y<0) {
            res.push("bottom");
        }
    }

}