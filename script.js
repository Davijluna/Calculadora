function insert(number) {

  let input = document.querySelector('.inputCalc').innerText
  
    document.querySelector('.inputCalc').innerHTML = input + number
}
let button = document.getElementsByClassName('.number')

// console.log(button)

// let number = 0


// const soma = (numer1, numer2) => {
//   console.log(numer1 + numer2)
//   return numer1 + numer2
// }

// const sub = (numer1, numer2) => {
//   console.log(numer1 - numer2)
//   return numer1 - numer2
// }

// const div = (numer1, numer2) => {
//   console.log(numer1 / numer2)
//   return numer1 / numer2
// }

// const mult = (numer1, numer2) => {
//   console.log(numer1 * numer2)
//   return numer1 * numer2
// }

// const selectOperation = (numer1, sinal, numer2 ) => {
//   if (sinal === '+') return soma(numer1, numer2)
//   if (sinal === '-') return sub(numer1, numer2)
//   if (sinal === '/') return div(numer1, numer2)
//   if (sinal === '*') return mult(numer1, numer2)
// }

// selectOperation(5, '*', 5)






