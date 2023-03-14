// Declarando variaaveis
// Valores iniciais
let valorInicial = 0;
let valorMensal = 0;
let taxaJuros = 0;
let qtdMeses = 0;
let resultado = 0;

//Resultados
let totalFinal = 0;
let totalInvestido = 0;
let calcJuros = 0;
let totalJuros = 0;

function getValueData(id) {
    var elemento = document.getElementById(id);
    return elemento.value;
}

// get dados do front
function getData() {
    valorInicial = getValueData("valor-inicial");
    valorMensal = getValueData("valor-mensal");
    taxaJuros = getValueData("taxa-juros");
    qtdMeses = getValueData("periodo");

    // Valor-Final
    resultado = valorInicial * Math.pow((1 + taxaJuros / 100), qtdMeses / 12);

    totalFinal = document.getElementById("total-Valor");
    totalFinal.innerText = resultado.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    // Valor-Investido
    totalInvestido = document.getElementById("total-Investido");
    totalInvestido.innerText = parseFloat(valorInicial).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    // Valor-Juros
    calcJuros = resultado - parseFloat(valorInicial);
    
    totalJuros = document.getElementById("total-Juros");
    totalJuros.innerText = calcJuros.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    // Painel de teste
    console.log(resultado);
    console.log(totalInvestido);
    console.log(calcJuros);
}


// calcular
function calculate() {
    getData();
}
