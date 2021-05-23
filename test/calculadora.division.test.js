const { test } = require("@jest/globals");
const division = require("../modules/calculadora.division");

test("División de 6 / 3 igual a 2", () => {
    // arrange
    const a = 6;
    const b = 3;
    const esperado = 2;

    // act
    const resultado = division(a, b);

    // assert
    expect(resultado).toBe(esperado);
})