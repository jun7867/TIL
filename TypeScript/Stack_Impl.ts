interface Stack{
    readonly size: number;
    push(data: String): void;
    pop():string;
    peek(): string;
    isEmpty(): boolean;
}

type StackNode = {
    // 데이터 정의시 데이터의 불변성을 유지하는게 좋다. => readonly
    readonly value: string;
    readonly next?: StackNode;
}

class StackImpl implements Stack{
    // _를 붙이면 내부에서만 쓰이는 변수.
    private _size: number=0;
    private head?: StackNode;

    constructor(private capacity: number){}

    get size() {
        return this._size;
    }

    // 새로운 노드의 next는 지금의 head이고, head를 새로운 노드로 업데이트 시켜준다. 
    push(value: string): void {
        if(this.size === this.capacity){
            throw new Error('Stack is full');
        }
        const newNode: StackNode = {value,next: this.head};
        this.head=newNode;
        this._size++;
    }

    // undefined를 하게되면 null 체크를 계속 해줘야 하기 때문에 사용하지 않는게 좋다.
    // throw new Error로 처리해준다.
    pop(): string {
        // this.head === undefined로 하게 되면 (JS에서 null 또는 undefined를 받을 수 있다.) null은 undefined가 아니기 때문에 통과가 된다.
        // 따라서 null로 해서 null과 undefined 둘다 체크하게끔 해준다. (null == undefined) , (null !==undefined)
        if(this.head == null){
            throw new Error('Stack is Empty!');
        }
        const curNode = this.head;
        this.head=curNode.next;
        this._size--;
        return curNode.value;
    }

    peek(): string {
        if(this.head == null){
            throw new Error('Stack is Empty!');
        }
        const curNode = this.head;
        return curNode.value; 
    }

    isEmpty(): boolean {
       return this.size === 0;
    }

}

const stack = new StackImpl(10);
stack.push("hi");
stack.push("hi22");
console.log(stack.size);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.pop()); // Error
