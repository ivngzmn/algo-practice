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

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

    For example, 121 is a palindrome while 123 is not.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

 

Constraints:

    -231 <= x <= 231 - 1

 
Follow up: Could you solve it without converting the integer to a string?
*/
// My original answer
// var isPalindrome = function(x) {
//     let reverseInt = x.toString().split('').reverse().join('')
//     if(reverseInt == x) return true
//     return false
// };

// Answer that was best to come up with
var isPalindrome = function(x) {
    let reverseInt = Number(x.toString().split('').reverse().join(''))
    console.log(reverseInt)
    if(reverseInt === x) return true
    return false
};

console.log(isPalindrome(121)) // true
console.log(isPalindrome(-121)) // false
console.log(isPalindrome(123)) // false

