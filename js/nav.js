//javascript for responsive navigation sidebar menu
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
menu.classList.remove('active');
});

// Initialize an empty wish list array to store product IDs.
let wishList = [];

// Function to set up event listeners on product buttons.
function setup() {
    // Get all elements with the class "wish" (assumed to be the image buttons).
    let wishButtons = document.querySelectorAll(".wish");

    // Loop through each wish button.
    for (let i = 0; i < wishButtons.length; i++) {
        // Add a click event listener to each wish button.
        wishButtons[i].addEventListener("click", function(e) {
            // Get the ID of the clicked wish button.
            let productId = e.target.getAttribute("id");

            // Find the corresponding product div.
            let productDiv = document.querySelector(`.product${productId}`);

            if (productDiv) {
                // Find the yes_wish and no_wish elements within the product div.
                let yesWish = productDiv.querySelector(".yes_wish");
                let noWish = productDiv.querySelector(".no_wish");

                // Check if the product ID is not already in the wish list.
                   
                if (yesWish && noWish) {
                    yesWish.classList.remove("none");
                    noWish.classList.add("none");
                }
                addItem(productId);
            }
        });
    }
}

// Function to add a product to the wish list.
function addItem(productId) {
    // Add the productId to the wishList array to keep track of items in the wishlist.
    wishList.push(productId);

    // Find the corresponding book element.
    let bookDiv = document.querySelector(`.product${productId} .book`);

    // Clone the bookDiv element.
    let clone = bookDiv.cloneNode(true);
    clone.setAttribute("id", "wish" + productId);

    let one_item = document.createElement("div");
    one_item.className = "wish_product";
    one_item.appendChild(clone);

    // Get the aside element (wishlist) and append the cloned element to it.
    let aside = document.getElementById("wishlistItem");
    aside.appendChild(one_item);
}

let cancel_wishButtons = document.querySelectorAll(".cancel_wish");

// Loop through each cancel_wish button.
for (let i = 0; i < cancel_wishButtons.length; i++) {
    // Add a click event listener to each cancel_wish button.
    cancel_wishButtons[i].onclick = function(e) {
        // Get the ID of the clicked cancel_wish button.
        let productId = e.target.getAttribute("id");

        let productDiv = document.querySelector(`.product${productId}`);
        if (productDiv) {
            let yesWish = productDiv.querySelector(".yes_wish");
            let noWish = productDiv.querySelector(".no_wish");
            
            if (yesWish && noWish) {
                yesWish.classList.add("none");
                noWish.classList.remove("none");
            }
        }

        // Call the removeItem function with the product ID.
        removeItem(productId);
    }
}

let wishlistContainer = document.getElementById("wishlistItem");
wishlistContainer.addEventListener("click", function(e) {
    // Check if the clicked element is a "Remove" button.
    if (e.target.classList.contains("cancel_wish")) {
        // Extract the product ID from the "data-product-id" attribute.
        let productId = e.target.getAttribute("id");
        
        let productDiv = document.querySelector(`.product${productId}`);
        if (productDiv) {
            let yesWish = productDiv.querySelector(".yes_wish");
            let noWish = productDiv.querySelector(".no_wish");
            
            if (yesWish && noWish) {
                yesWish.classList.add("none");
                noWish.classList.remove("none");
            }
        }
        // Call the removeItem function with the product ID to remove the item from the wishlist.
        removeItem(productId);
    }
});

// Function to remove an item from the wish list.
function removeItem(productId) {
    // Update the wishList array by filtering out the removed item's productId.
    wishList = wishList.filter(element => element !== productId);

    // Remove the wish list item's div from the document.
    let wishlistItem = document.getElementById("wish" + productId);
    if (wishlistItem) {
        wishlistItem.remove();
    }
}

const wish_no_hover = '../icon/wish_normal.png';
const wish_yes_hover = '../icon/wish_hover.png';
let hover_wish = document.getElementsByClassName("wish")
let hover_cancelwish = document.getElementsByClassName("cancel_wish")

// Loop through each element with the "wish" class and add event listeners
for (let i = 0; i < hover_wish.length; i++) {
    hover_wish[i].addEventListener('mouseover', () => {
        hover_wish[i].src = wish_yes_hover;
    });

    hover_wish[i].addEventListener('mouseout', () => {
        hover_wish[i].src = wish_no_hover;
    });
}

for (let i = 0; i < hover_cancelwish.length; i++) {
    hover_cancelwish[i].addEventListener('mouseover', () => {
        hover_cancelwish[i].src = wish_no_hover;
    });

    hover_cancelwish[i].addEventListener('mouseout', () => {
        hover_cancelwish[i].src = wish_yes_hover;
    });
}

var fav = document.getElementById("fav");
var list = document.querySelector(".list");
var close =document.getElementById("close");
var fav_img = document.getElementById("fav_img");
const fav_hover = "../icon/wish_button_hover.png";
const fav_normal = "../icon/wish_button_normal.png";
fav.addEventListener("click", () => {
list.classList.add("click");
});

close.addEventListener("click", () => {
list.classList.remove("click");
});

fav.addEventListener("mouseover",() => {
    fav_img.src = fav_hover;
});

fav.addEventListener("mouseout",() => {
    fav_img.src = fav_normal;
});

var fav2 = document.getElementById("fav2");
var fav_img2 = document.getElementById("fav2_img");
fav2.addEventListener("click", () => {
list.classList.add("click");
});

fav2.addEventListener("mouseover",() => {
    fav_img2.src = fav_hover;
});

fav2.addEventListener("mouseout",() => {
    fav_img2.src = fav_normal;
});

var account = document.getElementById("account");
var account_img = document.getElementById("account_img")
const account_hover = "../icon/user_hover.png";
const account_normal = "../icon/user_normal.png";

account.addEventListener("mouseover",() => {
    account_img.src = account_hover;
});

account.addEventListener("mouseout",() => {
    account_img.src = account_normal;
});


var cart = document.getElementById("cart");
var cart_img = document.getElementById("cart_img")
const cart_hover = "../icon/cart_hover.png";
const cart_normal = "../icon/cart_normal.png";

cart.addEventListener("mouseover",() => {
    cart_img.src = cart_hover;
});

cart.addEventListener("mouseout",() => {
    cart_img.src = cart_normal;
});

// Add a "load" event listener to call the setup function when the window loads.
window.addEventListener("load", setup);

//Start Implementation of AddtoCart Function
let cartShow = document.querySelector(".cart-btn");

// Function to toggle the sidebar
function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

// Add a click event listener to the cart button
let cartButton = document.getElementById("cart");
cartButton.addEventListener("click", toggleSidebar);

// Function to close the sidebar
function closeSidebar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("open");
}

// End Implementation of AddtoCart Function
