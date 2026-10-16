/* ### 6\. Calculadora básica

Crea una calculadora que pida dos números y una operación (`+`, `-`, `*`, `/`) y muestre el resultado. Repite las operaciones hasta que el usuario introduzca `SALIR` en cualquiera de las preguntas. Evita dividir entre cero.

**Ejemplo:**

```
Introduce el primer número: 4
Introduce el segundo número: 5
Introduce la operación: +
El resultado de 4 + 5 es 9

Introduce el primer número: 3
Introduce el segundo número: 4
Introduce la operación: *
El resultado de 3 * 4 es 12

Introduce el primer número: SALIR
``` */

let variableSuma = "+", variableResta = "-", variableDivision = "/", variableMultiplicacion = "*";

let numeroUno = Number(prompt("Introduce el primer numero: "))
let numeroDos = Number(prompt("Introduce el segundo numero: "))
let operacionMatematica = prompt("Introduce la operación: ")

while (numeroUno > 0 || numeroDos > 0) {

    let resultadoSuma = numeroUno + numeroDos
    console.log("El resultado de " + numeroUno + " + " + numeroDos + " es " + resultadoSuma);

    if (operacionMatematica === variableResta) {
        let resultadoResta = numeroUno - numeroDos
        console.log("El resultado de " + numeroUno + " - " + numeroDos + " es " + resultadoResta);
    }
    if (operacionMatematica === variableMultiplicacion) {
        let resultadoMultiplicacion = numeroUno * numeroDos
        console.log("El resultado de " + numeroUno + " * " + numeroDos + " es " + resultadoMultiplicacion);
    }
    if (operacionMatematica === variableDivision) {
        let resultadoDivision = numeroUno / numeroDos
        console.log("El resultado de " + numeroUno + " / " + numeroDos + " es " + resultadoDivision);
    }

    numeroUno = Number(prompt("Introduce el primer numero: "))
    numeroDos = Number(prompt("Introduce el segundo numero: "))
    operacionMatematica = prompt("Introduce la operación: ")

}




