var twoSum = function (nums, target) {
  let result = [] //返回值
  for (let i = 0; i < nums.length; i++) {
      for (j = i + 1; j < nums.length; j++) {
          if ((i !== j) && (nums[i] + nums[j] === target)) {
              result.push(i, j);
          }
      }
  }
  return result
};