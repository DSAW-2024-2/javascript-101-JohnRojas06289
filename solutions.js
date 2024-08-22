// Sum of Two Numbers
function sum(a, b) {
  if (typeof a!== "number" || typeof b!== "number"){
    console.log("Los datos de entrada no son adecuados");
  } else {
    return a + b;
  }
}

// Factorial of a Number
function factorial(n) {
  if (n<0){
    return console.log("Los datos de entrada no son adecuados");
  }else if (n==0){
    return 1;
  }else{
    let fact = 1;
    for (let i = 1; i <= n; i++){
      fact *= i;
    }
    return fact;
  }
}

// Find the Largest Number
function findLargest(arr) {
  
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++){
      if (arr[i] > largest){
        largest = arr[i];
      }
    }
    return largest;
}

// Count Vowels in a String
function countVowels(str) {

  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  for (let i = 0; i < str.length; i++){
    if (vowels.includes(str[i])){
      count++;
    }
  }
  return count;

}

// Check if a Number is Prime
function isPrime(n) {


  if (n > 1 | n%1 == 0){
    for (let i = 2; i < n; i++){
      if (n%i == 0){
        return false;
      }
    }
    return true; 
  }else{
    return false;
  }
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
