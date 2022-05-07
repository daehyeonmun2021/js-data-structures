class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return 'Underflow';
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printStack() {
    let str = '';
    this.items.forEach((item) => {
      str += item + ' ';
    });
    return str;
  }
}

const stack = new Stack();

console.log(stack.isEmpty()); // true
console.log(stack.pop()); // Underflow

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.printStack()); // 10 20 30

console.log(stack.peek()); // 30

console.log(stack.pop()); // 30

console.log(stack.printStack()); // 10 20
