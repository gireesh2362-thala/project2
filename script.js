let cart = [];

function addToCart(item){

cart.push(item);

document.getElementById("cart-count").innerText = cart.length;

let li = document.createElement("li");

li.className = "list-group-item";

li.innerText = item;

document.getElementById("cart-items").appendChild(li);

}

function placeOrder(){

if(cart.length === 0){

alert("Your cart is empty!");

return;

}

alert("Order placed successfully!");

cart = [];

document.getElementById("cart-items").innerHTML = "";

document.getElementById("cart-count").innerText = 0;

}
