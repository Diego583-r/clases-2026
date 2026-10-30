/* Crea un array llamado nombres  con los valores "Ana" , "Pedro" .
Añade "Laura"  al final del array y "Carlos"  al inicio.
Imprime el array después de realizar las operaciones. */

nombres = ["Ana" , "Pedro"]
nombresResultado = nombres.slice();

nombres.unshift("Carlos");
nombres.push("Laura")

console.log(`Nombres actuales: ${nombresResultado}`);
console.log(`Nombres añadidos: ${nombres.at(0)}, ${nombres.at(-1)}`);
console.log(`Resultado final: ${nombres}`);


