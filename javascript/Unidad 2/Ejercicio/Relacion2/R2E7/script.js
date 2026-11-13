/* Escribe un programa que permita al usuario llevar un control de sus gastos mensuales. Usa dos arra‐
ys: uno para los nombres de los gastos (por ejemplo, "comida", "transporte", etc.) y otro para las
cantidades gastadas en cada categoría. El programa debe mostrar un menú con las siguientes opcio‐
nes:
Añadir un nuevo gasto (nombre y cantidad).
Ver el total de gastos hasta el momento.
Ver los gastos más altos y más bajos del mes.
Ver el promedio de gasto diario (suponiendo un mes de 30 días).
Salir del programa */

nombreGastos = []
cantidadesGastadas = []
let indiceProducto;
let cantidadGasto;

let opcion = Number(prompt(
    `1 para añadir un gasto (con su cantidad).\n 2 para ver los gastos hasta el momento.\n 3 para ver el gasto mas alto y bajo del mes.\n 4 para ver el promedio de gasto diario (30 dias).\n 4 para salir del programa.`
));
if (opcion === 1) {
    let addGasto = prompt("Ingresa el nombre del gasto que quieras añadir:");
    cantidadGasto = Number(prompt("Ingresa la cantidad:"));
    cantidadesGastadas.push(cantidadGasto);
    nombreGastos.push(addGasto);
}
console.log(`Tienes ${cantidadesGastadas} de tus gastos: ${nombreGastos}`);


let gastoMaximo = Math.max(...cantidadesGastadas)