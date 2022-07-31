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

49. Group Anagrams

https://leetcode.com/problems/group-anagrams/

Instructions

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]

 

Constraints:

    1 <= strs.length <= 104
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters.


*/
//PREP
// arr? Y, Ints? N, Strings? Y, empty arr? Y, arr with single word?
// returning a nested arr with words groups that are anagrams
// Time: O(n*max(w)*log(max(w)))
// Space: O(n*max(w))
var groupAnagrams = function (strs) {
  const result = []
  const map = new Map()
  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split('').sort().join('')
    // we are sorting the strings n log n
    if (map.has(sorted)) {
      map.get(sorted).push(strs[i])
    } else {
      map.set(sorted, [strs[i]])
    }
  }
  for (let [key, value] of map) {
    result.push(value)
  }
  return result
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([''])); // [['']]
console.log(groupAnagrams(['a'])); // [['a']]
