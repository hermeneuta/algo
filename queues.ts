//Creating Queue class

export default class Queue<T> {
  queue: T[] = [];

  constructor() {
    this.queue = [];
  }

  length(): number {
    return this.queue.length;
  }

  read(): T | undefined {
    return this.queue.length > 0 ? this.queue[0] : undefined;
  }

  remove(): T | undefined {
    return this.queue.shift();
  }

  insert(item: T): void {
    this.queue.push(item);
  }
}
