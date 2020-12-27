// BFS or BFS
var levelOrder = function (root) {
  const ret = [];
  if (!root) {
    return ret;
  }

  const q = [];
  q.push(root);
  while (q.length !== 0) {
    const currentLevelSize = q.length;
    ret.push([]);
    for (let i = 1; i <= currentLevelSize; ++i) {
      const node = q.shift();
      ret[ret.length - 1].push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }

  return ret;
};


// 单词接龙
var ladderLength = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) {
    return 0;
  }
  // 是否能够转换
  const canConversion = (s1, s2) => {
    if (s1.length !== s2.length) return false;
    // 不同字符的数量，为1表示能够转换
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        count++;
      }
      if (count > 1) {
        return false;
      }
    }
    return count === 1;
  }

  const queue = [];
  queue.push([beginWord, 1]);
  while (queue.length) {
    // 头部元素出队列
    const [word, level] = queue.shift();
    if (word === endWord) {
      return level;
    }
    for (let item of wordSet) {
      if (canConversion(word, item)) {
        queue.push([item, level + 1]);
        wordSet.delete(item);
      }
    }
  }

  return 0;
};