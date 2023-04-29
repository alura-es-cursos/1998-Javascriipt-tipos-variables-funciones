//Declaración
function sumaYPorcentaje(a, b) {
    let c = a + b;
    c *= 10/100;

    function multiplicaNumeros(a,b) {
        return a * b;
    }

    return c+multiplicaNumeros(a,b);
}

function saludar(texto = 'Hola!') {
    console.log(texto);
}

function mostrarTexto(texto = 'Texto por defecto') {
    console.log(texto);

}
//Ejecución
saludar();
saludar('Buenos días');
mostrarTexto('Este es un texto dinámico');
mostrarTexto();
