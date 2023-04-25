const nombre = 'Leonardo';
const paisNacimiento = 'Venezuela';
const paisDomicilio = 'Chile';
const deporteFavorito = 'fútbol';

const texto = 'Mi nombre es '+nombre+', naci en '+paisNacimiento+".\n"
            + 'Actualmente vivo en '+paisDomicilio+".\n"
            + 'Mi deporte favorito es '+ deporteFavorito;

const textoTemplate = `Mi nombre es ${nombre}, naci en ${paisNacimiento}.
Actualmente vivo en ${paisDomicilio}.
Mi deporte favorito es ${deporteFavorito}`;

console.log(texto);
console.log('************');
console.log(textoTemplate);