var minus=document.getElementsByClassName("minus");
var plus=document.getElementsByClassName("plus");
var counter=document.getElementsByClassName("counter");
var cardparent=document.getElementsByClassName("cardparent");



for(let i=0;i<minus.length;i++){
    minus[i].addEventListener("click", function(){
    if(minus[i].nextElementSibling.value>0){
        minus[i].nextElementSibling.value--
    }
    
})
}

for(let i=0;i<plus.length;i++){
    plus[i].addEventListener("click", function(){
    plus[i].previousElementSibling.value++  
})
}

/*view icons*/
var cardparent=document.getElementsByClassName("cardparent");
for(let i=0;i<cardparent.length;i++){
    let opt=cardparent[i].querySelector("#opt");
cardparent[i].addEventListener("mouseenter", function(){
    cardparent[i].appendChild(opt);
    opt.id="show";
})
}

// /*view icons*/
// var cardparent=document.getElementsByClassName("cardparent");
// for(let i=0;i<cardparent.length;i++){
//     let opt=cardparent[i].querySelector("#opt");
// cardparent[i].addEventListener("mouseout", function(){
//     cardparent[i].removeChild(opt);
    
// })
// }

/*
// Function to handle adding items to the basket
function addToBasket(item) {
    // Retrieve the basket array from localStorage
    let basket = JSON.parse(localStorage.getItem("basket")) || [];

    // Add the new item to the basket array
    basket.push(item);

    // Save the updated basket array back to localStorage
    localStorage.setItem("basket", JSON.stringify(basket));

    alert(`${item.title} has been added to your basket!`);
}

// Attach event listeners to all basket buttons
document.addEventListener("DOMContentLoaded", () => {
    const basketButtons = document.querySelectorAll(".btn:contains('🧺')");
    
    basketButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            // Prevent default link behavior
            event.preventDefault();

            // Find the product details
            const card = event.target.closest(".card");
            const title = card.querySelector(".card-title").innerText;
            const price = card.querySelector(".card-text").innerText;

            // Create an item object
            const item = { title, price };

            // Add the item to the basket
            addToBasket(item);
        });
    });
});
*/


// Fatma's code

   
        // Shopping Cart Functionality
        const cartModal = document.querySelector('.cart-modal');
        const cartItems = document.getElementById('cart-items');
        const closeCartBtn = document.getElementById('close-cart');
        let cart = [];

        // Add to Cart Event Listeners
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function () {
                const productCard = this.closest('.product-card');
                const product = {
                    id: productCard.dataset.id,
                    name: productCard.dataset.name,
                    price: parseFloat(productCard.dataset.price)
                };

                // Check if product already in cart
                const existingProduct = cart.find(item => item.id === product.id);
                if (existingProduct) {
                    existingProduct.quantity++;
                } else {
                    product.quantity = 1;
                    cart.push(product);
                }

                updateCart();
                openCart();
            });
        });

        // Remove from Cart Function
        function removeFromCart(id) {
            cart = cart.filter(item => item.id !== id);
            updateCart();
        }

        // Update Cart Display
        function updateCart() {
            cartItems.innerHTML = '';
            cart.forEach(item => {
                const cartItemElement = document.createElement('div');
                cartItemElement.classList.add('cart-item');
                cartItemElement.innerHTML = `
                    <div>
                        <span>${item.name}</span>
                        <span>$${(item.price * item.quantity).toFixed(2)}</span>
                        <span>Qty: ${item.quantity}</span>
                    </div>
                    <button class="remove-item" onclick="removeFromCart('${item.id}')">Remove</button>
                `;
                cartItems.appendChild(cartItemElement);
            });
        }

        // Open Cart
        function openCart() {
            cartModal.style.display = 'block';
        }

        // Close Cart
        closeCartBtn.addEventListener('click', () => {
            cartModal.style.display = 'none';
        });

     // Add to Cart Event Listeners
     document.querySelectorAll('.basket').forEach(button => {
        button.addEventListener('click', function () {
            const productCard = this.closest('.product-card');
            const product = {
                id: productCard.dataset.id,
                name: productCard.dataset.name,
                price: parseFloat(productCard.dataset.price)
            };

            // Check if product already in cart
            const existingProduct = cart.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                product.quantity = 1;
                cart.push(product);
            }

            updateCart();
            openCart();
        });
    });