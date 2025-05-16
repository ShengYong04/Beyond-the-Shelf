// Initialize the class from HTML

let deleteAll = document.querySelector('.delete');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let isOpen = false;
let lists = document.querySelector(".lists");
let addtocart = document.querySelector(".add-to-cart-btn");

deleteAll.addEventListener('click', () =>{      // When the deleteAll class is clicked, the function clearCart() is called.
    clearCart();
});

function clearCart(){
    listCarts = [];                             // Remove everything in the listCarts array.
    reloadCart();                               // Meanwhile, reloadCart() clears every detail inside the sidebar
}

// Create an array to store all detail of products
let products = [
    {
        id: 0,                                  // Here's the sequence of a product
        name: 'Tell Me No Lies',                 // Here's a product name
        image: '../images/product1.jpg',         // Here specifies the relative path of a product image
        price: 94.45                               // Here's price of a product
    },
    {
        id: 1,
        name: 'Even If We Break',
        image: '../images/product2.jpg',
        price: 51.95
    },
    {
        id: 2,
        name: 'That Weekend',
        image: '../images/product3.jpg',
        price: 56.50
    },
    {
        id: 3,
        name: 'Influence',
        image: '../images/product4.jpg',
        price: 51.95
    },
    {
        id: 4,
        name: 'We Are Not Free',
        image: '../images/product5.jpg',
        price: 54.95
    },
    {
        id: 5,
        name: 'See You See You Yesterday',
        image: '../images/product5.jpg',
        price: 65.90
    },
    {
        id: 6,
        name: 'See You Yesterday',
        image: '../images/product7.jpeg',
        price: 94.95
    },
    {
        id: 7,
        name: 'Where Light Goes',
        image: '../images/product8.jpeg',
        price: 55.90
    },
    {
        id: 8,
        name: 'Exactly Where You Need To Be',
        image: '../images/product9.jpeg',
        price: 55.90
    },
    {
        id: 9,
        name: 'Friends Like These',
        image: '../images/product10.jpg',
        price: 59.90
    },
    {
        id: 10,
        name: 'The Reluctant Vampire Queen Bites Back (The Reluctant Vampire Queen 2)',
        image: '../images/product11.jpeg',
        price: 49.90
    },
    {
        id: 11,
        name: 'Bad Witch Burning',
        image: '../images/product12.jpeg',
        price: 57.95
    },
    {
        id: 12,
        name: 'I Feed Her To Beast And The Beast Is Me (UK)',
        image: '../images/product13.jpg',
        price: 59.90
    },
    {
        id: 13,
        name: 'Cherish',
        image: '../images/product14.jpg',
        price: 59.90
    },
    {
        id: 14,
        name: 'Charm',
        image: '../images/product15.jpg',
        price: 59.90
    },
    {
        id: 15,
        name: 'Where Light Goes',
        image: '../images/product16.jpeg',
        price: 55.90
    },
    {
        id: 16,
        name: '28 Days: A Novel of Resistance in the Warsaw Ghetto',
        image: '../images/product17.jpg',
        price: 53.90
    },
    {
        id: 17,
        name: 'The Awakening of Malcolm X',
        image: '../images/product18.jpeg',
        price: 92.74
    },
    {
        id: 18,
        name: 'Good Devils',
        image: '../images/product19.jpeg',
        price: 46.89
    },
    {
        id: 19,
        name: 'Fool\'s Gold (Order of Darkness #3)',
        image: '../images/product20.jpeg',
        price: 53.90
    },
    {
        id: 20,
        name: 'Maidens Of The Cave',
        image: '../images/product21.jpeg',
        price: 58.50
    },
    {
        id: 21,
        name: 'The Bones of the Story: A Novel Paperback',
        image: '../images/product22.jpg',
        price: 89.50
    },
    {
        id: 22,
        name: 'Tick Tock: A Times Thriller of the Year',
        image: '../images/product23.jpeg',
        price: 56.95
    },
    {
        id: 23,
        name: 'Suspect',
        image: '../images/product24.jpg',
        price: 63.95
    },
    {
        id: 24,
        name: 'The Partisan',
        image: '../images/product25.jpeg',
        price: 94.95
    },
    {
        id: 25,
        name: 'The Jasad Heir (The Scorched Throne #1)',
        image: '../images/product26.jpg',
        price: 89.50
    },
    {
        id: 26,
        name: 'The Mighty Nein- The Nine Eyes of Lucien (Critical Role)',
        image: '../images/product27.jpg',
        price: 59.90
    },
    {
        id: 27,
        name: 'Daughter of Darkness (Viridian Deep #2)',
        image: '../images/product28.jpg',
        price: 84.95
    },
    {
        id: 28,
        name: 'Immortal Longings (US)',
        image: '../images/product2.jpg',
        price: 94.50
    },
    {
        id: 29,
        name: 'The Last Dragon King (The Kings of Avalier #1)',
        image: '../images/product30.jpeg',
        price: 56.95
    },
    {
        id: 30,
        name: 'The Singularities (UK)',
        image: '../images/brproduct1.jpg',
        price: 63.50
    },
    {
        id: 31,
        name: 'Robert B. Parker\'s Revenge Tour',
        image: '../images/brproduct2.jpg',
        price: 46.95
    },
    {
        id: 32,
        name: 'Tell Me Your Secrets',
        image: '../images/brproduct3.jpg',
        price: 89.95
    },
    {
        id: 33,
        name: 'William Warwick #06: Traitors Gate',
        image: '../images/brproduct4.jpg',
        price: 139.95
    },
    {
        id: 34,
        name: 'Shatter Me #2: Unravel Me (US)',
        image: '../images/brproduct5.jpg',
        price: 59.90
    },
    {
        id: 35,
        name: 'Emporium: Penang Chronicles III',
        image: '../images/brproduct6.jpg',
        price: 49.90
    },
    {
        id: 36,
        name: 'The Psychology of Money : Timeless lessons on wealth, greed, and happinessies',
        image: '../images/brproduct7.jpg',
        price: 89.90
    },
    {
        id: 37,
        name: 'What You Are Looking For is in The Library (UK)',
        image: '../images/brproduct8.jpg',
        price: 82.00
    },
    {
        id: 38,
        name: 'Tell Me No Lies',
        image: '../images/brproduct9.jpg',
        price: 46.90
    },
    {
        id: 39,
        name: 'The 48 Laws of PowerT',
        image: '../images/brproduct10.jpg',
        price: 64.95
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
            <img src="${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price">RM ${value.price}</div>
            <button onclick="addToCart(${key})" title="Add to cart">Add to Cart</button>
        `;
        lists.appendChild(newDiv);                       // Append variable 'newDiv' under the parent class 'lists'
    });
}
initApp();                                              // The function is called to execute the above contents

// Add a click event listener to each button
addtocart.addEventListener('click', () =>{
    let productKey = parseInt(addtocart.getAttribute('data-key'));
    addToCart(productKey);
});

function addToCart(key){
    if(listCarts[key] == null){                         // If the listCarts[] is null, execute the following code:
	listCarts[key] = {...products[key], quantity: 1};	//Create a new property 'quantity' equals to 1 to the array 'products'
    }else {
        // If the product already exists in the cart, increment the quantity
        listCarts[key].quantity += 1;
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
    });
    if (totalPrice.toLocaleString().indexOf(".")) {
        total.innerText = `RM ${totalPrice.toLocaleString()}`;
    } else {
        total.innerText = `RM ${totalPrice.toLocaleString()}.00`;
    }
    
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
        window.location.href = "TermsAndServices.html";
    }else{
        alert("Your cart is empty! Please ensure that your products have been added to cart.");
        window.location.href = "#";
    }
}
