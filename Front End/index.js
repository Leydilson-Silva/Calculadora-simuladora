/* Declarando variaveis( diferença entre let e var){
    let limitada ao scopo
    var variavel global
    const constante(valor imutavel)
}
    Valores iniciais*/
var valorInicial = 0;
var valorMensal = 0;
var taxaJuros = 0;
var qtdMeses = 0;

//  Resultados
var resultado = 0;
var totalFinal = 0;
var totalInvestido = 0;
var calcJuros = 0;
var totalJuros = 0;

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
