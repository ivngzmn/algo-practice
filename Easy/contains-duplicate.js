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

217. Contains Duplicate

https://leetcode.com/problems/contains-duplicate/

Instructions

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

 

Constraints:

    1 <= nums.length <= 105
    -109 <= nums[i] <= 109

*/

/*
 * @param {number[]} nums
 * @return {boolean}
 */
// solved with a hashmap
// O(N) space | O(N) time
// Memory Usage: 51.8 MB | Runtime: 132 ms
// First Solution
// var containsDuplicate = function (nums) {
//     let hash = {}; //hashmap
//     for (const num of nums) {
//         // if we have seen the num return true
//         if (hash[num]) return true;
//         hash[num] = true;
//     }
//     return false;
// };

// Second solution
// O(N) space | O(N) time
// Memory Usage: 50.7 MB | Runtime: 103 ms
// create dictionary/hashmap
// Go through array and see if what I see now, is something I've seen before.
// if my num is never seen before, put in memory
// if the nem does exist in mem, return true
// var containsDuplicate = function (nums) {

//     let memory = {}; // hashmap
//     for (let i = 0; i < nums.length; i++) {
//         if (memory[nums[i]] === undefined) {
//             memory[nums[i]] = 'no dupes here partner';
//         } else {
//             return true;
//         }
//     }
//     return false;
// };

// third solution
// How can we reduce space complexity? Looks to be we are as good as we can get with time complexity
// [1,2,3,1] can we do anything to this array?
// [1,1,2,3] ??? sort that baby
// pseudo code
// sort our input array space O(NlogN)
// O(NlogN) space | O(N) time
// not optimal but it is a solution

var containsDuplicate = function (nums) {
    nums.sort((a, b) => {
        return b - a;
    });
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) return true;
    }
    return false;
};

console.log(containsDuplicate([1, 2, 3, 1]), true);
console.log(containsDuplicate([1, 2, 3, 4]), false);
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
