let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 0,
        name: 'PRODUCT NAME 1',
        image: '../pics/Nahida005.jpg',
        price: 10
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
        name: 'PRODUCT NAME 1',
        image: '../pics/Nahida005.jpg',
        price: 10
    },
    {
        id: 5,
        name: 'PRODUCT NAME 1',
        image: '../pics/Nahida005.jpg',
        price: 10
    },
];

let listCarts = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML =`
            <img src="${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price">RM ${value.price.toLocaleString()}.00</div>
            <button onclick="addToCart(${key})">Add to Cart</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();

function addToCart(key){
    if(listCarts[key] == null){
        listCarts[key] = products[key];
        listCarts[key].quantity = 1;
    }
    reloadCart();
}

function reloadCart(){
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>RM ${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCart.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCarts[key];
    }else{
        listCarts[key].quantity = quantity;
        listCarts[key].price = quantity * products[key].price;
    }
    reloadCart();
}

// There are two classes, one for the product list and another one is for the cart list. The problem is, the total value in the cart still remains the same after any product in the cart has been deducted. Plus,
// the value in the cart isn't equivalent to the value of each product after additions.