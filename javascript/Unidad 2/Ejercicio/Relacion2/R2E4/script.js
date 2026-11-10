/* Escribe un programa que permita al usuario gestionar el inventario de una librería. El programa debe
usar dos arrays: uno para almacenar los títulos de los libros y otro para almacenar las cantidades dis‐
ponibles de cada libro. El usuario debe poder realizar las siguientes acciones a través de un menú:
Añadir un nuevo libro al inventario (con su título y cantidad).
Actualizar la cantidad de un libro existente.
Ver el inventario completo (título y cantidad de cada libro).
Salir del programa.

El programa debe actualizar el inventario según las acciones del usuario y seguir ejecutándose hasta
que se elija la opción de salir. */

titulosLibros = [];
cantidadesLibros = [];

let añadirLibro = prompt("Ingresa el titulo del libro que quieras añadir:")
let cantidadLibro = Number(prompt("Ingresa la cantidad de libros:"))

cantidadesLibros.push(cantidadLibro)
titulosLibros.push(añadirLibro)

let cambiarCantidad = Number(prompt("Ingresa la cantidad nueva de tu libro:"))

const ultimoIndice = cantidadesLibros.length - 1;

if (ultimoIndice >= 0) {
    cantidadesLibros[ultimoIndice] = cambiarCantidad;
}

console.log("Libros:", titulosLibros);
console.log("Cantidades:", cantidadesLibros);


