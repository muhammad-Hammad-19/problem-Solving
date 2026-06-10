const nums = [1, 4, 1, 2, 1, 2];

for (let i = 0; i < nums.length; i++) {
  let conut = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[i] == nums[j]) {
      conut++;
    }
  }

  if (conut == 1) {
    console.log(nums[i]);
    break;
  }
  
}
