// 12(a)
const add = function () {
  console.log(2 + 3);
}

add();
add();

// 12(b)
function runTwice(fun) {
    fun();
    fun();
}

runTwice(function() {
  console.log('12b');
});

runTwice(add);

// 12(c,d)
function start() {
  document.querySelector('.start-button').innerHTML = 'Loading...';
  setTimeout(function() {
    document.querySelector('.start-button').innerHTML = 'FInished'
  },1000)
}

// 12(e)
function addToCart() {
  document.querySelector('.add-to-cart-button').innerHTML = 'Added';
  setTimeout(function() {
    document.querySelector('.add-to-cart-button').innerHTML = 'Add to Cart';
  },2000)
}
