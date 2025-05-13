document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    const cartCount = document.getElementById("cart-count");
    
    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;
        cart.forEach((item, index) => {
            let li = document.createElement("li");
            li.textContent = `${item.name} - ${item.price} Rs.`;
            
            let removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.onclick = () => removeItem(index);
            li.appendChild(removeBtn);
            
            cartItems.appendChild(li);
            total += item.price;
        });
        totalPrice.textContent = total;
        cartCount.textContent = `(${cart.length})`;
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    
    function removeItem(index) {
        cart.splice(index, 1);
        updateCart();
    }
    
    document.getElementById("checkout").addEventListener("click", () => {
        alert("Proceeding to checkout with total: " + totalPrice.textContent + " Rs.");
    });
    
    updateCart();
});
