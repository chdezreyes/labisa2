const { test } = require("@jest/globals");
const raiz = require("../modules/calculadora.raiz");


test("La raiz cuadrada de 16 es igual a 4", () => {
    //arrange
    const a = 15
        //act
    const resultado = raiz(a);
    //assert
    expect(resultado).toBeCloseTo(3.87298, 5)
})