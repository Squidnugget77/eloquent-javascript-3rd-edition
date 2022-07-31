//  Exercise 1: The Sum of a Range
function range(n1, n2) {
    let ans = []
    for (let index = n1; index <= n2; index += 1) {
        ans.push(index);
    }
    return ans
}
console.log(range(1,10))
function sum(n1, n2) {
    return range(n1, n2)
    let ans2 = 0
    for (index = 1; index <= ans.length ; index++) {
        ans2 = ans2 + ans[index]
    }
    return ans2
}
console.log(sum(1,10))
//  Exercise 2: 

//  Excerise 3: 