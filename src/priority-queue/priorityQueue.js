class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element, priority) {
    const qElement = new QElement(element, priority);
    let isEnqueued = false;

    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i].priority < qElement.priority) {
        this.queue.splice(i, 0, qElement);
        isEnqueued = true;
        break;
      }
    }

    if (!isEnqueued) {
      this.queue.push(qElement);
    }
  }

  dequeue() {
    if (this.queue.length === 0) {
      throw new Error('큐가 비었습니다.');
    }

    return this.queue.shift();
  }

  front() {
    if (this.queue.length === 0) {
      throw new Error('큐가 비었습니다.');
    }

    return this.queue[0];
  }

  rear() {
    if (this.queue.length === 0) {
      throw new Error('큐가 비었습니다.');
    }

    return this.queue[this.queue.length - 1];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  print() {
    let str = '';
    this.queue.forEach((item) => (str += item.element + ' '));
    return str;
  }
}

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue(10, 1);
priorityQueue.enqueue(20, 2);
priorityQueue.enqueue(30, 3);

console.log(priorityQueue.print()); // 30 20 10
console.log(priorityQueue.front()); // QElement { element: 30, priority: 3 }
console.log(priorityQueue.rear()); // QElement { element: 10, priority: 1 }

priorityQueue.dequeue();
console.log(priorityQueue.print()); // 20 10

priorityQueue.enqueue(30, 1);
console.log(priorityQueue.print()); // 20 10 30
