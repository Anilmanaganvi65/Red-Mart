//add to cart js 

// selecting the elements

const productsElm = document.querySelector(".pro-container");
const cartitemElm = document.querySelector(".cart-Container");
const subtotalElm = document.querySelector(".total");
const numofitemsElm = document.querySelector(".cart-Container");
const totalnumElm = document.querySelector(".CART-TOTAL");


// rendering products

function renderProducts() {
    products.forEach((products) => {
        productsElm.innerHTML += `
        <div class="pro">
        <img alt src="${products.imgSrc}">
        <div class="des">
            <span>${products.brand}</span>
            <h3 class="pro-name"> ${products.name}</h3>
            <h5>${products.description}</h5>
            <div class="star">
                <p class="fas"> ★★★★★</p>
            </div>
            <h4>₹${products.price}</h4>
        </div>
        <a href="#buy now" style="padding-bottom: 10px;"><p class="cart-p ">Buy Now ✔</p>
            <br/>
    
        <a href="#ADDTOCART"><p class="cart-p" onclick="addToCart(${products.id})">Add to Cart 🛒</p> </a>
    </div>
        `
    })



}
renderProducts();

// create empty cart

let cart = /**JSON.parse(localStorage.getItem("CART")) || */[];

// add to cart items

function addToCart(id) {
    // cheking the existed item in cart
    if (cart.some(item => item.id === id)) {
        changeNumofUnits("plus", id);
    }
    else {
        const item = products.find((products) => products.id === id);
        cart.push({
            ...item,
            numofUnits: 1,
        }
        );
    }
    updateCart();
}

//update cart

function updateCart() {
    rendercartitems();
    rendersubtotal();

    // local storage
    // localStorage.setItem("CART", JSON.stringify(cart));
}

// calculate and render the itmes in subtotal

function rendersubtotal() {
    // cart.forEach((item) => {
        // totalprice = item.price * item.numofUnits;
        // totalitems = item.numofUnits;

    
    let totalprice = 0,
        totalitems = 0;

    if (cart.lenght != 0) {
        totalitems = cart.numofUnits;
        totalprice = cart.map((x) => {
            let { item, id } = x;
            let search = products.find((y) => y.id === id);
            return item * search.price
        })
        .reduce((x, y) => x + y, 0)
        subtotalElm.innerHTML = `
    <div class="total">
    <div class="anil">
        <div class="Subtotal">Sub-Total</div>
        <div class="items">${totalitems} items</div>
    </div>
    <div class="total-amount">₹ ${totalprice} /-</div>
    </div>
                `
        console.log(totalprice);
    } else return
    ;

// });



}


// render cart items

function rendercartitems() {
    cartitemElm.innerHTML = "";  // clear the cart
    cart.forEach((item) => {
        cartitemElm.innerHTML += `
    
    <div class="item-div">
    <img class="pro-img" src="${item.imgSrc}">


<div class="item-info">
    <h4 class="item-title">${item.name}</h4>
    <p class="item-des">${item.description}</p>
</div>
<div class="counter">
    <div class="btn-cart" onclick="changeNumofUnits('plus',${item.id})">+</div>
    <div class="count">${item.numofUnits}</div>
    <div class="btn-cart" onclick="changeNumofUnits('minus',${item.id})">-</div>
</div>
<div class="prices">
    <div class="amount">₹ ${item.price}/-</div>
    <div class="remove" onclick="removeitem(${item.id})"><u>Remove</u></div>
    
</div>
<hr class="bottom-hr">
</div>
    `;
    });

}


// remove item

function removeitem(id) {
    cart = cart.filter((item) => item.id !== id);

    updateCart();
}


// changing number of items in cart

function changeNumofUnits(action, id) {
    cart = cart.map((item) => {
        let numofUnits = item.numofUnits;
        if (item.id === id) {
            if (action === "minus" && numofUnits > 1) {
                numofUnits--;
            }
            else if (action === "plus" && numofUnits < item.instock) {
                numofUnits++;
            }
        }
        return {
            ...item,
            numofUnits,

        };
    });
    updateCart();
}

