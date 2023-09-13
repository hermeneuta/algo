//Sprawdzenie czy mniejsza tablica jest podzbiorem większej
//z wykorzystaniem funkcji hashującej

function with_hash(arr1: number[], arr2: number[]) {
  let small_arr: number[];
  let big_arr: number[];
  let hash_table: { [key: number]: boolean } = {};

  //1. sprawdzenie, która tablica jest większa
  if (arr1.length < arr2.length) {
    small_arr = arr1;
    big_arr = arr2;
  } else {
    small_arr = arr2;
    big_arr = arr1;
  }

  //2. napisanie funkcji hashującej
  for (const el of big_arr) {
    hash_table[el] = true;
  }

  //3. sprawdzenie czy mniejsza tablica jest podzbiorem większej
  for (const el of small_arr) {
    if (!hash_table[el]) {
      return console.log(false);
    }
  }

  return console.log(true);
}

with_hash([1, 4, 5, 3], [6, 4]);
