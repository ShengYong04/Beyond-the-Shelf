// Initialize the class from HTML

let openShopping = document.querySelector('.shopping');
let deleteAll = document.querySelector('.delete');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let isOpen = false;

// If there is a 'click' event, sidebar will be shown. Second time being clicked will hide the sidebar.
openShopping.addEventListener('click', () => {
    if (!isOpen) {                              // isOpen is a boolean indicator which is initially set to false. This if statement checks if the sidebar is already shown. In this case, the condition will be 'false' for sure
        body.classList.add('active');           // If the sidebar hasn't shown, a class 'active' which is the sidebar will be added to body for displaying contents within it.
    } else {                                    // When being clicked second time, the class 'active' will be removed from the body. Meaning the sidebar will be hidden.
        body.classList.remove('active');
    }
    isOpen = !isOpen;
    /* After the if statement is executed, the value of isOpen is flipped from false to true. This keeps track of the current state of the sidebar, indicating that it's now open.
    If the openShopping class is clicked again, the event listener function is triggered once more. This time, the else block executes because isOpen is now true. The else block removes the CSS class 'active' from the body, hiding the shopping sidebar.
    The line isOpen = !isOpen; is executed again, flipping the value of isOpen back to false. This indicates that the sidebar is now closed. */                           
});

deleteAll.addEventListener('click', () =>{      // When the deleteAll class is clicked, the function clearCart() is called.
    clearCart();
})

function clearCart(){
    listCarts = [];                             // Remove everything in the listCarts array.
    reloadCart();                               // Meanwhile, reloadCart() clears every detail inside the sidebar
}

// Create an array to store all detail of products
let products = [
    {
        id: 0,                                  // Here's the sequence of a product
        name: 'PRODUCT NAME 1',                 // Here's a product name
        image: '../pics/Nahida005.jpg',         // Here specifies the relative path of a product image
        price: 10                               // Here's price of a product
    },
    {
        id: 1,
        name: 'PRODUCT NAME 2',
        image: '../pics/Nahida005.jpg',
        price: 10
    },
    {
        id: 2,
        name: 'PRODUCT NAME 1',
        image: '../pics/Nahida005.jpg',
        price: 10
    },
    {
        id: 3,
        name: 'PRODUCT NAME 1',
        image: '../pics/Nahida005.jpg',
        price: 10
    },
    {
        id: 4,
        name: 'We Are Not Free',
        image: '../images/product5.jpg',
        price: 54.95
    },
    {
        id: 5,
        name: 'PRODUCT NAME 1',
        image: '../pics/Nahida005.jpg',
        price: 10
    },
];

//List out all the product within the array 'products'
let listCarts = [];                                     // An empty array is created
function initApp(){                                     // Define a function 'initApp()'
    products.forEach((value, key)=>{                    // Using forEach loop function to iterate through each element in the products
        let newDiv = document.createElement('div');     // Declare a variable 'newDiv' to create a 'div' in HTML
        newDiv.classList.add('item');                   // Assign a class name 'item' to the variable 'newDiv'

        // Line 2: Relative path from the array 'products' is iterated in.
        // `${value.element} is used to iterate value from array 'products'`
        newDiv.innerHTML =`
            <a href="../pics/Nahida005.jpg" target="_blank"><img src="${value.image}"/></a>     
            <div class="title">${value.name}</div>
            <div class="price">RM ${value.price.toLocaleString()}.00</div>
            <button onclick="addToCart(${key})" title="Add to cart">Add to Cart</button>
        `;
        list.appendChild(newDiv);                       // Append variable 'newDiv' under the parent class 'list'
    })
}
initApp();                                              // The function is called to execute the above contents

function addToCart(key){
    if(listCarts[key] == null){                         // If the listCarts[] is null, execute the following code:
	listCarts[key] = {...products[key], quantity: 1};	//Create a new property 'quantity' equals to 1 to the array 'products'

    //Store the updated cart in localStorage
    }
    reloadCart();
}

function reloadCart(){
    listCart.innerHTML = '';                            // Clear contents in the listCart before updating the cart with any current product
    let count = 0;                                      // Initialize a variable 'count' to keep track of the total number of products inside the cart
    let totalPrice = 0;                                 // Initialize a variable 'totalPrice' to keep track of the total price of all products in the cart
    listCarts.forEach((value, key) => {
        totalPrice = totalPrice + value.price;          // Accumulate prices whenever a product is added
        count = count + value.quantity;                 // Count the number of products inside the cart //

        if(value != null){                              // Ensure that only valid objects are processed
            let newDiv = document.createElement('li');  // Create element 'li' to the newDiv variable

            // Line 4: Display the constant price from the products array
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>RM ${products[key].price}</div>    
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCart.appendChild(newDiv);               // Append variable 'newDiv' under the parent class 'listCart'
        }
    })
    total.innerText = `RM ${totalPrice.toLocaleString()}.00`;
    quantity.innerText = count;                         // Let the number of products inside the cart, variable 'count' displays the number counted. //
    
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCarts[key];                          // If the quantity is 0, the listCarts will be removed from the sidebar
    }else{
        listCarts[key].quantity = quantity;             //  the function updates the quantity property of the product in the listCarts array with the new quantity value.
        listCarts[key].price = quantity * products[key].price;  
        /*The function recalculates the product's price based on the new quantity and the original price from the products array. 
        This ensures that the price displayed in the cart reflects the correct total price for the updated quantity*/
    }
    reloadCart();
}

function isCartNotEmpty(){
    return listCarts.length > 0;
}

function payment(){
    if (isCartNotEmpty()){
        window.location.href = "payment.html";
    }else{
        alert("Your cart is empty! Please ensure that your products have been added to cart.");
        window.location.href = "#";
    }
}
