var cobra = [];
var posX = 105;
var posY = 105;
var macaX = 0;
var macaY = 0;
var clicado = true;
var direcao = 0;
var p = 1;
var i = 0;
var pegaTop = 0;
var pegaLeft = 0;
var cabeca = $("<div></div>", {
    id: "ponto" + i,
    class: "ponto",
    style: "top:105px;left:105px"
})
var macaInicio = $("<div></div>", {
    id: "maca"
})

$(document).ready(function () {
    $("#principal").click(function () {
        $("#principal").css("border", "3px solid black");
        if (clicado) {
            jogo();
            clicado = false;
        }
    })
})

function jogo() {
    cobra[i] = $("#principal").append(cabeca);
    cobra.length + 1;
    console.log(i);
    $("#principal").append(macaInicio);
    maca();
    anda();
}

function maca() {
    macaX = Math.floor(Math.random() * 201);
    while (macaX % 7 != 0) {
        macaX = Math.floor(Math.random() * 201);
    }
    macaY = Math.floor(Math.random() * 201);
    while (macaY % 7 != 0) {
        macaY = Math.floor(Math.random() * 201);
    }

    $("#maca").css("left", (macaX) + "px");
    $("#maca").css("top", (macaY) + "px");
}

$(document).keydown(function (e) {
    if ((e.keyCode == 37) || (e.keyCode == 38) || (e.keyCode == 39) || (e.keyCode == 40))
        direcao = e.keyCode;
});

function anda() {
    var tmp = setInterval(move, 150);
    function move() {
        switch (direcao) {
            case 37:
                direcao = 37;
                if (posX < 1) {
                    $("#perdeu").css("opacity", 1);
                } else {
                    $("#ponto" + i).css("left", (posX - 7) + "px");
                    posX = posX - 7;
                    pega();
                }
                break;
            case 38:
                direcao = 38;
                if (posY < 1) {
                    $("#perdeu").css("opacity", 1);
                } else {
                    $("#ponto" + i).css("top", (posY - 7) + "px");
                    posY = posY - 7;
                    pega();
                }
                break;
            case 39:
                direcao = 39;
                if (posX > 201) {
                    $("#perdeu").css("opacity", 1);
                } else {
                    $("#ponto" + i).css("left", (posX + 7) + "px");
                    posX = posX + 7;
                    pega();
                }
                break;
            case 40:
                direcao = 40;
                if (posY > 201) {
                    $("#perdeu").css("opacity", 1);

                } else {
                    $("#ponto" + i).css("top", (posY + 7) + "px");
                    posY = posY + 7;
                    pega();
                }
                break;
        }
    }
}

function pega() {
    if (((macaY + 7) == posY) && (macaX == posX)) {
        document.getElementById("pontos").innerHTML = "Pontos: " + p;
        cresce();
        maca();
        p++;
    }
}

function cresce() {
    console.log(cobra);
    // pegaTop = $("#ponto" + (cobra.length - 1)).position().top;
    pegaTop = posY;
    console.log(pegaTop);
    // pegaLeft = $("#ponto" + (cobra.length - 1)).position().left;
    pegaLeft = posX;
    console.log(pegaLeft);
    if (direcao == 37) {
        $("#principal").append(cabeca);
        console.log(i);
        cobra[i] = $("#ponto" + i).css("top", (pegaTop) + "px");
        cobra[i] = $("#ponto" + i).css("left", (pegaLeft + 7) + "px");
    }
    if (direcao == 38) {
        $("#principal").append(cabeca);
        console.log(i);
        cobra[i] = $("#ponto" + i).css("top", (pegaTop + 7) + "px");
        cobra[i] = $("#ponto" + i).css("left", (pegaLeft) + "px");
    }
    if (direcao == 39) {
        $("#principal").append(cabeca);
        console.log(i);
        cobra[i] = $("#ponto" + i).css("top", (pegaTop) + "px");
        cobra[i] = $("#ponto" + i).css("left", (pegaLeft - 7) + "px");
    }
    if (direcao == 40) {
        $("#principal").append(cabeca);
        console.log(i);
        cobra[i] = $("#ponto" + i).css("top", (pegaTop - 7) + "px");
        cobra[i] = $("#ponto" + i).css("left", (pegaLeft) + "px");
    }
    i++;
}
