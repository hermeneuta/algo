//fn that accepts an array of numbers and return a new array containing only even numbers

type EvenFunction = (arr: number[], evenArr?: number[]) => number[];

const evenNum: EvenFunction = (arr, evenArr = []) => {
  //base case
  if (arr.length === 0) return evenArr;

  //recursion solved with subproblem approach
  const check = arr.pop() ?? 0;
  if (check % 2 === 0) evenArr.push(check);
  console.log(check, arr, evenArr);

  return evenNum(arr, evenArr);
};

evenNum([33, 4, 1, 55, 3, 6]); // [6,4]
