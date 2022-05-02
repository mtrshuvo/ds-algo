class QNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }
  enque(value) {
    const val = new QNode(value);
    if (this.front === null) {
      this.front = val;
      this.back = val;
      this.size++;
      return;
    }
    this.back.next = val;
    this.back = val;
    this.size++;
  }
  dequeue() {
    if (this.front === null) {
      throw "Queue is empty";
    }
    if (this.size === 1) {
      this.front = this.back = null;
      this.size--;
      return;
    }
    this.front = this.front.next;
    this.size--;
  }
}
const queue = new Queue();
queue.enque(10);
queue.enque(20);
queue.enque(30);
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue);
console.log(Math.max(10, 15));
