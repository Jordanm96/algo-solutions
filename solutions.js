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

//DOES INCLUDE
const doesInclude = (data, x) => {
  if (data.includes(x)) {
    return true
  } else {
    return false
  }
}

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