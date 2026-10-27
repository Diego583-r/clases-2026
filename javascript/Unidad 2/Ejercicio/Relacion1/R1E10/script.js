/* Crea un array vacío llamado pila .
Añade los números 10 , 20 y 30 al final de la pila.
Simula el proceso de extraer elementos de la pila eliminando el último elemento e imprime el
número extraído y el estado de la pila. */

pila = [10, 20, 30]
let pilaEliminado

console.log(`Numeros actuales: ${pila}`);
while (pila.length) {
    pilaEliminado = pila.pop(-1)
console.log(`Estado de la pila: ${pila} - ${pilaEliminado}`);
console.log(`Numero eliminado: ${pilaEliminado}`);
}   



