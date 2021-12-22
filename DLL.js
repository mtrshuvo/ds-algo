class DLL_Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DLL{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertAtFirst(value){
        const newValue = new DLL_Node(value);
        if(this._isEmpty()){
            this.head = newValue;
            this.size++;
            return;
        }
        newValue.next = this.head;
        this.head.prev = newValue;
        this.head = newValue;
        this.size++;
        return;
    }

    insertAtLast(value){
        const newValue = new DLL_Node(value);
        if (this._isEmpty()){
            this.head = newValue;
            this.size++;
            return;
        }
        let curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        newValue.prev = curr;
        curr.next = newValue;
        this.size++;
    }

    insertAt(value, position){
        if (position === 0){
           return this.insertAtFirst(value);
        }
        if (position === this.size){
           return this.insertAtLast(value);
        }
        if(position > this.size || position < 0){
            throw "Positon is wrong"
        }
        let newValue = new DLL_Node(value);
        let i = 1;
        let curr = this.head;
        while(curr){
            if(i === position){
                newValue.next = curr.next;
                curr.next.prev = newValue;
                curr.next = newValue;
                newValue.prev = curr;
                this.size++;
                return;
            }
                curr = curr.next;
                i++;
        }
    }

    delteAtFirst(){
        if(this._isEmpty()){
            throw "Empty"
        }
        if (this.size === 0){
            throw "list is empty"
        }
        this.head.prev = null;
        this.head = this.head.next;
        this.size--;
    }

    deleteAtLast(){
        if(this._isEmpty()){
            throw "Empty"
        }
        if (this.size === 1){
            this.head = null;
            this.size--;
            return;
        }
        let curr = this.head;
        while(curr.next.next){
            curr = curr.next;
        }
        curr.next = null;
        this.size--;
    }

    deleteAt(position){
        if(this.size === 0){
            throw "Empty"
        }
        if (position >= this.size && position < 0){
            throw "Wrong position"
        }
        if (position === 0){
            return this.delteAtFirst();
        }
        if (position === this.size - 1){
            return this.deleteAtLast();
        }
        let index = 1;
        let current = this.head;

        while(current){
            if (position === index){
                current.next = current.next.next;
                current.next.prev = current;
                this.size--;
                return;
            }
            index++;
            current = current.next
        }

    }



    printValue(){
        let curr = this.head;
        let str = "";
        while(curr != null){
            str += curr.value +"-->";
            curr = curr.next;
        }
        console.log(str);
    }
    printReverse(){
        let curr = this.head;
        let last = null;
        let str = "";
        while(curr != null){
             last = curr;
            curr = curr.next;
        }
        while(last !== null){
            str+= last.value +"-->";
            last = last.prev;
        }
        console.log(str);
    }
    _isEmpty(){
        return this.head === null; 
    }
}

const dll = new DLL();
dll.insertAtFirst(30);
dll.insertAtFirst(20);
dll.insertAtFirst(10);
dll.insertAtLast(40);

