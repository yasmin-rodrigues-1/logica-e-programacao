
// SOMAR DOIS NUMEROS = GUARDA O VALOR DA SOMA

function somarDoisNumeros (valor1, valor2){
    const resultado = valor1 + valor2;
    return resultado;
}

// REALIZAR SOMA DOS CAMPOS DA TELA = NÚMEROS DIGITADOS E EXIBE O VALOR

function calcularMediaDeDoisNumeros (valor1, valor2){
    //1° Soma dos valores
    const resultadoSomaDeDoisValores = somarDoisNumeros (valor1, valor2);

    //2° Divide pela quantidade de número passados
    const resultadoDaMediaDeDoisValores = resultadoSomaDeDoisValores / 2; 

    //3° Retornar o resultado
    return resultadoDaMediaDeDoisValores;
}

module.exports = { 
    somarDoisNumeros
}
