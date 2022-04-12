/* 
   (      (                                                      
 )\ )   )\ )                 (        (      (                 
(()/(  (()/(      )          )\ )     )\     )\ (  (           
 /(_))  /(_))  ( /(   (     (()/(  ((((_)(  ((_))\))(  (   (   
(_))_  (_))    )(_))  )\ )   ((_))  )\ _ )\  _ ((_))\  )\  )\  
 |   \ / __|  ((_)_  _(_/(   _| |   (_)_\(_)| | (()(_)((_)((_) 
 | |) |\__ \  / _` || ' \))/ _` |    / _ \  | |/ _` |/ _ \(_-< 
 |___/ |___/  \__,_||_||_| \__,_|   /_/ \_\ |_|\__, |\___//__/ 
                                               |___/           

  Instructions

  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.

  Note that the target sum has to be obtained by summing two different integers
  in the array; you can't add a single integer to itself in order to obtain the
  target sum.

  You can assume that there will be at most one pair of numbers summing up to
  the target sum.

  Sample Input
  array =  = [3, 5, -4, 8, 11, 1, -1, 6]
  targetSum = 10

  Sample Output
  [-1, 11] // the numbers could be in reverse order

*/

// First Solution

// two for loops

// O(n^2) time | O(1) space

// function twoNumberSum(array, targetSum) {
//     targetSum = 10;
//     for (let i = 0; i < array.length - 1; i++) {
//         const firstNum = array[i];
//         for (let j = i + 1; j < array.length; j++) {
//             const secondNum = array[j];
//             if (firstNum + secondNum === targetSum) {
//                 return [firstNum, secondNum];
//             }
//         }
//     }
//     return [];
// }

// console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6]), [-1, 11]);

// Second Solution

// hash table

//O(n) time | O(n) space

// function twoNumberSum(array, targetSum) {
//     targetSum = 10;
//     const nums = {}; // create an object
//     for (const num of array) { // iterate through the array
//         const potentialMatch = targetSum - num;
//         if (potentialMatch in nums) {
//             return [potentialMatch, num];
//         } else {
//             nums[num] = true;
//         }
//     }
//     return [];
// }

// Third Solution
// two pointer solution
// O(nlog(n)) time | O(1) space

function twoNumberSum(array, targetSum) {
    targetSum = 10; // only used for code to compile
    array.sort((a, b) => a - b); // sort the array (most likely uses quicksort, introsort, mergesort O(nlog(n)) time)
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        const currentSum = array[left] + array[right];
        if (currentSum === targetSum) {
            return [array[left], array[right]];
        } else if (currentSum < targetSum) {
            left++;
        } else if (currentSum > targetSum) {
            right--;
        }
    }
    return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6]), [-1, 11]);
