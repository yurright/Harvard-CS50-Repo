/**
* Problem: 1929. Concatenation of Array
* Solution : Using Spread Syntax
*/

/**
*Description:
* Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
* Specifically, ans is the concatenation of two nums arrays.
* Return the array ans.
*/

/**
* Result
* Runtime: 53 mx
* Memory: 51.93 MB
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    var ans = [];
    ans = [...nums, ...nums]
    return ans
};
