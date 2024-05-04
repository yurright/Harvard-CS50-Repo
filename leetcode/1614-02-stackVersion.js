/**
* Problem: 1614. Maximum Nesting Depth of the Parentheses
* Solution: Using a Stack to track open depth of string
*/

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
   var stack = [];
   var dMax = 0;


    for(let c of s) {
        if(c == "(") {
            stack.push(c);
            dMax = Math.max(dMax, stack.length);
        } else if(c == ")") {
            stack.pop();
        } 
    }

    return dMax;
};
