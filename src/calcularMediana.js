// Versión con defecto
// src/calcularMediana.js
// src/calcularMediana.js
function calcularMedianaDefecto(numeros) {
    if (numeros.length === 0) {
        throw new Error("Array vacío"); // Lanzar un error para arrays vacíos
    }
    numeros.sort((a, b) => a - b);
    const mitad = Math.floor(numeros.length / 2);
    if (numeros.length % 2 === 0) {
        return (numeros[mitad - 1] + numeros[mitad]) / 2;
    } else {
        return numeros[mitad];
    }
}


function calcularMedianaCorregida(numeros) {
    if (numeros.length === 0) return null;
    numeros.sort((a, b) => a - b);
    const mitad = Math.floor(numeros.length / 2);
    if (numeros.length % 2 === 0) {
        return (numeros[mitad - 1] + numeros[mitad]) / 2;
    } else {
        return numeros[mitad];
    }
}

module.exports = { calcularMedianaDefecto, calcularMedianaCorregida };

