/* Crea un array con los números [100, 200, 300] .
Usa una variable temporal para intercambiar los valores del primer y tercer elemento, e imprime
el array después del cambio. */


let array =[100, 200, 300]


let variableTemporal = array.at(0);


array[0] = array[array.length - 1]; 
array[array.length - 1] = variableTemporal;

alert(array);
console.log(array);



