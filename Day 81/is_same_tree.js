// 100. Same Tree

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Example 2:
// Input: p = [1,2], q = [1,null,2]
// Output: false
// Example 3:

// Input: p = [1,2,1], q = [1,1,2]
// Output: false

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // If both trees are null, they are the same
  if (!p && !q) return true;

  // If one tree is null while the other is not, they are different
  if (!p || !q) return false;

  // If the current nodes' values are different, the trees are different
  if (p.val !== q.val) return false;

  // Recursively check the left and right subtrees for sameness
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

const p = [1, 2, 1],
  q = [1, 1, 2];
console.log("is same tree :", isSameTree(p, q));
// Output: false
