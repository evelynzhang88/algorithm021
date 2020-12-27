### 遍历的方式： 深度优先搜索(DFS)， 广度优先搜索(BFS)
#### 每个节点都要访问一次
#### 每个节点只能访问一次
#### 每个节点仅要访问一次

```javascript
def dfs(node):
  if node in visited:
    return
  
  visited.add(node)

  // process current node
  // ... # logic here
  dfs(node.left)
  dfs(node.right)
```

### 深度优先搜索
```python
visited = set()

def dfs(node, visited):
  if node in visited: # terminator
    # already visited
    return
  
  visited.add(node)

  # process current node here.
  ...
  for next_node in node.children:
    if not next_node in visited:
      dfs(next node, visited)

```

### 贪心算法
#### 贪心算法在每一步都选择最优的选择，从而希望导致全局最优选择

### 贪心算法和动态规划的区别
#### 贪心算法对每个子问题都作出选择，不可回退。动态规划会保存以前的运行结果。并根据以前的结果对当前进行选择，有回退功能。贪心算法的适用条件一般是能够预估结果，证明贪心算法是最好的方法。


### 二分查找
#### 前提： 1. 单调性；2.存在上下界；3.能够通过索引访问
#### 代码模版
```python

left, right = 0, len(array) - 1
while  left <= right:
  mid = (left + right) / 2
  if arry[mid] == target:
    # find the target
    break or return result
  elif array[mid] < target:
    left = mid + 1
  else:
    right = mid - 1


```





