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
