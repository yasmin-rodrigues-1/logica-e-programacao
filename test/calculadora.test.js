const { somarDoisNumeros } = require('../src/calculadora');
const { expect } = require('chai');

describe('Testes da Função de Soma', function () {
    it('A função deve ser capaz de somar dois números positivos', function () {
        
        //Coleta o resultado da função
        const resultadoSomaDeDoisValores = somarDoisNumeros(10, 2);

        //Compara o resultado com o valor esperado
        expect(resultadoSomaDeDoisValores).to.equal(12);
    });

    it('A função deve ser capaz de somar um número positivo e um negativo', function (){    
        
        //Coleta o resultado da função
        const resultadoSomaDeDoisValores = somarDoisNumeros(17, -7);

        //Compara o resultado com o valor esperado
        expect(resultadoSomaDeDoisValores).to.equal(10);
    });
});