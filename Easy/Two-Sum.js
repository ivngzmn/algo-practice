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

1. Two Sum

https://leetcode.com/problems/two-sum/

Instructions

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

 

Constraints:

    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.

 
Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity?
*/
// O(n) space | O(n^2) time
// var twoSum = function (nums, target) {
//     target = 9;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };

// Can you make it do a barrel roll? Yes with a hashmap
// (N + N), O(n) space | O(n) time
// Memory Usage: 42.9 MB | Runtime: 68 ms
var twoSum = function (nums, target) {
    target = 9;
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in obj) {
            return [obj[target - nums[i]], i];
        } else {
            obj[nums[i]] = i;
        }
    }
};

console.log(twoSum([2, 7, 11, 15]), [0, 1]);
