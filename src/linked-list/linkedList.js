const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addNodeToTail(element) {
    const node = new Node(element);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return console.log('유효한 인덱스를 입력해주세요.');
    } else {
      const node = new Node(element);
      let curr, prev;

      curr = this.head;

      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        let it = 0;

        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        node.next = curr;
        prev.next = node;
      }

      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || this.size <= index) {
      return console.log('유효한 인덱스를 입력해주세요.');
    } else {
      let curr,
        prev,
        it = 0;
      curr = this.head;
      prev = curr;

      if (index === 0) {
        this.head = curr.next;
      } else {
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        prev.next = curr.next;
      }
      this.size--;

      return curr.element;
    }
  }

  removeElement(element) {
    let current = this.head;
    let prev = null;

    while (current !== null) {
      if (current.element === element) {
        if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }

  indexOf(element) {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      if (current.element === element) {
        return count;
      }

      count++;
      current = current.next;
    }

    return -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  sizeOfList() {
    return this.size;
  }

  printList() {
    let curr = this.head;
    let str = '';

    while (curr) {
      str += curr.element + ' ';
      curr = curr.next;
    }
    console.log(str);
  }
}

const linkedList = new LinkedList();
console.log(linkedList.isEmpty()); // true

linkedList.addNodeToTail(10);
linkedList.printList(); // 10

console.log(linkedList.sizeOfList()); // 1

linkedList.addNodeToTail(20);
linkedList.addNodeToTail(30);
linkedList.addNodeToTail(40);
linkedList.addNodeToTail(50);

linkedList.printList(); // 10 20 30 40 50

console.log('is element removed?', linkedList.removeElement(50));
linkedList.printList(); // 10 20 30 40

linkedList.insertAt(60, 2);
linkedList.printList(); // 10 20 60 30 40

console.log('is List Empty?', linkedList.isEmpty()); // false

console.log(linkedList.removeFrom(3));

linkedList.printList(); // 10 20 60 40
