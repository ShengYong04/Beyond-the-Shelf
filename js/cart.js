// Import the displayCartItems function from addtocart.js
import { displayCartItems } from 'AddtoCart.js';

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    displayCartItems();
});

// Other code specific to the cart page
// ...


document.addEventListener('DOMContentLoaded', function() {
    const cartItemsList = document.querySelector('.cart-items');

    // Retrieve cart information from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        const cart = JSON.parse(savedCart);

        // Loop through cart items and display them
        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.innerHTML = `
                <div><img src="${item.image}"/></div>
                <div>${item.name}</div>
                <div>RM ${item.price}</div>
                <div>Quantity: ${item.quantity}</div>
            `;
            cartItemsList.appendChild(cartItem);
        });
    } else {
        const emptyCartMessage = document.createElement('li');
        emptyCartMessage.textContent = 'Your cart is empty.';
        cartItemsList.appendChild(emptyCartMessage);
    }
});
