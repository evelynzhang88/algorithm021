
// 有效的字母异位词:两个字符串排序后相等
var isAnagram = function (s, t) {
  let aS = {}
  let aT = {}
  let isExist = true
  if (s.length !== t.length) {
    isExist = false
    return isExist
  }
  s.split('').forEach((item, index) => {
    let currentNum = aS.hasOwnProperty(item) ? (parseInt(aS[item]) + 1) : 1;
    aS[item] = currentNum
  });

  t.split('').forEach((item, index) => {
    let currentNum = aT.hasOwnProperty(item) ? (parseInt(aT[item]) + 1) : 1;
    aT[item] = currentNum
  })

  for (let key in aS) {
    if (aS[key] !== aT[key]) {
      isExist = false
      return isExist
    }
  }
  return isExist
};

// 最小的k个数，先排序，再获取
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  let sortArr = arr.sort(function (a, b) {
    return a - b
  })
  let result = []
  for (let i = 0; i < k; i++) {
    result.push(sortArr[i])
  }
  return result
};

