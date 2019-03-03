var cartas = [
    '<div class="memory-card" data-framework="Dois"><img class="front-face" src="img/2.png" /><img class="back-face" src="img/1.png" /></div>',
    '<div class="memory-card" data-framework="Tres"><img class="front-face" src="img/3.png" alt="Oito" /><img class="back-face" src="img/1.png" alt="JS Badge" /></div>',
    '<div class="memory-card" data-framework="Quatro"><img class="front-face" src="img/4.png"/><img class="back-face" src="img/1.png"/></div>',
    '<div class="memory-card" data-framework="Cinco"><img class="front-face" src="img/5.png" /><img class="back-face" src="img/1.png" /></div>',
    '<div class="memory-card" data-framework="Seis"><img class="front-face" src="img/6.png" alt="Oito" /><img class="back-face" src="img/1.png" alt="JS Badge" /></div>',
    '<div class="memory-card" data-framework="Sete"><img class="front-face" src="img/7.png" alt="Oito" /><img class="back-face" src="img/1.png" alt="JS Badge" /></div>',
    '<div class="memory-card" data-framework="Oito"><img class="front-face" src="img/8.png" alt="Oito" /><img class="back-face" src="img/1.png" alt="JS Badge" /></div>',
    '<div class="memory-card" data-framework="Nove"><img class="front-face" src="img/9.png" alt="Oito" /><img class="back-face" src="img/1.png" alt="JS Badge" /></div>',
    '<div class="memory-card" data-framework="Dez"><img class="front-face" src="img/10.png" alt="Oito" /><img class="back-face" src="img/1.png" alt="JS Badge" /></div>',
    '<div class="memory-card" data-framework="Onze"><img class="front-face" src="img/11.png" alt="Oito" /><img class="back-face" src="img/1.png" alt="JS Badge" /></div>',
];

function lancadorPecas() {
    var lances = "";
    for (var i = 0; i < 3; i++) {
        lances += cartas[i];
        lances += cartas[i];
    }
    document.getElementById("memory-game").innerHTML = lances;
}

lancadorPecas();