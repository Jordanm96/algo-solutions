// --------------------------------------------UNIT 1-----------------------------------------------------
//ARRAY DIFFERENCES
// Return an array with all the unique numbers in each array
const arrayDiffs = (arr1, arr2) => {
  // Create an empty solution array
  let solution = [];
  // Join the two arrays together into one array
  const newArr = arr1.concat(arr2);
  // Check each number in the array for repeats
  // "For each element in the array..."
  newArr.forEach((element) => {
    // If arr1 does NOT include an element from the combined array, push it into the solution array
    if (arr1.includes(element) === false) {
      solution.push(element);
    }
    // If arr2 does NOT include an element from the combined array, push it into the solution array
    if (arr2.includes(element) === false) {
      solution.push(element);
    }
  });
  // Final: Return one array with all the unique numbers
  return solution;
};
console.log(arrayDiffs([1, 44, 2, 3, 5], [33, 1, 2, 3, 4, 5]));

// -------------------------------------------------------------------------------------------------

//DOES INCLUDE
const doesInclude = (data, x) => {
  if (data.includes(x)) {
    return true
  } else {
    return false
  }
}

// -------------------------------------------------------------------------------------------------

//ODDS FROM EVENS
const oddsFromEvens = (arr) => {
  // 1. Create an empty even and odd array
  let even = [];
  let odd = [];
  // 2. For each element in the big array push the odds into the odd array and the evens into even array
  for (i = 0; i < arr.length; i++) {
    // 3. Get the evens and push them into even array
    // 4. Sort the evens LOWEST to HIGHEST
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
      even.sort((a, b) => a - b);
    } else {
      // 5. Push the rest into the odds array
      // 6. Sort odds HIGHEST to LOWEST
      odd.push(arr[i]);
      odd.sort((a, b) => b - a);
    }
  }
  // 7. Join the two arrays together as one
  let solution = even.concat(odd);
  return solution;
};
console.log(oddsFromEvens([423, 322, 918, 45, 6, 79, 55]));

// -------------------------------------------------------------------------------------------------

// PALINDROME
// 1. Get rid of the spaces in the string
// 2. Have one string be normal and create a second string that is in reverse order
// 3. If the normal string and the reverse string are equal, return true, else return false
const palindrome = str => {
  // pal is equal to all the spaces in our string
  let pal = /[\W_]/g
  // Replace all the white space in the string with no space
  let smallString = str.replace(pal, '')
  // console.log(smallString)
  // Split takes each character in the string and seperates them into their own single letter string
  // Reverse flips the array of strings
  // Join is the opposite of split and JOINS the split up strings into one long string
  let reverse = smallString.split('').reverse().join('')
  if (smallString === reverse) {
    return true
  } else {
    return false
  }
}
console.log(palindrome("a man a plan a canal panama"))

// --------------------------------------------UNIT 2-----------------------------------------------------

// CUT AND PASTE
// Cut and paste 'num' elements from index 0 to the end of the array.
const cutAndPaste = (arr, num) => {
  // 1. Remove "num" amount of elements starting at index 0
  const spliced = arr.splice(0, num)
  // 2. Merge the spliced array with the original array but concat it so it is after the original array
  const solution = arr.concat(spliced)
  return solution
}
console.log(cutAndPaste([1, 2, 5, "help", "wow", 3], 1))

// -------------------------------------------------------------------------------------------------

//FACTORIALIZE
// https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/
// Factorial: The product of an integer and all the integers below it; e.g. factorial four ( 4! ) is equal to 24.
const factorialize = (num) => {
  let solution = num;
  // While num is greater than 1, decrease it each time then multiply it by the original num
  while (num > 1) {
    num--
    // These 2 below are the same
    // solution = solution * num
    solution *= num
  }
  return solution
}
console.log(factorialize(4))

// -------------------------------------------------------------------------------------------------

//INSERT INDEX
// Create a function which takes two arguments, an unsorted array (arr) and an integer (num).
// Determine the index number of the array at which the num should be inserted into the sorted arr.
// The output should return integer representing the index number.
const getIndexToInsert = (arr, num) => {
  // 1. Insert num into the array
  arr.push(num);
  // 2. Put the array in order from smallest to largest
  arr.sort(function (a, b) {
    return a - b;
  });
  // 3. Return the index value of num
  const solution = arr.indexOf(num);
  return solution;
};
console.log(getIndexToInsert([40, 60, 5, 322, 48, 83], 80));

// -------------------------------------------------------------------------------------------------

//LONGEST WORD
//return the longest word in a given array
const longestWord = str => {
  // 1. Split up the BIG string into smaller one word strings
    let split = str.split(' ')
    // 2. Assign temporary values
    let longestWordLength = 0;
    let longestWord = null;
    // Loop
    for (let i = 0; i < split.length; i++) {
      // 3. If split[i].length is greater than longestWord.length (starts at 0)
      if (split[i].length > longestWordLength) {
        // 4. Set longestWordLength to split[i].length
        longestWordLength = split[i].length
        // 5. The longestWord then becomes the longest word in the split array
        longestWord = split[i]
      }
    }
    return longestWord
  }
console.log(longestWord("The quick brown fox jumped over the lazy dog"))

// -------------------------------------------------------------------------------------------------

//REMOVE SPACES
// remove all the spaces from a string
const removeSpaces = str => {
  for (let i=0; i < str.length; i++) {
    str = str.replace(" ", '')
  }
  return str
}
console.log(removeSpaces("alphabet soup is green   "))

// -------------------------------------------------------------------------------------------------

//STRING BEARS REPEATING

const repeatString = (str, num) => {
  let x = str.repeat(num)
  return x
}
console.log(repeatString("abc", 3))

// -------------------------------------------------------------------------------------------------

//SUM ALL IN ARRAY
//add all the numbers in the given array, strings included
//if an element inside the array is a string that contains a number, include it in the addition
//if an element inside the array is a string that is not a number, do not include it in the addition
const sumAllInArray = arr => {
  const newArr = [];
// 1. Convert all elements in the array to integers
  for (let i = 0; i < arr.length; i++) {
    const numArr = parseInt(arr[i])
    newArr.push(numArr)
  }
  // 2.Get rid of the 'a' in the array of numbers
  const filtered = newArr.filter(num => num)
  // 3. Reduce the array to a single number by adding each element with each other, starting at index 0
  const solution = filtered.reduce((a,b) => a+b, 0)
  // Final: Return an array with the sum of all numbers
  return solution
}
console.log(sumAllInArray(["-1", "a", 4, "-32", 8, "94"]))

// -------------------------------------------------------------------------------------------------

// TITLE CASE
// Capitalize the first letter of each word
const titleCase = str => {
  // Seperate the words by spaces and capitalize each index[0]  
  let splitWords = str.toLowerCase().split(' ');
  for (let i = 0; i < splitWords.length; i++) {
    // Capitalize the first letter of each word (charAt(0))
    // Then add that to the word starting at index 1. Ex. substring(1) = 'm, ittle, ea, ot
    splitWords[i] = splitWords[i].charAt(0).toUpperCase() + splitWords[i].substring(1)
  }
  // Join the words back together with a space inbetween
  const solution = splitWords.join(' ');
  return solution
}
console.log(titleCase("I'm a little tea pot"))

// --------------------------------------------UNIT 3-----------------------------------------------------
