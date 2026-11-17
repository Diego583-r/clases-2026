/* Escribe un programa que permita al usuario llevar un control de sus gastos mensuales. Usa dos arra‐
ys: uno para los nombres de los gastos (por ejemplo, "comida", "transporte", etc.) y otro para las
cantidades gastadas en cada categoría. El programa debe mostrar un menú con las siguientes opcio‐
nes:
Añadir un nuevo gasto (nombre y cantidad).
Ver el total de gastos hasta el momento.
Ver los gastos más altos y más bajos del mes.
Ver el promedio de gasto diario (suponiendo un mes de 30 días).
Salir del programa */

let nombreGastos = [];
let cantidadesGastadas = [];
let addGasto;
let cantidadGasto;
let gastoMaximo;
let gastoMinimo;
let promedioGastoDiario;
let sumaTotal = 0;

let opcion = Number(prompt(
    `1 para añadir un gasto (con su cantidad).\n 2 para ver los gastos hasta el momento.\n 3 para ver el gasto mas alto y bajo del mes.\n 4 para ver el promedio de gasto diario (30 dias).\n 5 para salir del programa.`
));

do {
    if (opcion === 1) {
        addGasto = prompt("Ingresa el nombre del gasto que quieras añadir:");
        nombreGastos.push(addGasto);

        cantidadGasto = Number(prompt(`Ingresa la cantidad de tu gasto:`));
        cantidadesGastadas.push(cantidadGasto);
    }

    if (opcion === 2) {
        console.log(`Tus gastos hasta el momento son: ${nombreGastos} y ${cantidadesGastadas}`);
    }

    if (opcion === 3) {
        gastoMaximo = Math.max(...cantidadesGastadas);
        gastoMinimo = Math.min(...cantidadesGastadas);
        console.log(`El gasto mas alto es: ${gastoMaximo}\nTu gasto minimo es: ${gastoMinimo}`);
    }

    else if (opcion === 4) {
        if (cantidadesGastadas.length === 0) {
            console.log("No hay gastos para calcular el promedio.");
        } else {
            let sumaTotal = 0;
            for (let i = 0; i < cantidadesGastadas.length; i++) {
                sumaTotal += cantidadesGastadas[i];
            }
            let promedioGastoDiario = sumaTotal / 30;
            console.log(`El promedio de gasto diario (30 días) es: $${promedioGastoDiario.toFixed(2)}`);
        }
    }

    opcion = Number(prompt(
        `1 para añadir un gasto (con su cantidad).\n 2 para ver los gastos hasta el momento.\n 3 para ver el gasto mas alto y bajo del mes.\n 4 para ver el promedio de gasto diario (30 dias).\n 5 para salir del programa.`
    ));

} while (opcion !== 5);
