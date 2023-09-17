//Implementing leftPad

//a = "text"
//leftPad(a, 4, ' ') / "    text"

const arr = [1, 4, 5, 3, 1, 2];
function leftPad(str, count, ch) {
  let padding = "";

  padding += ch.repeat(count);
  console.log(padding + str);
}

leftPad("text", 4, "a");
console.log(arr[(0, 2)]);
