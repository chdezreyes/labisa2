const raiz = (a) => {

    var n = 0

    while (n * n < a) {
        n = n + 1;
    }

    return division(suma((potencia(n, 4)), (producto(6, producto(potencia(n, 2), a)))), suma(producto(4, potencia(n, 3)), producto(producto(4, n), a)));

}

module.exports = raiz;