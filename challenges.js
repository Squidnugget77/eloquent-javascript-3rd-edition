// |    Chapter 2
//  Exercise 1: Looping a triangle
// let triangle = "#"
// while (triangle.length<8) {
//     console.log(triangle)
//     triangle += "#"
// }

//  Exercise 2: FizzBuzz
// for (let FizzBuzz=1; FizzBuzz <= 100; FizzBuzz+=1) {
//     if (FizzBuzz % 3 == 0 && FizzBuzz % 5 == 0) {
//         console.log("FizzBuzz")
//     }
//     else if (FizzBuzz % 5 == 0) {
//         console.log("Buzz")
//     }
//     else if (FizzBuzz % 3 == 0) {
//         console.log("Fizz")
//     }
//     else {
//         console.log(FizzBuzz)
//     }
// }
//  Exercise 3: Checkerboard
// let size = 8
// let chessboard = ""
// for (let ii = 0;ii<size;ii+=1) {
//     let chessboard = ""
//     if (ii%2 == 0) {
//         while (chessboard.length < size) {
//             chessboard += " #"
//         }
//     }
//     else {
//         while (chessboard.length < size) {
//             chessboard += "# "
//         }
//     }
//     console.log(chessboard)
// }
// |    Chapter 3
//  Exercise 1: Minimum
// function min(n1, n2) {
//     console.log(Math.min(n1, n2))
// }
// min(-2,9)
//  Exercise 2: Recursion {!Needs fixing!}
function isEven(n1) {
    if (Math.abs(n1%2 == 0)) {
        console.log("The number is even!")
    }
    else if (Math.abs(n1%2 == 1)) {
        console.log("The number is odd!")
    }
    console.log(Math.abs(n1%2))
}
isEven(3)