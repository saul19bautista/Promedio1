// tests/calcularMedianaDefecto.test.js
const { calcularMedianaDefecto, calcularMedianaCorregida } = require('../src/calcularMediana');

describe('Mediana con defecto', () => {
    test('Debería devolver 30 para [10, 20, 30, 40, 50]', () => {
        expect(calcularMedianaDefecto([10, 20, 30, 40, 50])).toBe(30);
    });

    test('Debería devolver 25 para [10, 20, 30, 40]', () => {
        expect(calcularMedianaDefecto([10, 20, 30, 40])).toBe(25);
    });

    test('Debería lanzar un error con array vacío', () => {
        expect(() => calcularMedianaDefecto([])).toThrow(); // Debería lanzar un error con array vacío
    });
});

describe('Mediana corregida', () => {
    test('Debería devolver 30 para [10, 20, 30, 40, 50]', () => {
        expect(calcularMedianaCorregida([10, 20, 30, 40, 50])).toBe(30);
    });

    test('Debería devolver 25 para [10, 20, 30, 40]', () => {
        expect(calcularMedianaCorregida([10, 20, 30, 40])).toBe(25);
    });

    test('Debería devolver null con array vacío', () => {
        expect(calcularMedianaCorregida([])).toBeNull(); // Manejo adecuado del array vacío
    });
});

