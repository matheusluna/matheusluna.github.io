const cards = document.querySelectorAll('.memory-card');
var contador = 0;
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
var time = 0;
var dados = convertNumber();
var intervalo;
function convertNumber() {
  var dn = [];
  if(window.localStorage.getItem("dados") != null){
    var d = window.localStorage.getItem("dados").split(",");

    for (var i = 0; i < d.length; i++) {
      dn.push(Number(d[i]));
    }
  }

  return dn;
}

function tempo(op) {
  setTimeout(() => {
    var s = 1;
    var m = 0;
    var h = 0;
    intervalo = window.setInterval(function() {
      if (s == 60) { m++; s = 0; }
      if (m == 60) { h++; s = 0; m = 0; }
      if (h < 10) document.getElementById("hora").innerHTML = "0" + h; else document.getElementById("hora").innerHTML = h;
      if (s < 10) document.getElementById("segundo").innerHTML = "0" + s; else document.getElementById("segundo").innerHTML = s;
      if (m < 10) document.getElementById("minuto").innerHTML = "0" + m; else document.getElementById("minuto").innerHTML = m;
      s++;
      time++;
    },1000);
  }, 5000);
}



function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  contador += 100;
  resetBoard();
  if(contador === 600){
    dados.push(contador/time);
    window.localStorage.setItem("dados", dados.toString());
    alert("Parabéns você tirou "+contador/time+" pontos");
    location.reload();

  }
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();
cards.forEach(card => card.classList.add('flip'));
setTimeout(() => {
  cards.forEach(card => card.classList.remove('flip'));
}, 5000);




Highcharts.chart('container', {

    title: {
        text: 'Desempenho do paciente'
    },

    subtitle: {
        text: 'Medição do jogo de raciocínio'
    },

    yAxis: {
        title: {
            text: 'Pontos/segundo'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1
        }
    },

    series: [{
        name: 'Pontos/segundo',
        data: dados
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});




window.onload = tempo;
cards.forEach(card => card.addEventListener('click', flipCard));
