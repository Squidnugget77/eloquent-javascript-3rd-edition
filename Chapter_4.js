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
//  Exercise 2: 

//  Excerise 3: 