// imports:
import {getProductsFromLs} from './localStorage.js';
import calculation from './calcTotalPrice.js';
import createProductCart from './createProductCart.js';
import createProductsOfCart from './cart.js';

// fix values:
let totalPrice = 0;

// show all localStorage Products:
function showAllLsProducts(quantity = 1, isItWork = false) {
    // clear counter:
    totalPrice = 0;
    // clear containers:
    cartProductsContainer.innerHTML = '';
    const producstData = getProductsFromLs();
    producstData.forEach(productData => {
        // create new product cart:
        createProductCart(productData, quantity);
        // create products of cart:
        if (isItWork) {
            createProductsOfCart(productData);
        }
        // calc total price:
        totalPrice += (productData.price * quantity);
    });
    // cart products count - calc total prices:
    calculation(producstData, totalPrice, isItWork);
}

export default showAllLsProducts;