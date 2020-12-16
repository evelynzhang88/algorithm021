// 递归算法
// 1. 翻转二叉树
var invertTree = function (root) {
  if (root === null) return root;
  invertTree(root.right)
  invertTree(root.left)
  const temp = root.left
  root.left = root.right
  root.right = temp
  return root
};

