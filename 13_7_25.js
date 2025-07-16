// <!-- 1. Reverse an array -->
function reverseArray(arr) {
  var result = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
console.log(reverseArray([1, 2, 3])); 
console.log(reverseArray([10,20,30]));

// <!-- 2. Find second largest number in an  -->
function secondLargest(arr) {
  var largest = -Infinity, second = -Infinity;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] > second && arr[i] !== largest) {
      second = arr[i];
    }
  }
  return second;
}
console.log(secondLargest([10, 5, 20, 8])); 
console.log(secondLargest([1,2,2,3])); 


// <!-- 3. Remove duplicates from array -->
function removeDuplicates(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(removeDuplicates([1, 2, 2, 3]));
console.log(removeDuplicates([5,5,5,1]));  



// <!-- 4. Check if two arrays are equal -->
function arraysEqual(a, b) {
  if (a.length !== b.length) 
    return false;
  for (var i = 0; i < a.length; i++) 
    {
        if (a[i] !== b[i]) return false;
    }
  return true;
}
console.log(arraysEqual([1, 2, 3], [1, 2, 3])); 
console.log(arraysEqual([1, 2], [ 2, 1])); 



// <!-- 5. Rotate array k times to the right -->

function rotateArray(arr, k) {
  for (var i = 0; i < k; i++) {
    var last = arr.pop();
    arr.unshift(last);
  }
  return arr;
}
console.log(rotateArray([1, 2, 3, 4], 2));
console.log(rotateArray([10, 20, 30],k=1));




// <!-- 6. Count vowels in a string -->

function countVowels(str) {
  var count = 0;
  var vowels = 'aeiouAEIOU';
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) count++;
  }
  return count;
}
console.log(countVowels("hello")); 
console.log(countVowels("JAVASCRIPT")); 


// <!-- 7. Print triangle pattern using loops -->
function printPattern(rows) {
  var pattern = '';
  for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= i; j++) {
      pattern += '* ';
    }
    pattern += '\n';
  }
  console.log(pattern);
}
printPattern(3);
printPattern(2);



// <!-- 8. Factorial using recursion -->

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); 
console.log(factorial(3)); 


// <!-- 9. Check if number is prime -->
function isPrime(n) {
  if (n <= 1) return false;
  for (var i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7));
console.log(isPrime(9));



// <!-- 10. Find Fibonacci number at Nth position -->
function fibonacci(n) {
  var a = 0, b = 1, temp;
  if (n === 0) return 0;
  for (var i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
console.log(fibonacci(5)); 
console.log(fibonacci(6)); 


// <!-- 11. Count frequency of array elements -->

function countFrequencies(arr) {
  var count = {};
  for (var i = 0; i < arr.length; i++) {
    var el = arr[i];
    if (count[el]) {
      count[el]++;
    } else {
      count[el] = 1;
    }
  }
  return count;
}
console.log(countFrequencies([1, 2, 2, 3])); 
console.log(countFrequencies([4,4,4]));
 


// <!-- 12. Invert object (key value) -->
function invertObject(obj) {
  var result = {};
  for (var key in obj) {
    result[obj[key]] = key;
  }
  return result;
}
console.log(invertObject({ a: 1, b: 2 })); 
console.log(invertObject({ x: 'y', z: 'w' })); 


// <!-- 13. Merge two objects -->

function mergeObjects(obj1, obj2) {
  var result = {};
  for (var key in obj1) {
    result[key] = obj1[key];
  }
  for (var key in obj2) {
    result[key] = obj2[key];
  }
  return result;
}
console.log(mergeObjects({ a: 1 }, { b: 2 }));
console.log(mergeObjects({x:10}, {x:20, y:30}));  



// <!-- 14. Find key with highest value in object -->

function highestValueKey(obj) {
  var highest = -Infinity;
  var highestKey = '';
  for (var key in obj) {
    if (obj[key] > highest) {
      highest = obj[key];
      highestKey = key;
    }
  }
  return highestKey;
}
console.log(highestValueKey({ a: 1, b: 5, c: 3 })); // 'b'
console.log(highestValueKey({x:100,y:99 }));

// <!-- 15. Deep clone an object -->

           //not understood the question also not getting output



// <!-- 16. Check if string is palindrome -->

function isPalindrome(str) {
  for (var i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello")); 




// <!-- 17. First non-repeating character -->

function firstNonRepeating(str) {
  for (var i = 0; i < str.length; i++) {
    var count = 0;
    for (var j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
    if (count === 1) {
      return str[i];
    }
  }
  return null;
}
console.log(firstNonRepeating("aabbcdd")); 
console.log(firstNonRepeating("xxyz")); 


// <!-- 18. Reverse a string manually -->
function reverseString(str) {
  var result = '';
  for (var i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverseString("hello"));
console.log(reverseString("JS")); 



// <!-- 19. Flatten nested array -->

function flattenArray(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(flattenArray([1, [2, [3]], 4])); 
console.log(flattenArray([1], [2, 3])); // not getting appropriate output for second input.

// <!-- 20. Group array of objects by a property -->
function groupByType(arr) {
  var result = {};
  for (var i = 0; i < arr.length; i++) {
    var type = arr[i].type;
    if (!result[type]) {
      result[type] = [];
    }
    result[type].push(arr[i].name);
  }
  return result;
}
console.log(groupByType([
  { type: 'fruit', name: 'apple' },
  { type: 'fruit', name: 'banana' }
]));
console.log(groupByType([
{type:'a',name:'x'},{type:'b',name:'z'}
]));
