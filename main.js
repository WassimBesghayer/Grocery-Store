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
