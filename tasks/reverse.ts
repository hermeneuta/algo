//Reverse string
import Stack from "../classes/stack";

const reverse = (str: string) => {
  let stack = new Stack();
  let rev = "";
  for (let i = 0; i < str.length; i++) {
    stack.insert(str[i]);
  }

  for (let i = stack.length(); i > 0; i--) {
    rev += stack.remove();
  }
  console.log(rev);
};

reverse("abcde");
