function sumaYPorcentaje(a, b) {
    let c = a + b;
    c *= 10/100;

    function multiplicaNumeros(a,b) {
        return a * b;
    }

    return c+multiplicaNumeros(a,b);
}

console.log(sumaYPorcentaje(5, 10));
console.log(sumaYPorcentaje(5454, 10));
