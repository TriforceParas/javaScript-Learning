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
function start() {
  document.querySelector('.start-button').innerHTML = 'Loading...';
  setTimeout(function () {
    document.querySelector('.start-button').innerHTML = 'FInished'
  }, 1000)
}

// 12(e,f)
let timeOutID;
function addToCart() {
  document.querySelector('.status').innerHTML = 'Added';
  clearTimeout(timeOutID);
  timeOutID = setTimeout(function () {
    document.querySelector('.status').innerHTML = '';
  }, 2000);
}

// 12(g)
/*
let val = 1;
setInterval(function () {
  document.querySelector('.title').innerHTML = `(${val++}) New messages`;
},1000)
*/

// 12(h)
let messages = 0;
function displayTotalMessages(messages) {
  if (messages <= 0) {
    document.querySelector('.title').innerHTML = 'Messages';
  } else if (messages > 0) {
    document.querySelector('.title').innerHTML = `(${messages}) New messages`;
  }

}
function addMessage() {
  messages++;
  displayTotalMessages(messages);
}

function removeMessage() {
  if (messages <= 0) {
    messages = 0;
  } else messages--;
  displayTotalMessages(messages);
}

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

console.log(countPositive([1,-3,5]));
console.log(countPositive([-2,3,-5,7,10]));