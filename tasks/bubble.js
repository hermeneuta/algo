//Implementation of a bubble sort algorithm

const bubble = (a) => {
  let k = 0;
  let n = 0;
  let N = a.length;

  const t1 = Date.now();
  console.log(a);
  while (k == 0) {
    k = 1;
    for (let i = 0, j = 1; j < N - n; i++, j++) {
      if (a[i] > a[j]) {
        let tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
        k = 0;
      }
    }
    n++;
  }
  const t2 = Date.now();

  console.log("Time passed: ", t2 - t1);
  console.log(a);
};

bubble([1, 3, 3, 5, 44, 55]);
