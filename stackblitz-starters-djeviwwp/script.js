document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('cartModal');
  const closeBtn = document.querySelector('.close');
  const openCartBtn = document.getElementById('viewCartBtn');
  const clearCartBtn = document.getElementById('clearCartBtn');
  const processOrderBtn = document.getElementById('processOrderBtn');

  function displayCartItems() {
    const cartList = document.getElementById('cartItems');
    cartList.innerHTML = '';
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    if (cart.length === 0) {
      cartList.innerHTML = '<li>Your cart is empty.</li>';
      return;
    }
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item; 
      cartList.appendChild(li);
    });
  }  

  function clearCart() {
    sessionStorage.removeItem('cart');
    displayCartItems();
  }

  openCartBtn.addEventListener('click', () => {
    displayCartItems();
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  clearCartBtn.addEventListener('click', () => {
    clearCart();
    alert('Cart cleared!');
  });

  processOrderBtn.addEventListener('click', () => {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    if (cart.length === 0) {
      alert('Cart is empty.');
      return;
    }
    // I could add processing logic here if I have any
    clearCart();
    alert('Order processed. Thank you!');
    modal.style.display = 'none';
  });
});

function addToCart(name) {
  const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  cart.push(name);
  sessionStorage.setItem('cart', JSON.stringify(cart));
  alert(`Added "${name}" to cart.`);
}