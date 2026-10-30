/* Crea un array llamado letras  con los valores "a" , "b" , "c" , "d" . 
Invierte el array utilizando alguno (o varios) de los siguientes métodos: push() , pop() , shift()  y 
unshift() . Imprime el array invertido. */

let letras = ["a", "b", "c", "d"];
let variableTemporal = letras.slice()
let letrasInvertidas = [];

while (letras.length > 0) {
    // pop() saca el último elemento
    // push() lo mete al final del nuevo array
    letrasInvertidas.push(letras.pop());
    console.log(letrasInvertidas)
}
letras = letrasInvertidas;

console.log(`Letras iniciales: ${variableTemporal}`);
console.log(`Resultado de la inversion = ${letras}`);

