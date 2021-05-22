const { test } = require("@jest/globals");
const potencia = require("../modules/calculadora.potencia");

test("La potencia de 2 elevado a 4 devuelve 16", () => {
    //arrange
    const a = 2;
    const b = 6;
    const esperado = 64;
    //act
    const resultado = potencia(a, b);
    //assert
    expect(resultado).toBe(esperado)

})