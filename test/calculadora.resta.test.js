const { test } = require("@jest/globals");
const resta = require("../modules/calculadora.resta");


test("La resta de 5 y 2 devuelve 3", () => {
    // arrange
    const a = 5;
    const b = 2;
    const esperado = 3;
    // act
    const resultado = resta(a, b);

    // arrange
    expect(resultado).toBe(esperado)
})