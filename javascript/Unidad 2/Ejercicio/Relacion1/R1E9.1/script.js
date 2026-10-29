/* Crea un array vacío llamado cola .
Añade los elementos "cliente1" , "cliente2" y "cliente3" al final del array.
Simula el proceso de atender a los clientes eliminando el primero e imprime el cliente atendido y
el estado de la cola. */


const NUM_CLIENTES = 3
let cola = []
let clienteAtendido = ""
//Crear la cola
for (let i = 0; i < NUM_CLIENTES; i++) {
    cola.push("cliente" + (i + 1))
}

console.log("Estado inicial de la cola: " + cola);


for (let i = 0; i < NUM_CLIENTES; i++) {
    clienteAtendido = cola.shift()

    console.log("Cliente atendido: " + clienteAtendido);

    if (cola.length) {
        console.log(`El estado de la cola es: ${cola}`);
    } else {
        console.log("La cola ha sido atendida correctamente.");
    }
}







//Imprimir 
/*
let impresionCola = ""
const SEPARADOR = "||"
    for (let i = 0; i < NUM_CLIENTES; i++) {
       impresionCola += cola[i]
       if (i != (NUM_CLIENTES - 1)) {
           impresionCola += SEPARADOR
       }
   } 
      
   alert(impresionCola)
   */

