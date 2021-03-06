class Map {


    /**
     * Construct the map
     * @param tileset : array of tiles sources
     */
    constructor(tileset) {
        this.map = [
            [8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7],
            [11,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,10],
            [11,4,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,10],
            [11,4,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,10],
            [11,4,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,10],
            [11,4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,10],
            [11,4,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,10],
            [11,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,10],
            [11,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,10],
            [11,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,10],
            [11,4,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,10],
            [11,4,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,10],
            [11,4,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,10],
            [11,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,10],
            [11,4,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,10],
            [11,4,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,10],
            [11,4,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,10],
            [11,4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,10],
            [11,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,10],
            [6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,5]
        ];
        /*this.map = [
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
        ];*/
        this.tileset = tileset;
    }



    drawMap() {
        /*PURE JS TODO
        this.map.forEach(this.map, function (value, index) {
            document.getElementById("gamecontainer").append("<canvas id=\"" + index  + "\"><img id=\"" + index  + "img\" src='' alt=''></canvas>");
            document.getElementById(index).style("backgroud-image", this.tileset[value]);
            $("#" + index + "img").attr("src", this.tileset[value]);
        } );*/




        /*
                console.log(img);
                img.src = "public/img/bordCoinBasG.jpeg";
                console.log(img);
                img.onload = function() {
                    ctx.drawImage(img, 20, 20, 50, 50);
                };*/
        var Imgtileset = [];
        $.each(this.tileset, function (index, value) {
            var img = new Image();
            img.src = value;
            Imgtileset.push(img);
        });



        var cpt = 0;
        var canvas = document.getElementById("map");
        $.each(this.map, function (index, value) {
            cpt++;
            //$("#gamecontainer").append("</br>");
            $.each(value, function (index, value) {
                if (canvas.getContext) {
                    var ctx = canvas.getContext("2d");
                }
                /*var img = new Image();
                img.src = Imgtileset[value];
                console.log(cpt + " 1");
                img.onload =drawmyImg(cpt);
*/
                /*function drawmyImg(cpt) {*/
                let ind = index;
                let compteur = cpt;
                let img = Imgtileset[value];
                let tilewidth = Math.floor(vwTOpx(1));
                let tileheight = Math.floor(vhTOpx(2));
                console.log(tilewidth);
                ctx.drawImage(img, ind*tilewidth, compteur*tileheight, tilewidth, tileheight);


                /*}*/
                //var id = index + cpt*100;
                //$("#gamecontainer").append("<canvas id=\"" + id + "\"><img id=\"" + id  + "img\" src='' alt=''></canvas>");
                //console.log(this.tileset[value]);
                //$("#" + id).attr("style","background-image: url(" + this.tileset[value] + "); background-size: 2vw 2vh;");
                //$("#" + id + "img").attr("src", this.tileset[value]);
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