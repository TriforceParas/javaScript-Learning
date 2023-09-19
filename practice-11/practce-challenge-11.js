// 11(v)
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else console.log(i)
}

// 11(w)
let words1 = ['hello', 'world', 'search', 'good', 'search'];
let words2 = ['not', 'found'];


findIndex(words1, 'search');
findIndex(words2, 'search');
findIndex(['green', 'red', 'blue', 'red'], 'red');
findIndex(['green', 'red', 'blue', 'red'], 'yellow');

function findIndex(array, search) {
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === search) {
      index = i;
      break // 11(p)
    }
  }

  console.log(index);
}