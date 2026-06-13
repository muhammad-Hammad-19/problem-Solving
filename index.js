// const nums = [1, 4, 1, 2, 1, 2];

// for (let i = 0; i < nums.length; i++) {
//   let conut = 0;

//   for (let j = 0; j < nums.length; j++) {
//     if (nums[i] == nums[j]) {
//       conut++;
//     }
//   }

//   if (conut == 1) {
//     console.log(nums[i]);
//     break;
//   }

// }

const str1 = "ahauuu";
let vowels = "aeiou";

let count = 0;

for (let i = 0; i < str1.length; i++) {
  for (let j = 0; j < vowels.length; j++) {


    if (str1[i] === vowels[j]) {
      count = count + 2;
    }


  }

  if (!vowels.includes(str1[i])) {
    count += 1;
  }
}


console.log(count);
