

// esta es otra forma de hacer la funcion para sumar
// export const totalPrice = (products) => {
//     return (
//         products.reduce((sum, products) => sum + products.totalPrice, 0)
//     );
// }

/**
 * this function calculates total price if a new order
 * @param {Array} products cartProducts: Array of objets
 * @returns {number} Total Price
 */

// aca estamos creando una funcion parametrizada

export const totalPrice = (products) => {
    let sum = 0
    // la funcion forEach nos pide que pongamos los elementos para procesarlos uno a uno
    // aca le decimos tenemos un acumulador que empieza desde cero pero resulta que necesito que el precio de este producto 
    // me lo agregues al acumulador que teniamos
    products.forEach(product => sum += product.price);
    return (sum)
}