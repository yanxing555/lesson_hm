// 用泛型去声明一个链表
// 数据结构，ADT 抽象数据类型 
// 支持泛型的节点， 可以接受value 类型的传参
class linkNode<T> {
    value: T;
    next: linkNode<T> | null = null;
    constructor(value: T) {
        this.value = value;
    }
}
// 链表的操作
class linkedList<T> {
    head: linkNode<T> | null = null;
    append(value: T): void {
        const node = new linkNode(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
}

const numberList = new linkedList<number>();
numberList.append(1);
numberList.append(2);
numberList.append(3);

interface User {
    id: number;
    name: string;
}

const userList = new linkedList<User>();
userList.append({ id: 1, name: "张三" });
userList.append({ id: 2, name: "李四" });
userList.append({ id: 3, name: "王五" });
