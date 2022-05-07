class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'Underflow';
    } else {
      return this.items.shift();
    }
  }

  front() {
    if (this.isEmpty()) {
      return 'No elements in Queue';
    } else {
      return this.items[0];
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printQueue() {
    let str = '';
    this.items.forEach((item) => {
      str += item + ' ';
    });
    return str;
  }
}

const queue = new Queue();

console.log(queue.dequeue()); // Underflow

console.log(queue.isEmpty()); // true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);

console.log(queue.front()); // 10

console.log(queue.dequeue()); // 10

console.log(queue.front()); // 20

console.log(queue.dequeue()); // 20

console.log(queue.printQueue()); // 30 40 50 60
