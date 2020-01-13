var cobra = [];
var vet = [];
var vet2 = [];
var posX = 105;
var posY = 105;
var macaX = 0;
var macaY = 0;
var clicado = true;
var checar = false;
var direcao = 0;
var p = 0;
var i = 0;
var pegaTop = 0;
var pegaLeft = 0;
var aux = 0;
var verifica2 = true;
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
    document.getElementById("pontos").innerHTML = "Pontos: " + p;
    cobra[0] = $("#principal").append(cabeca);
    cobra.length + 1;
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
    if ((verifica() == true) && (verifica2 == true)) {
        if ((e.keyCode == 37) || (e.keyCode == 38) || (e.keyCode == 39) || (e.keyCode == 40)) {
            aux = direcao;
            direcao = e.keyCode;
        }
    }

});

function anda() {
    var tmp = setInterval(move, 150);
    function move() {
        if (i >= 1) {
            vet.push(posX - 7);
            vet2.push(posY - 7);
        }
        switch (direcao) {
            case 37:
                direcao = 37;
                if ((posX < 1) || (verifica() == false)) {
                    verifica2 = false;
                    $("#perdeu").css("opacity", 1);
                    tmp = clearInterval();
                } else {
                    $("#ponto0").css("left", (posX - 7) + "px");
                    posX = posX - 7;
                    pega();
                }
                break;
            case 38:
                direcao = 38;
                if ((posY < 1) || (verifica() == false)) {
                    verifica2 = false;
                    $("#perdeu").css("opacity", 1);
                    tmp = clearInterval();
                } else {
                    $("#ponto0").css("top", (posY - 7) + "px");
                    posY = posY - 7;
                    pega();
                }
                break;
            case 39:
                direcao = 39;
                if ((posX > 201) || (verifica() == false)) {
                    verifica2 = false;
                    $("#perdeu").css("opacity", 1);
                    tmp = clearInterval();
                } else {
                    $("#ponto0").css("left", (posX + 7) + "px");
                    posX = posX + 7;
                    pega();
                }
                break;
            case 40:
                direcao = 40;
                if ((posY > 201) || (verifica() == false)) {
                    verifica2 = false;
                    $("#perdeu").css("opacity", 1);
                    tmp = clearInterval();
                } else {
                    $("#ponto0").css("top", (posY + 7) + "px");
                    posY = posY + 7;
                    pega();
                }
                break;
        }
        movimento();
    }
}

function pega() {
    if (((macaY + 7) == posY) && (macaX == posX)) {
        p++;
        document.getElementById("pontos").innerHTML = "Pontos: " + p;
        vet.push(posX - 7);
        vet2.push(posY - 7);
        cresce();
        maca();
    }
}
function cresce() {
    i++;
    $("<div></div>", {
        id: "ponto" + i,
        class: "ponto"
    }).appendTo("#principal");
}

function movimento() {
    for (var q = 0; q <= p; q++) {
        $("#ponto" + q).css("top", (vet2[p - q] - (q * 7)) + "px");
        $("#ponto" + q).css("left", (vet[p - q] + 7) + "px");
    }
    vet.shift();
    vet2.shift();
}



function verifica() {
    if (p > 3) {
        if ((aux == 37) && (direcao == 39)) {
            return false;
        }
        if ((aux == 39) && (direcao == 37)) {
            return false;
        }
        if ((aux == 38) && (direcao == 40)) {
            return false;
        }
        if ((aux == 40) && (direcao == 38)) {
            return false;
        }

    }
    for (var t = 3; t < p; t++) {
        if (checar == true) {
            if ((Math.floor($("#ponto0").position().top) == Math.floor($("#ponto" + t).position().top)) &&
                (Math.floor($("#ponto0").position().left) == Math.floor($("#ponto" + t).position().left))) {
                return false;
            }
        }
        checar = true;
    }
    return true;
}