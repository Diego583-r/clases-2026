/* Desarrolla un programa que gestione las compras en un almacén. Para esto:
Crea un array que contenga los nombres de 10 productos disponibles en el almacén.
Crea otro array que contenga los precios correspondientes a esos 10 productos.
El programa debe permitir al usuario realizar una compra solicitando el nombre del producto y la
cantidad deseada.
El programa debe buscar el precio del producto seleccionado, multiplicarlo por la cantidad y
añadirlo al total de la compra.
Si el usuario escribe "FIN", el programa debe finalizar la compra, mostrando un resumen con
todos los productos adquiridos, sus cantidades, y el costo total a pagar. */

const productosAlmacen = [
    "Arroz integral",
    "Fideos tallarines",
    "Aceite de girasol",
    "Harina de trigo",
    "Azucar blanco",
    "Pure de tomates",
    "Lentejas secas",
    "Atun en lata",
    "Leche larga vida",
    "Cafe molido"
];

const preciosAlmacen = [
    2.50, // Arroz integral
    1.80, // Fideos tallarines
    4.20, // Aceite de girasol
    1.20, // Harina de trigo 000
    1.50, // Azúcar blanco
    0.95, // Puré de tomates
    2.10, // Lentejas secas
    3.50, // Atún en lata
    1.60, // Leche larga vida
    5.90  // Café molido
];

let productosTotales
let separador = " - "
let compraUsuario = prompt(`Que te intesaria comprar?
Productos: \n ${productosAlmacen.join(separador)} \n FIN para terminar`)

let indiceProducto = productosAlmacen.indexOf(compraUsuario.trim());


let cantidadCompraUsuario
let precioProducto = preciosAlmacen[indiceProducto] * cantidadCompraUsuario

do {

    indiceProducto = productosAlmacen.indexOf(compraUsuario.trim());

    if (productosAlmacen !== -1) {
        cantidadCompraUsuario = Number(prompt(`Introduce la cantidad del producto que has elegido:`))
        precioProducto = preciosAlmacen[indiceProducto] * cantidadCompraUsuario
        productosTotales += compraUsuario

        console.log(`Producto elegido: ${productosAlmacen[indiceProducto]} * ${cantidadCompraUsuario}`);
        console.log("El coste total de este producto es: " + precioProducto);

    } else {
        console.log("Lo sentimos, ese producto no está en el almacén.");
    }

    compraUsuario = prompt(`Que te intesaria comprar?
Productos: \n ${productosAlmacen.join(separador)} \n FIN para terminar`)

    console.log(`Resumen de la compra: \n Productos elegidos: ${productosTotales}`)

} while (compraUsuario !== "FIN")



