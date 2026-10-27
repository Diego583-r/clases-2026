/* Crea un array vacío llamado cola .
Añade los elementos "cliente1" , "cliente2" y "cliente3" al final del array.
Simula el proceso de atender a los clientes eliminando el primero e imprime el cliente atendido y
el estado de la cola. */


cola = []
const NUMCLI = 3;
for (let i = 0; i < NUMCLI; i++) {
    cola.push("Cliente" + (i+1))
}

let clienteAtendido = ""
let longitudCola = 0;
console.log(`Tamaño fila actual de clientes: ${cola.length}`)

while (cola.length) {
    longitudCola = cola.length - 1
    clienteAtendido = cola.shift();
    console.log(`Cliente atendido: ${clienteAtendido}`);
    console.log(`El estado de la cola es: ${longitudCola}`);
}

