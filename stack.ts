//Implementation of linter
//using stack data structure

//define stack
//define three methods: read, insert, remove

class Stack<T> {
  stack: T[];
  constructor() {
    this.stack = [];
  }
  insert(item: T): void {
    //push
    this.stack.push(item);
  }
  remove(): T | undefined {
    //pop
    return this.stack.pop();
  }
  read(): T | undefined {
    return this.stack.length > 0
      ? this.stack[this.stack.length - 1]
      : undefined;
  }
}

class Linter {
  private stack: Stack<string>;
  constructor() {
    this.stack = new Stack<string>();
  }

  lint(text: string) {
    for (const el of text) {
      if (el === "H" || el === "l") this.stack.insert(el);
      console.log(this.stack);
    }
  }
}

const code = new Linter();

code.lint("Hello");
