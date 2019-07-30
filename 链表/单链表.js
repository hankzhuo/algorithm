class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		var newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop() {
		if (!this.head) return undefined;
		var current = this.head;
		var newTail = current;
		// 找到倒数第二个节点
    while (current.next) {
      newTail = current;
      current = current.next;
    }
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}
	shift() {
		if (!this.head) return undefined;
		var currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return currentHead;
	}
	unshift(val) {
		var newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return newNode;
  }
  get(index) {
    if (index < 0 || index > this.length) return null;
    var counter = 0;
    var current = this.head;
    while(counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(val, index) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return !!this.push(val);
		if (index === 0) return !!this.unshift(val);

		var newNode = new Node(val);
		var prev = this.get(index - 1);
		var temp = prev.next
		prev.next = newNode;
		newNode.next = temp;
		this.length++;
		return true;
  }
  remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();
		
		var previousNode = this.get(index - 1);
		var removed = previousNode.next;
		previousNode.next = removed.next;
		this.length--;
		return removed;
  } 
  reverse() {
		var node = this.head;
		this.head = this.tail;
		this.tail = node;
		var next;
		var prev = null;
		for (var i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
		return this;
  }
}

var list = new SinglyLinkedList();
list.push(21);
list.push(32);
list.push(44);
list.push(55);

/**
 * 1. a dd：在链表末尾加一位
 *      没有 head 时，tail 和 head 都指向新节点
 *      存在 head 时，this.tail.next 赋值为新 node，同时 新 node 赋值给 tail（顺序不能颠倒，先设置指向）
 * 2. pop：在链表末尾删除一位
 *      如果没有节点，返回 undefined  
 *      遍历链表，直到找到最后 tail
 *      设置倒数第二节点的 next 为 null
 *      设置倒数第二为 tail
 *      长度减一
 * 3. shift：移除列表第一项
 * 4. unshift: 列表最前面增加一项
 * 5. get：获取某一项
 * 6. set：设置某一项
 * 7. insert: 插入某一项
 * 8. remove: 移除某一项
 * 9. reverse: 翻转链表
 */
