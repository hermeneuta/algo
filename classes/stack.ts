//define stack
//define three methods: read, insert, remove

export default class Stack<T> {
  stack: T[] = [];
  constructor() {
    this.stack = [];
  }

  length(): number {
    return this.stack.length;
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
