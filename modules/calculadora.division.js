const division = (a, b) => {

    if (b == 0) {
        return "error: valor cero";
    }

    return a / b;
}

module.exports = division;