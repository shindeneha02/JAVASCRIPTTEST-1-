//1. Count Even and Odd Numbers

function countEvenOdd(arr) {
  var even = 0;
  var odd = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  return { even: even, odd: odd };
}

console.log(countEvenOdd([2, 3, 4, 5]));
console.log(countEvenOdd([11, 14, 16, 17, 19]));

//2.Grade Distribution
function gradeDistribution(marks) {
  var result = { A: 0, B: 0, C: 0, D: 0, F: 0 };
  for (var i = 0; i < marks.length; i++) {
    if (marks[i] >= 90) result.A++;
    else if (marks[i] >= 80) result.B++;
    else if (marks[i] >= 70) result.C++;
    else if (marks[i] >= 60) result.D++;
    else result.F++;
  }
  return result;
}
console.log(gradeDistribution([95, 82, 67, 50])); 
console.log(gradeDistribution([91,59,76,88]));


//3. All Positive Numbers?
function allPositive(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) return false;
  }
  return true;
}
console.log(allPositive([1, 2, 3, 4])); 
console.log(allPositive([-1,0,5])); 


//4. Find First Number Greater Than 50
function firstGreaterThan50(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 50) return arr[i];
  }
  return null;
}
console.log(firstGreaterThan50([10, 25, 60, 40]));
console.log(firstGreaterThan50([45,52,19]));


//5. Leap Year Checker
function firstGreaterThan50(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 50) return arr[i];
  }
  return null;
}
console.log(firstGreaterThan50([10, 25, 60, 40]));

console.log(firstGreaterThan50([45,52,19]));

//6. Double the Elements
function doubleElements(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}
console.log(doubleElements([1, 2, 3])); 
console.log(doubleElements([5,10])); 


//7. Filter Out Even Numbers
function filterOddNumbers(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) result.push(arr[i]);
  }
  return result;
}
console.log(filterOddNumbers([1, 2, 3, 4, 5]));  
console.log(filterOddNumbers([10,15,20,25])); 


//8. Total Character Count in Strings
function totalCharacters(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i].length;
  }
  return sum;
}
console.log(totalCharacters(['hi', 'world']));
console.log(totalCharacters(['a', 'ab','abc']));



//9. Get Last 3 Items

function last3Items(arr) {
  var result = [];
  for (var i = arr.length - 3; i < arr.length; i++) {
    if (i >= 0) result.push(arr[i]);
  }
  return result;
}
console.log(last3Items([1, 2, 3, 4, 5]));
console.log(last3Items([10,20,30,40]));



//10. Remove Element at Index 2

function removeAtIndex2(arr) {
  arr.splice(2, 1);
  return arr;
}
console.log(removeAtIndex2([1, 2, 3, 4]));
console.log(removeAtIndex2([10,11,12,13]));

 
//11. Capitalize First Letter

 function capitalizeWords(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    var newWord = word.charAt(0).toUpperCase() + word.slice(1);
    result.push(newWord);
  }
  return result;
}
console.log(capitalizeWords(['hello', 'world']));
console.log(capitalizeWords(['code', 'Test']));


//12. Check Divisibility by 5

function divisibleBy5(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 0) return true;
  }
  return false;
}
console.log(divisibleBy5([3, 6, 10, 14]));
console.log(divisibleBy5([2,4,6]));

//13. Find Index of First Negative
function firstNegativeIndex(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) return i;
  }
  return -1;
}
console.log(firstNegativeIndex([1, 2, -3, 4])); 
console.log(firstNegativeIndex([5,7,8])); 
 
//14. Count Word Frequencies
function wordFrequencies(arr) {
  var count = {};
  for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    if (count[word]) count[word]++;
    else count[word] = 1;
  }
  return count;
}
console.log(wordFrequencies(['apple', 'banana', 'apple']));
console.log(wordFrequencies(['x','x','z']));

 
//15. Group Strings by Length

function groupByLength(arr) {
  var result = {};
  for (var i = 0; i < arr.length; i++) {
    var len = arr[i].length;
    if (result[len]) result[len].push(arr[i]);
    else result[len] = [arr[i]];
  }
  return result;
}
console.log(groupByLength(['hi', 'yes', 'no', 'maybe']));
console.log(groupByLength(['a','ab','abc']));

 
//16. Convert Array to Object by ID
function arrayToObject(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i].id] = arr[i].name;
  }
  return obj;
}
console.log(arrayToObject([{ id: 1, name: 'A' }, { id: 2, name: 'B' }]));
console.log(arrayToObject([{ id: 3, name: 'X' }, { id: 4, name: 'Y' }]));

//17. Count Data Types
function countTypes(arr) {
  var result = {};
  for (var i = 0; i < arr.length; i++) {
    var type = typeof arr[i];
    if (result[type]) result[type]++;
    else result[type] = 1;
  }
  return result;
}
console.log(countTypes([1, 'hi', true, {}]));
console.log(countTypes([ 'x','y' ,5]));

 
//18. Flatten One-Level Nested Array
function flattenArray(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      result.push(arr[i][j]);
    }
  }
  return result;
}
console.log(flattenArray([1, [2, 3], 4])); 
//not getting appropriate Output

 //--------------------------------------------------//


 //19. Remove Duplicate Numbers
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
console.log(removeDuplicates([4, 4, 4, 5])); 


 
//20. Find Longest Word

 function longestWord(arr) {
  var longest='';
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}
console.log(longestWord(['hi', 'hello', 'goodbye']));
console.log(longestWord(['short', 'longer', 'lengthiest']));