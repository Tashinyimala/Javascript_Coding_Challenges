const log = console.log;

// Temperature convertor
const convertToFahrenheit = celsious => (celsious * 9/ 5) + 32;
log(convertToFahrenheit(-30)); // -22

const convertToCelsious = fahrenheit => (fahrenheit - 32) * 5/9;
log(convertToCelsious(-22)); // -30

// Reverse a String
const reverseString = (str) => {
    let characters = str.split('');
    let reverseString = '';
    
    for(let i = str.length - 1; i >= 0; i--) {
      reverseString += characters[i];
    }
    
    return reverseString;
  };
  
  log(reverseString("tashi"));

    // Shortcut
    const reverseString1 = (str) => {
        return str.split('').reverse().join('');
    }

// Factorialize a number
const factorialize = num => num <= 1? num: num * factorialize(num - 1);
log(factorialize(5)); // 120

// Find the Longest Word in a String
const findLongestWordLength = str => {
    let arr = str.split(' ');
    let max = 0;
    let word = '';
    
    for(let i = 0; i < arr.length; i++) {
      if(max < arr[i].length) {
        max = arr[i].length;
        word = arr[i];
      }
    }
    
    return [word, max];
  }

  const text = "The quick brown fox jumped over the lazy dog";
  console.log(`longest word is: ${findLongestWordLength(text)[0]}, 
               length is: ${findLongestWordLength(text)[1]}`);
               //longest word is: jumped, length is: 6


// Return Largest Numbers in Arrays
const largestOfFour = arr => {
let result = [];

for(let i = 0; i < arr.length; i++) {
    let max = arr[i][0];
    
    for(let j = 0; j < arr[i].length; j++) {
    if(arr[i][j] > max) {
        max = arr[i][j];
    }
    }
    result[i] = max;
}

return result;
};

const arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
log(largestOfFour(arr)); // [ 5, 27, 39, 1001 ]

// Confirm the Ending Letter
const confirmEnding = (str, target) => (str.split('').slice(-1).pop()) === target;
log(confirmEnding("Bastian", "n")); // True
log(confirmEnding("Bastian", "b")); // false

// Confirm the ending word
const confirmEnding = (str, target) => str.slice(str.length - target.length) === target;
console.log(confirmEnding("Congratulation", "on")); // True

// Repeat a String Repeat a String
const repeatStringNumTimes = (str, num = 1) => {
    let newStr = '';
    
    for(let i = 0; i < num; i++) {
      newStr += str;
    }
    return newStr;
  };
  
log(repeatStringNumTimes("abc", 3)); // abcabcabc

// Truncate a String with ...
const truncateString = (str, num) => {
    let myRegex = /\W/; //same as [^A-Za-z0-9_]
    let specialChar = myRegex.test(str);
    
      if (str.length === num || num > str.length) {
        return str;
      } else if (str.length < 3 ){
          return specialChar ? str.slice(0, num) + '...': str;
      } else {
        return str.slice(0, num) + '...';
      }
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // A-tisket...
  console.log(truncateString("tashi")) // tashi...
  console.log(truncateString("A-", 1)); // A...

  // Finders Keepers
  function findElement(arr, func) {
    let num = [];
   
    for(let i = 0; i < arr.length; i++) {
      if (func(arr[i])) {
        num.push(arr[i]);
      } 
    }
    return num.length === 0? undefined: num[0]; // return 1st match
  }
  
  console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0)); // 8
  console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0;})) // undefined

// boolean primitive type?
const booWho = bool => typeof(bool) == 'boolean'? true: false;

console.log(booWho(true)) // true
console.log(booWho(false)) // true
console.log(booWho(null)); // false
console.log(booWho([].slice)) // false

// Title case a sentence
const titleCase = str => {
// regex -> all the non whitespace (\S) character which is at beginning (^) or 
// after white space(\s).

    return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
} 
  
  console.log(titleCase("I'm a little tea pot")); // I'm A Little Tea Pot

// Slice and Splice
const frankenSplice = (arr1, arr2, n) => {
    let result = arr2.slice();
    
    for(let i = 0; i < arr1.length; i++) {
      result.splice(n, 0, arr1[i]);
      n++;
    }
    return result;
  };
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); // [ 4, 1, 2, 3, 5, 6 ]

// Falsy Bouncer
const bouncer = arr => arr.filter(Boolean);
log(bouncer([7, "ate", "", false, 9])); //  [7, "ate", 9 ]

// Where do I Belong 
const getIndexToIns = (arr, num) => {
    let result = 0;
    const newArr = arr.sort((a, b) => a-b); // Sort the array
    
    if(arr.length > 1) {
      for(let i = 0; i < arr.length; i++) {
        if(newArr[i] < num) {
          result = i + 1;
        }
      }
    } else {
      result = 0;
    }
    
    return result;
  };
  
  console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3
  console.log(getIndexToIns([], 1)); // 0

/* Mutations - check if first element of the array contains 
 all of the letters of the string  in the second element of the array.*/
 const mutation = arr => {
    const itemsLowercase = arr.slice(' ').map(item => item.toLowerCase());
    const test = itemsLowercase[1];
    const target = itemsLowercase[0]
    
    for (var i=0; i<test.length; i++) {
      if (target.indexOf(test[i]) < 0)
        return false;
    }
    
    return true;
  }
  
  console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
  console.log(mutation(["Mary", "ar"]));
  console.log(mutation(["hello", "hey"]));