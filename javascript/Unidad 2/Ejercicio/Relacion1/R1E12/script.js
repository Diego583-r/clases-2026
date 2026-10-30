/* Usando el array nombres  del ejercicio anterior, elimina el primer y el último elemento.
Imprime el array resultante y los valores eliminados. */

nombres = ["Carlos", "Ana" , "Pedro", "Laura"]
nombresResultado = nombres.slice();

nombres.shift();
nombres.pop()

console.log(`Nombres actuales: ${nombresResultado}`);
console.log(`Nombres borrados: ${nombresResultado.at(0)}, ${nombresResultado.at(-1)}`);
console.log(`Resultado final: ${nombres}`);