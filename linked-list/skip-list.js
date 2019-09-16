/**
 * @description 跳表 skip-list
 * 1. 跳表是链表加**多级索引**的结构
 * 2. 跳表是一个**动态数据结构**，支持快速插入、删除、查找操作，**时间复杂度 O(logn)**
 * 3. 比起单纯的单链表，跳表需要更多的索引，肯定需要更多储存空间。**空间复杂度为 O(n)**
 * 4. 不断插入数据时，链表节点多了，索引就需要相应增加一些
 */

const MAX_LEVEL = 16; // 跳表索引最大级数

class Node {
  constructor({
    data = -1,
    maxLevel = 0,
    refer = new Array(MAX_LEVEL)
  } = {}) {
    this.data = data; // 节点的数据
    this.maxLevel = maxLevel;  // 当前节点处于跳表索引的级数
    this.refer = refer; // 数组里值指向别的节点的索引
  }
}

class SkipList {
  constructor() {
    this.head = new Node();
    this.levelCount = 1;  // 当前跳表索引的总共级数
  }

  randomLevel() {
    let level = 1;
    for (let i = 1; i < MAX_LEVEL; i++) {
      if (Math.random() < 0.5) {
        level++;
      }
    }
    return level;
  }

  insert(value) {
    const level = this.randomLevel(); // 随机生成数据索引的层数
    const newNode = new Node();
    newNode.data = value;
    newNode.maxLevel = level;
    const update = new Array(level).fill(new Node());
    let p = this.head;

    for (let i = level - 1; i >= 0; i--) {
      while (p.refer[i] !== undefined && p.refer[i].data < value) {
        p = p.refer[i];
      }
      
      update[i] = p;
    }

    for (let i = 0; i < level; i++) {
      newNode.refer[i] = update[i].refer[i];
      update[i].refer[i] = newNode;
    }

    if (this.levelCount < level) {
      this.levelCount = level;
    }
  }

  find(value) {
    if (!value) { return null }
    let p = this.head;

    for (let i = this.levelCount - 1; i >= 0; i--) {
      while (p.refer[i] !== undefined && p.refer[i].data < value) {  // p.refer[i] 是 i 级索引上 p 节点的下一个节点
        p = p.refer[i];
      }
    }

    if (p.refer[0] !== undefined && p.refer[0].data === value) {
      return p.refer[0];
    }

    return null;
  }

  remove(value) {
    let _node;
    let p = this.head;
    const update = new Array(new Node());

    for (let i = this.levelCount - 1; i >= 0; i--) {
      while (p.refer[i] !== undefined && p.refer[i].data < value) {
        p = p.refer[i];
      }
      update[i] = p;
    }

    if (p.refer[0] !== undefined && p.refer[0].data === value) {
      _node = p.refer[0];
      for (let i = 0; i <= this.levelCount - 1; i++) {
        if (update[i].refer[i] !== undefined && update[i].refer[i].data === value) {
          update[i].refer[i] = update[i].refer[i].refer[i];
        }
      }

      return _node;
    }

    return null;
  }

  printAll() {
    let p = this.head;
    while (p.refer[0] !== undefined) {
      console.log(p.refer[0].data)
      p = p.refer[0];
    }
  }
}

test();
function test() {
  let list = new SkipList();
  let length = 20000;
  //顺序插入
  for (let i = 1; i <= 10; i++) {
    list.insert(i);
  }
  //输出一次
  list.printAll();
  console.time('create length-10')
  //插入剩下的
  for (let i = 11; i <= length - 10; i++) {
    list.insert(i);
  }
  console.timeEnd('create length-10')
  //搜索 10次
  for (let j = 0; j < 10; j++) {
    let key = Math.floor(Math.random() * length + 1);
    console.log(key, list.find(key))
  }
  //搜索不存在的值
  console.log('null:', list.find(length + 1));
  //搜索5000次统计时间
  console.time('search 5000');
  for (let j = 0; j < 5000; j++) {
    let key = Math.floor(Math.random() * length + 1);
  }
  console.timeEnd('search 5000');
}