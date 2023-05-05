// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing
// letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the 
// array will always be at least 2. The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

const findMissingLetter = (arr) => {
    let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let first = letters.indexOf(arr[0])
    return newArr = letters.splice(first, arr.length + 1).filter((el) => !arr.includes(el)).join("")
}

findMissingLetter(['O','Q','R','S'])