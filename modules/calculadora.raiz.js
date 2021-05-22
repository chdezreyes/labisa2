const suma = require("../modules/calculadora.suma");
const producto = require("../modules/calculadora.producto");
const potencia = require("../modules/calculadora.potencia");
const division = require("../modules/calculadora.division");

const raiz = (a) => {

    if (a <= 0) {
        return "error: valor cero o negativo";
    }
    var n = 0

    while (producto(n, n) < a) {
        n = suma(n, 1);
    }

    return division(suma(suma(potencia(n, 4), (producto(producto(potencia(n, 2), 6), a))), potencia(a, 2)),
        suma(producto(4, potencia(n, 3)), producto(4, producto(n, a))));

}

module.exports = raiz;