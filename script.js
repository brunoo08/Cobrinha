var cobra = [];
var posX = 105;
var posY = 105;
var grid = 21;
var andaX = 0;
var andaY = 0;
var macaX = 0;
var macaY = 0;
var clicado = true;
var direcao = 0;
var x = 37;
var p = 1;

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
    var c = document.getElementById("principal");
    var d = document.createElement("div");
    cobra[0] = $("#principal").append("<div id='ponto'></div>");
    cobra.length ++;
    $("#principal").append("<div id='maca'></div>");
    maca();
    anda();
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
                    $("#ponto").css("left", (posX - 7) + "px");
                    posX = posX - 7;
                    pega();
                }
                break;
            case 38:
                direcao = 38;
                if (posY < 1) {
                    $("#perdeu").css("opacity", 1);
                } else {
                    $("#ponto").css("top", (posY - 7) + "px");
                    posY = posY - 7;
                    pega();
                }
                break;
            case 39:
                direcao = 39;
                if (posX > 201) {
                    $("#perdeu").css("opacity", 1);
                } else {
                    $("#ponto").css("left", (posX + 7) + "px");
                    posX = posX + 7;
                    pega();
                }
                break;
            case 40:
                direcao = 40;
                if (posY > 201) {
                    $("#perdeu").css("opacity", 1);

                } else {
                    $("#ponto").css("top", (posY + 7) + "px");
                    posY = posY + 7;
                    pega();
                }
                break;
        }
    }
    pega();
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

function pega() {
    if (((macaY + 7) == posY) && (macaX == posX)) {
        document.getElementById("pontos").innerHTML = "Pontos: " + p;
        cresce();
        maca();
        p++;
    }
}

function cresce(){
    for(var i = 1; i < cobra.length; i ++){
        cobra[i] = $("#ponto").append("<div id='ponto'></div>"); 
    }
}
