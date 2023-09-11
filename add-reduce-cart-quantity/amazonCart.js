let cartQuantity = JSON.parse(localStorage.getItem('cart')) || 0;
function changeCartQuantity(value) {
    cartQuantity += value;
    if (cartQuantity < 0) {
        cartQuantity = 0;
    }
    localStorage.setItem('cart', JSON.stringify(cartQuantity));
    document.querySelector('.cart-quantity').innerHTML = `Cart Quantity: ${cartQuantity}`;
}