/* Pide una palabra o frase. Ignora espacios y mayúsculas; determina si se lee igual de izquierda a
derecha que de derecha a izquierda. Ejemplos: "reconocer"  → verdadero; "casa"  → falso. No es ne‐
cesario ignorar signos de puntuación ni tildes. */

let palabraUsuario = prompt("Introduce la palabra: ").trim().toLowerCase().split(" ").join(""); 

let esPalindromo = true 

for (let i = 0; i < palabraUsuario.length / 2 && esPalindromo; i++) { 
    if (palabraUsuario[i] != palabraUsuario[palabraUsuario.length - 1 - i]) { 
        esPalindromo = false 
    } 
} 

let resultado = "La palabra " + palabraUsuario 
if (!esPalindromo) { 
    resultado += " no"
} 
resultado += " es palindromo."

alert(resultado);

