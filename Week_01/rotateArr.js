var rotate = function (nums, k) {
  let temp = 0, previous = 0;
  for (let i = 0; i < k; i++) {
    previous = nums[nums.length - 1];
    for (let j = 0; j < nums.length; j++) {
      temp = nums[j];
      nums[j] = previous;
      previous = temp;
    }
  }
  return nums
};