/* Pide una dirección web de texto. Comprueba si comienza por "https://"  y si termina por ".es" .
Muestra ambos resultados sin modificar la entrada original. No es necesario realizar una validación
completa de URL. */

const PREFIJO = "https://".slice()
const SUFIJO = ".es".slice()

direccionWeb = prompt("Introduce la direccion web: ").trim();

if (direccionWeb.startsWith(PREFIJO)) {
    alert(`Prefijo = ${direccionWeb.slice(0, PREFIJO.length)}`)
}

if (direccionWeb.endsWith(SUFIJO)) {
    alert(`Sufijo = ${direccionWeb.slice(direccionWeb.length - SUFIJO.length,direccionWeb.length)}`)
}


