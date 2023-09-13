//Implementation of basic linter
//using stack data structure

//Linter that checks syntax correcteness of using brackets
//Three main err:
//1. Invalid bracket, i.e. (something]
//2. Lack of closing bracket, i.e. (something
//3. Lack of opening bracket, i.e. something)
import Stack from "./classes/stack";

class Linter {
  private stack: Stack<string>;
  constructor() {
    this.stack = new Stack<string>();
  }

  lint(code: string) {
    const openBrackets = ["(", "[", "{"];
    const closeBrackets = [")", "]", "}"];
    const allBrackets = [...openBrackets, ...closeBrackets];
    const complBrackets: Record<string, string> = {
      ")": "(",
      "]": "[",
      "}": "{",
    };
    for (const el of code) {
      const isBracket = allBrackets.some((check) => el.includes(check));
      if (isBracket) {
        //Aktualizacja stacka kiedy jest on pusty lub pojawił się otwarty nawias
        if (this.stack.length() === 0 || openBrackets.includes(el))
          this.stack.insert(el);
        if (closeBrackets.includes(el)) {
          if (complBrackets[el] === this.stack.read()) {
            this.stack.remove();
          }
        }
      }
    }
    if (this.stack.length() === 1) {
      const topElement = this.stack.read();
      if (topElement !== undefined && openBrackets.includes(topElement))
        return console.log(code, "--> Missing closing bracket");
      if (topElement !== undefined && closeBrackets.includes(topElement))
        return console.log(code, "--> Missing opening bracket");
    }
    if (this.stack.length() > 1)
      return console.log(code, "--> Invalid bracket");
    if (this.stack.length() === 0) return console.log(code, "--> Correct");
  }
}

const code = new Linter();

code.lint("[He{ll])o");
