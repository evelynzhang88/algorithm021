// 二叉树：前序遍历,根，左，右
function TreeNode(val, left, right) {
  this.val = (val === undefined) ? 0 : val
  this.left = (left === undefined) ? null : left
  this.right = (right === undefined) ? null : right
}

// @param {TreeNode} root
// @return {number[]}
let preOrderTraversal = function (root) {
  let result = []
  let preOrder = (node) => {
    if (node) {
      result.push(node.val)
      preOrder(node.left)
      preOrder(node.right)
    }
  }
  preOrder(root)
  return result
}

// 在js中，用对象去模拟二叉树的数据结构
const root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 2,
    left: { val: 3, left: null, right: null },
    right: null,
  },
};

preOrderTraversal(root)

// 二叉树的中序遍历（左，根，右）
var inorderTraversal = function (root) {
  let result = []
  let i = 0
  let inOrder = function (node) {
    i++
    if (node) {
      inOrder(node.left)
      result.push(node.val)
      inOrder(node.right)
    }
  }
  inOrder(root)
  return result
};

inorderTraversal(root)

