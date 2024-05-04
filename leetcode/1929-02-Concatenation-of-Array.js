/**
* Problem: 1929. Concatenation of Array
* Solution: Using Stack
*/

/**
* Description: Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
* Specifically, ans is the concatenation of two nums arrays.
* Return the array ans.
*/

/**
* Result
* Runtime: 73 ms
* Memory: 52.73 MB
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    var stack = [];
    var concatCount = 2;
    var n = nums.length;
    
    for(let i=0; i<n * concatCount; i++) {
        if(i < n) {
stack.push(nums[i]);
        }
        else {
            stack.push(nums[i-n]);
        }
    };

    return stack;
};
