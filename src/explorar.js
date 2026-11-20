const {ventas} = require('./datos.js');

console.log("Total de ventas:", ventas.length);
console.log("Primer registro:", ventas[0]);
console.log("Último registro:", ventas[ventas.length -1]);
console.log("Producto de la posicion 4:", ventas[4].producto);
console.table(ventas)
