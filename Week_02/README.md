### 哈希表：

<p> 哈希表是通过键值对对数据进行存储的数据结构，一般通过键值去访问哈希表。<br>在工程上的应用有LRU缓存，键值对储存。<br>在javascript中可以使用对象来表示哈希结构。 </p>

### 哈希表的复杂度
<p>
  时间复杂度：增(O(n)), 删除(O(n))，改(O(n))，查询(O(1))<br>
  空间复杂度：O(n)
</p>

### 相关例题：

#### 1.有效的字母异位词
``` javascript
var isAnagram = function(s, t) {
    return s.length == t.length && [...s].sort().join('') === [...t].sort().join('')
};
```

#### 2.两数之和, 使用哈希表的方法
``` javascript
let twoSum = function (nums, target) {
  let resultMap = new Map()
  let result = []
  nums.forEach((item, index) => {
    resultMap.set(item, index)
  });
  nums.forEach((item, index) => {
    let anotherNumber = target - item
    if (resultMap.has(anotherNumber) && (resultMap.get(anotherNumber) !== index) && !result.includes(index)) {
      result.push(index, resultMap.get(anotherNumber));
    }
  })
  return result
}
```

## 树
<p>由父子节点连接而成的结构，称为树</p>

### 二叉树
#### 
#### 二叉树的遍历方法
<ul>
  <li> 前序遍历：根，左，右 </li>
  <li> 中序遍历：左，根，右 </li>
  <li> 后序遍历：左，右，根 </li>
</ul>

#### 二叉搜索树
<p>又称为有序二叉树，特点是左子树的值 < 根节点 < 右子树, 中序遍历是升序排列 </p>
<p>常见操作：插入，删除，查询 </p>

## 树的面试题解法一般都是递归，为什么？
<p>因为树的增删改操作都需要遍历树的节点，根据树的结构特点，遍历的时候需要根据某个节点来遍历左子树和右子树，这样重复性的操作，符合递归的特性。所以一般涉及到树都会使用递归</p>

### 例题
#### 二叉树的中序遍历：左，根，右
``` javascript
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
``` 

## 堆(heap)：快速找到一堆树中的最大值和最小值
## 二叉堆：完全二叉树来实现，根节点 >= 子节点，所以最大值一定是根节点

``` javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
    let sortArr = arr.sort(function(a,b){
        return a - b
    })
    let result = []
    for (let i = 0; i < k; i++) {
        result.push(sortArr[i])
    }
    return result
};
```




