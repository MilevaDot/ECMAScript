// Así concatenamos strings de una manera poco amigable:
let hello = 'Hello';
let world = 'world';
let epicPhrase = hello + ' ' + world + '!';

// Y con Temaplate literals:
// Usaremos comillas francesa: ``;

let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);


// Multi-line strings poco amigable:
let lorem = 'Esto es un string \n' + 'Esta es otra linea';

// Y ahora con lo nuevo de ES6:
let lorem2 = `Esta es una frase épica
    esta es la continuación de la frase épica.`;

console.log(lorem)
console.log(lorem2)