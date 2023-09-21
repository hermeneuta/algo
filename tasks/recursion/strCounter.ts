//fn accepts an array of strings and returns total nbr of char across all the string

type CounterFunction = (arr: string[], n: number) => number;

const counter: CounterFunction = (arr, n) => {
  //base case
  if (arr.length === 0) return n;

  //recursion
  n += arr.pop()?.length ?? 0;
  console.log(arr, n);
  return counter(arr, n);
};

counter(["a", "be", "ndke", "gh"], 0); // 9
