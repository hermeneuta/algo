//Function that returns the intersection of two arrays
// function task1(arr1: number[], arr2: number[]) {
//   let inter_arr: number[] = [];
//   let hash_table: { [key: number]: boolean } = {};
//
//   for (const el of arr1) {
//     hash_table[el] = true;
//   }
//
//   for (const el of arr2) {
//     if (hash_table[el]) {
//       inter_arr.push(el);
//     }
//   }
//
//   console.log(inter_arr);
// }
//
// task1([1, 5, 3], [1, 5, 9, 4]);
//function that accepts array of strings and returns the first duplicate value if occure.
// function task2(arr: string[]) {
//   const hash_table: { [key: string]: number } = {};
//
//   for (const el of arr) {
//     if (hash_table[el] === undefined) {
//       hash_table[el] = 0;
//     }
//
//     hash_table[el] += 1;
//     if (hash_table[el] > 1) {
//       console.log(`${el} duplicate in ${arr}`);
//       return;
//     }
//   }
//   console.log(hash_table);
//   return;
// }
//
// task2(["a", "c", "c", "d", "b", "h"]);
//function that accepts a string that contains all the letters of the alphabet except one and
//returns the missing letter.
// function task3(str: string) {
//   //method for all letters in alphabet in JS
//   let hash_table: { [key: string]: boolean } = {};
//
//   let all_letters: string[] = [];
//   for (let i = 97; i <= 122; i++) {
//     all_letters.push(String.fromCharCode(i));
//   }
//
//   let check_arr = [...str.replace(/\s/g, "")];
//   for (const el of check_arr) {
//     hash_table[el] = true;
//   }
//
//   for (const el of all_letters) {
//     if (!hash_table[el]) {
//       console.log(el);
//       return;
//     }
//   }
// }
//
// task3("the quick brown box jump over a lazy dog");
//function that returns the first non-duplicated char in a string.
function task4(str) {
    const strToArr = [...str];
    let hash_table = {};
    for (const el of strToArr) {
        if (hash_table[el] === undefined) {
            hash_table[el] = 0;
        }
        hash_table[el] += 1;
    }
    for (const el in hash_table) {
        if (hash_table[el] < 2) {
            console.log(el);
            return;
        }
    }
}
task4("miimunm");
