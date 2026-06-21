let total = 0;
for (let i = 0; i < cart.length; i++) {
    total += Number(cart[i][2]);
}

const totaLPrice= document.getElementById("total-price");
totaLPrice.textContent = total;