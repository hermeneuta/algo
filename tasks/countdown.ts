//Count down function

const countDown = (nbr: number) => {
  for (let i = nbr; i >= 0; i--) {
    setTimeout(() => {
      console.log(i);
    }, (nbr - i) * 1000);
  }
};

const recCountDown = (nbr: number) => {
  console.log(nbr);
  if (nbr === 0) return;
  else recCountDown(nbr - 1);
};

recCountDown(5);
