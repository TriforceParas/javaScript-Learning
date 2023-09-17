// 11(a)
const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums);

// 11(b)
function getLastValue(array) {
    console.log(array[array.length - 1]);
}

getLastValue(['hi', 'hello', 'good']);

// 11(c)
function arraySwap(array) {
    array.push(array[0]);
    array.splice(0, 1);
    console.log(array);
}

arraySwap([1, 20, 22, 24, 5]);
arraySwap(['hi', 'hello', 'good']);

// 11(d)
for (i = 0; i <= 10; i += 2) {
    console.log(i);
}

// 11(e)
for (i = 5; i >= 0; i--) {
    console.log(i);
}

// 11(f)
let control = 0;
while (control <= 10) {
    console.log(control);
    control++;
}

let control2 = 5;
while (control2 >= 0) {
    console.log(control2);
    control2--;
}

// 11(g)
function addOne(array) {
    const newArray = [];
    for (let i = 0; i != array.length; i++) {
        newArray.push(array[i] + 1)
    }
    console.log(newArray)
}

// 11(h)
addOne([1, 2, 3]);
addOne([-2, -1, 0, 99]);

// 11(i)
function addNum(array, num) {
    const newArray = [];
    for (let i = 0; i != array.length; i++) {
        newArray.push(array[i] + num);
    }
    console.log(newArray);
}

addNum([1, 2, 3], 2);
addNum([1, 2, 3], 3);
addNum([-1, -2, 0, 99], 2)

// 11(j)
function addArrays(array1, array2) {
    const newArray = [];
    if (array1.length === array2.length) {
        for (let i = 0; i != array1.length; i++) {
            newArray.push(array1[i] + array2[1]);
        }
    } else console.log('Arrays are not of same length.')
    console.log(newArray);
}

addArrays([1, 1, 2], [1, 1, 3]);
addArrays([1, 2, 3], [4, 5, 6]);

// 11(k)
function countPositive(array) {
    let result = 0
    for (let i = 0; i <= array.length; i++) {
        if (array[i] > 0) {
            result++
        }
    }
    console.log(result);
}

countPositive([1, -3, 5]);
countPositive([-2, 3, -5, 7, 10]);

