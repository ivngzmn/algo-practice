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

242. Valid Anagram

https://leetcode.com/problems/valid-anagram/

Instructions

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

Constraints:

    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.

 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

*/
//PREP
// string? Y, nums? N
// return true if word is anagram false if not anagram
//

// var isAnagram = function (s, t) {
//   // sort the s and t strings in order to check for equality
//   const sSorted = s.split('').sort().join('');
//   const tSorted = t.split('').sort().join('');
//   // console.log(sSorted);
//   // console.log(tSorted);
//   // if s contains all the letters in t return true else false
//   if (sSorted === tSorted) {
//     return true;
//   }
//   return false;
// };
// // examples
// console.log(isAnagram('anagram', 'nagaram')); // true
// console.log(isAnagram('rat', 'car')); // false

// Space and time complexity
// sort is nlogn
// O(NlogN + MlogN)
// can you get it to run in constant time?
// say less
// throw a hashmap at it

var isAnagram = function (s, t) {
  // setting our hash maps
  const sCount = {};
  const tCount = {};
  // if string length don't match return false
  if (s.length !== t.length) return false;
  // obtain all letter counts and place in arr
  for (let i = 0; i < s.length; i++) {
    if (!sCount[s[i]]) sCount[s[i]] = 0;
    if (!tCount[t[i]]) tCount[t[i]] = 0;
    sCount[s[i]]++;
    tCount[t[i]]++;
  }
  // check if letter counts match each other. If not return false
  for (let char in sCount) {
    if (sCount[char] !== tCount[char]) return false;
  }
  // else we return true
  return true;
};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false

// linear space and time complexity
// O(n)
