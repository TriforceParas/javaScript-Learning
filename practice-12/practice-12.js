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

runTwice(function () {
  console.log('12b');
});

runTwice(add);

// 12(c,d)
document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.querySelector('.start-button');
  startButton.addEventListener('click', () => {
    document.querySelector('.js-start-output').innerHTML = 'Loading...';
    setTimeout(() => { document.querySelector('.js-start-output').innerHTML = 'Finished!' }, 1000)
  });
});

// 12(e,f)
document.addEventListener('DOMContentLoaded', () => {
  const addToCart = document.querySelector('.js-add-to-cart');
  addToCart.addEventListener('click', () => {
    document.querySelector('.cart-update').innerHTML = 'Added Product to Cart';
    setTimeout(() => { document.querySelector('.cart-update').innerHTML = '' }, 2000)
  })
})

// 12(g)
/*
let val = 1;
setInterval(function () {
  document.querySelector('.title').innerHTML = `(${val++}) New messages`;
},1000)
*/

// 12(h)
let messages = 0;
const displayTotalMessages = (messages) => {
  if (messages <= 0) {
    document.querySelector('.title').innerHTML = 'Messages';
  } else if (messages > 0) {
    document.querySelector('.title').innerHTML = `(${messages}) New messages`;
  }

}
document.addEventListener('DOMContentLoaded', () => {
  const addbutton = document.querySelector('.add-message');
  addbutton.addEventListener('click', () => {
    messages++;
    displayTotalMessages(messages);
  })
})
document.addEventListener('DOMContentLoaded', () => {
  const removebutton = document.querySelector('.remove-message');
  removebutton.addEventListener('click', () => {
    if (messages <= 0) {
      messages = 0;
    } else {
      messages--;
    }
    displayTotalMessages(messages);
  })
})

// 12(j,k)
const multiply = (a, b) => { return a * b; }

console.log(multiply(2, 3));
console.log(multiply(7, 10));

// 12(l)
function countPositive(nums) {
  let count = 0;
  nums.forEach((num) => {
    if (num > 0) {
      count++;
    }
  });
  return count;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));
