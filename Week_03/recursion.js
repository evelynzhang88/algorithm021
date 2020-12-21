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


// 二叉树的最近公共祖先
const lowestCommonAncestor = (root, p, q) => {
  if (root == null) { // 遇到null，返回null 没有LCA
    return null;
  }
  if (root == q || root == p) { // 遇到p或q，直接返回当前节点
    return root;
  }
  // 非null 非q 非p，则递归左右子树
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  // 根据递归的结果，决定谁是LCA
  if (left && right) {
    return root;
  }
  if (left == null) {
    return right;
  }
  return left;
};
