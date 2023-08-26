/**
 * this funtion calculates total price of a new order
 * @param {Array} products cart: Array of objects
 * @returns {number} Total price
 */

export const totalPrice =(products)=>{
return products.reduce((sum,product)=> sum+product.price,0)
}