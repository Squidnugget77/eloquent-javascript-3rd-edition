//  Exercise 1: Minimum
function min(n1, n2) {
    console.log(Math.min(n1, n2))
}
min(-2,9)

//  Exercise 2: Recursion
function isEven(n1) {
//     if (Math.abs(n1%2) == 0) {
//         console.log("The number is even!")
//     }
//     else if (Math.abs(n1%2) == 1) {
//         console.log("The number is odd!")
//     }
//     console.log(Math.abs(n1%2))
// }
    n1 = Math.abs(n1)
    if (n1 == 0) {
        console.log("The number is even!")
    }
    else if (n1 == 1) {
        console.log("The number is odd!")
    }
    else {
        isEven(n1-2)
    }
}
isEven(-6)