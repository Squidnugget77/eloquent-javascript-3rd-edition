//  Exercise 1: The Sum of a Range
function range(n1, n2, step = 1) {
    let ans = []
    if (step > 0) {
        for (let index = n1; index <= n2; index += step) {
            ans.push(index);
        }
    }
    else {
        for (let index = n2; index >= 1; index += step) {
            ans.push(index)
        }
    }
    return ans
}
console.log(range(1,10,-2))
function sum(range) {
    let sums = 0
    for (let index of range) {
        sums += index
    }
    return sums
}
console.log(sum(range(1,10)))

//  Exercise 2: Reversing an Array
function reverseArray(array) {
    reversed = []
    for (let index of array) {
        reversed.unshift(index)
    }
    return reversed
}
console.log(reverseArray([1,2,3,4,5]))
arrayValue = [1,2,3,4,5,6]
function reverseArrayInPlace(array) {
    for (let index = 1; index <= Math.floor(arrayValue.length/2); index++) {
        array.unshift(-index)
        array.shift(index)
        delete array(index+1)
        delete array(-index-1)
    }
    return array
}
console.log(reverseArray(arrayValue))

//  Exercise 3: A List (CHECK)
function arrayToList(numbers) {
    list = []
    for (index of numbers) {
        list = {Value: index,
        rest: list}
    }
    return list
}
console.log(arrayToList([10,20,30,40,50]))
function listToArray(array)
//  Exercise 4: Deep Comparsion