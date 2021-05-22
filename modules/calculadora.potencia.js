const potencia = (a, b) => {

    var i = 1;
    var result = a;

    while (i < b) {
        result = result * a;
        i++;
    };

    return result;
}

module.exports = potencia;