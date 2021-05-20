const { test } = require("@jest/globals");

test("El divisor sea mayor que 0", () => {
    // arrange
    const b = 2;
    
    // arrange
    expect(b).not.toBe(0);
})

test("División de 6 / 3 igual a 2", () => {
    // arrange
    const a = 6;
    const b = 3;
    const esperado = 2;

    // act
    const resultado = division(a, b);

    // arrange
    expect(resultado).toBe(esperado);
})