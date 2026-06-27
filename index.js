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
