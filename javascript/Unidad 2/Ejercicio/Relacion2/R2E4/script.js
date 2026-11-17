/* Escribe un programa que permita al usuario gestionar el inventario de una librería. El programa debe
usar dos arrays: uno para almacenar los títulos de los libros y otro para almacenar las cantidades dis‐
ponibles de cada libro. El usuario debe poder realizar las siguientes acciones a través de un menú:
Añadir un nuevo libro al inventario (con su título y cantidad).
Actualizar la cantidad de un libro existente.
Ver el inventario completo (título y cantidad de cada libro).
Salir del programa.

El programa debe actualizar el inventario según las acciones del usuario y seguir ejecutándose hasta
que se elija la opción de salir. */

let titulosLibros = [];
let cantidadesLibros = [];
let indiceProducto;
let cantidadLibro;

let opcion = Number(prompt(
    `1 para añadir un libro (con su cantidad).\n 2 para actualizar la cantidad de un libro existente.\n 3 para ver el inventario completo, con titulo y cantidad de cada libro.\n 4 para salir del programa.`
));
do {
if (opcion === 1) {
    let addLibro = prompt("Ingresa el titulo del libro que quieras añadir:");
    cantidadLibro = Number(prompt("Ingresa la cantidad de libros:"));
    cantidadesLibros.push(cantidadLibro);
    titulosLibros.push(addLibro);
}
console.log(`Tienes ${cantidadesLibros} de tu libro: ${titulosLibros}`);

//buscando el índice
if (opcion === 2) {
    let libroABuscar = prompt("Ingresa el título del libro que quieres actualizar:");
    // Buscamos el índice ahora que ya hay libros en el array
    indiceProducto = titulosLibros.indexOf(libroABuscar);

    if (indiceProducto !== -1) {
        let cambiarCantidad = Number(prompt("Ingresa la cantidad nueva de tu libro:"));
        cantidadesLibros[indiceProducto] = cambiarCantidad;
        console.log(`Tienes ${cantidadesLibros[indiceProducto]} de tu libro: ${titulosLibros[indiceProducto]}`);
    } else {
        console.log("No se encontró ese libro.");
    }
}

if (opcion === 3) {
    // Si hay al menos un libro, usamos la posición 0
    console.log(`Libros totales: ${titulosLibros[0]} * ${cantidadesLibros[0]}`);
}
opcion = Number(prompt(
    `1 para añadir un libro (con su cantidad).\n 2 para actualizar la cantidad de un libro existente.\n 3 para ver el inventario completo, con titulo y cantidad de cada libro.\n 4 para salir del programa.`
));
} while (opcion !== 4)


