//Recursively printing nested numbers
type NestedNumbers = number | NestedNumbers[];

const numbers = (arr: NestedNumbers[]) => {
  arr.forEach((nbr) => {
    if (Array.isArray(nbr)) {
      numbers(nbr);
    } else {
      console.log(nbr);
    }
  });
};

numbers([1, 2, 3, [3, 2, 1, 5], 5, [44, [55, 6, 7]]]);
