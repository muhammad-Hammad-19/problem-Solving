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

// const str1 = "ahauuu";
// let vowels = "aeiou";

// let count = 0;

// for (let i = 0; i < str1.length; i++) {
//   for (let j = 0; j < vowels.length; j++) {

//     if (str1[i] === vowels[j]) {
//       count = count + 2;
//     }

//   }

//   if (!vowels.includes(str1[i])) {
//     count += 1;
//   }
// }

// console.log(count);

// for (var i = 0; i < 3; i++) {

//   setTimeout(() => {
//     console.log(i);
//   }, 0);

// }

// for (let i = 0; i < 3; i++) {

//   setTimeout(() => {
//     console.log(i);
//   }, 0);

// }

// console.log(i);

// let a = "abbadjhcbegyba";

// let bolen = false;

// let str = "";
// let str1 = "";

// for (let i = 0; i < a.length; i++) {
//   str += a[i];
// }

// console.log(str);

// for (let j = a.length - 1; j >= 0; j--) {
//   str1 += a[j];
// }

// console.log(str1);

// if (str == str1) {
//   bolen = true;
// } else {
//   bolen = false;
// }

// console.log(bolen);

// const arr = [1, 2, 1, 3];

// const result = [];

// let results = arr.filter((item, index) => {
//   if (arr.indexOf(item) == index) {
//     return item;
//   }
// });
// console.log(results);

// for (let i = 0; i < arr.length; i++) {

//   let match = false;

//   for (let j = 0; j < result.length; j++) {

//     if (arr[i] === result[j]) {

//       match = true;

//       break;
//     }

//   }

//   if (!match) {
//     result.push(arr[i]);
//   }
// }

// console.log(result);

//  1 logic complete

// const duplicate = (arr) => {
//   const result = arr.filter((item, index) => {
//     if (arr.indexOf(item) == index) {
//       return item;
//     }
//   });

//   return result;
// };
// const reslut1 = duplicate([1, 2, 2, 2, 1, 2, 3]);
// console.log(reslut1);

// let str = "hammad";
// function name(params) {
//   let result = params.split("").filter((item, index) => {
//     if (params.indexOf(item) == params.lastIndexOf(item)) {
//       return item;
//     }
//   });
//   return result[0];
// }
// let reslut1 = name("hammad");
// console.log(reslut1);

// function name(arr) {
//   if (arr.length < 4) {
//     return arr;
//   }
//   let arr1 = arr.split("");
//   let arr2 = arr1.slice(-4);
//   let Array = [];

//   for (let i = 0; i < arr1.length - 4; i++) {
//     Array.push("*");
//   }
//   let mergeArray = Array.concat(arr2);

//   let removeArrayParts = mergeArray.join("");

//   return removeArrayParts;
// }
// console.log(name("123445678"));

const leads = [
  {
    source: "google_maps",
    website: "",
  },
  {
    source: "google_maps",
    website: "https://abc.com",
  },
  {
    source: "linkedin",
    website: "",
  },
  {
    source: "google_maps",
    website: "",
  },
];

// let obj = {};

// leads.forEach((item) => {
//   if (!obj[item.source]) {
//     obj[item.source] = {
//       total: 0,
//       website: 0,
//     };
//   }

//   obj[item.source].total++;

//   if (item.website) {
//     obj[item.source].website++;
//   }
// });

// console.log(obj);

// let reslut1 = leads.reduce((obj, item) => {
//   if (!obj[item.source]) {
//     obj[item.source] = {
//       total: 0,
//       website: 0,
//     };
//   }

//   obj[item.source].total++;

//   if (item.website) {
//     obj[item.source].website++;
//   }
//   return obj
// }, {});
// console.log(reslut1);

// let sum = 0;
// for (let i = 1; i < 5; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// let arr = [45, 1, 2];

// // 41 < 1 index = 0
// //  1 < 2 index = 1
// //  2 < 45 index = 2

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       // 45 bra hai 1 se , hai arr[j = 1] , next part le ker aya hai , 1 > 2 nahi bara nahi hai , wapsi 2 > 45 nahi ye bhi nahi  , 45 > 1
//       let temp = arr[j];
//       arr[j] = arr[i];
//       arr[i] = temp;
//     }
//   }
// }

// console.log(arr);

// console.log(arr);

// let arr = [5, 12, 7, 3, 9];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     arr[i] = 0;
//   }
// }

// console.log(arr);

// let arr = [4, 1, 9, 2];
// let num = arr[0];
// let minIndex;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < num) {
//     num = arr[i];
//     minIndex = arr[i]
//   }
// }
// arr[minIndex] = 0

// console.log(arr);

// let arr = [45, 100, 200, 50, 54, 1, 2];
// let newArray = [];

// for (let i = 0; i < arr.length; i++) {

//   for (let j = 1; j < arr.length; j++) {

//     if (arr[i] > arr[j]) {
//       if (!newArray.includes(arr[j])) {
//         newArray.push(arr[j]);
//       }
//     }
//   }

//   // Jo element abhi tak add nahi hua usko add kar do

//   if (!newArray.includes(arr[i])) {
//     newArray.push(arr[i]);
//   }

// }

// console.log(newArray);

// function name(arr) {
//   let remove = "";

//   let first = arr[0];

//   for (let i = 0; i < first.length; i++) {

//     for (let j = 1; j < arr.length; j++) {

//       if (first[i] !== arr[j][i]) {
//         return remove;
//       }

//     }
//     remove += first[i];
//   }
//   return remove;
// }

// console.log(name(["flower", "flow", "flight"]));

// let arr = [2, 7, 11, 15];

// let target = 9;

// // for (let i = 0; i < arr.length; i++) {
// //   for (let j = i + 1; j < arr.length; j++) {
// //     if (arr[i] + arr[j] == target) {
// //       console.log([i, j]);
// //     }
// //   }
// // }

// //[ 0 , 1]

// for(let i=0; i<arr.length; i++){
//   for(let j=i + 1; j<arr.length; j++){
//     if(arr[i] + arr[j] == target){
//       console.log([i,j]);

//     }
//   }
// }

// function name(arr) {

//   let k = arr[0];

//   let index = 0;

//   for (let i = 1; i < arr.length; i++) {

//     if (arr[i] !== k) {

//       index++;

//       arr[index] = arr[i];

//       k = arr[i];

//     }
//   }
//   return index + 1;
// }
// console.log(name([1, 1, 2]));

// const findNumber = (nums, val) => {
//   let find = 0;

//   for (let j = 1; j <= val; j++) {
//     let check = false;

//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] == j) {
//         check = true;
//         break;
//       }
//     }

//     if (!check) {
//       find = j;
//     }
//   }

//   return find;
// };
// console.log(findNumber([1, 2, 3, 5], 5));

// 1 == 1 , 1 == 2

function name(arr) {
  let last = 9;
  let found = false;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (!found) {
      if (arr[i] == last) {
        arr[i] = 0;
      } else {
        arr[i] += 1;
        found = true;
      }
    }
  }
  if (!found) {
    arr.unshift(1);
  }
  return arr;
}
console.log(name([1, 2, 3]));
