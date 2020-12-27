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

// 组合：使用回溯算法
var combine = function (n, k) {
  let result = [];

  const helper = (start, path) => {
    if (path.length === k) {
      result.push(path.slice())
      return
    }
    for (let j = start; j < n + 1; j++) {
      path.push(j)
      helper(j + 1, path)
      path.pop()
    }
  }

  helper(1, []);
  return result
};

combine(4, 2)


// 暴力方法
var myPow2 = function (x, n) {
  let result = 1
  for (let j = 0; j < n; j++) {
    result = result * x
  }
  return result
};


// 二分法
var myPow = function (x, n) {
  if (x === 0) { return 0 }
  if (n === 0) { return 1 }
  if (n < 0) { return 1 / myPow(x, -n) }
  if (n % 2) {
    // n is odd
    return x * myPow(x, n - 1)
  }
  return myPow(x * x, n / 2)
};