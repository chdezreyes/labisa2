const producto = require("../modules/calculadora.producto");

const potencia = (a, b) => {

    var i = 1;
    var result = a;

    while (i < b) {
        result = producto(result, a);
        i++;
    };

    return result;
}

module.exports = potencia;