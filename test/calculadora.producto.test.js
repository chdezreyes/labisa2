const { test } = require("@jest/globals");

test("La multiplicación de 2 por 5 devuelve 10", () => {
    // arrange
    const a = 2;
    const b = 5;
    const esperado = 10;
    // act
    const resultado = producto(a, b);

    // arrange
    expect(resultado).toBe(esperado)
})
