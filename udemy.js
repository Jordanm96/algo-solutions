// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
function reverse(str) {
  let reverse = str.split('').reverse().join('')
  return reverse
}
console.log(reverse('abcd'))
reverse('abcd')
// ----------------------------------------BREAK----------------------------------------
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
function palindrome(str) {
  let reverse = str.split('').reverse().join("")
  if (str === reverse)
    return true
  else return false
}
console.log(palindrome("racecar"))
// ----------------------------------------BREAK----------------------------------------
// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join('')
  if (n < 0) {
    return parseInt(reversed) * -1
  }
  return parseInt(reversed)
  // Other solution without if statement:
  // return parseInt(reversed) * Math.sign(n)
  // (Math.sign returns -1 or 1 if n is negative or positive)
}
console.log(reverseInt(-120))
// ----------------------------------------BREAK----------------------------------------
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
function maxChar(str) {
  // Create an empty object that will contain the number of occurences for each character in our string = charMap, a maxCount and maxChar variable
  // For every char in our string:
  // Object at letters in the string = that object + 1 or 1 ( b/c at first it is an empty object, so it is undefined)
  // We use IN for object iterations, and OF for string iterations
  // charMap[char] is the VALUE of our character keys in the object and char is the key
  // IF that count is greater than the previous, update the maxCount and the maxChar
  let charMap = {};
  let maxCount = 0;
  let maxChar = '';
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1
  }
  // console.log(charMap)
  for (let char in charMap) {
    if (charMap[char] > maxCount) {
      maxCount = charMap[char]
      maxChar = char
    }
  }
  return maxChar
}
console.log(maxChar("abcccd"))