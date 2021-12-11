class LinkNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirst(value){
        let newValue = new LinkNode(value);
        if (this._isEmpty()){
            this.head = this.tail = newValue;
        }
        else{
            newValue.next = this.head;
            this.head = newValue;
        }
        this.size++;
        return;
    }
    insertLast(value){
        let newValue = new LinkNode(value);
        if (this._isEmpty()){
            this.head = this.tail = newValue;
        }
        else{
            this.tail.next = newValue;
            this.tail = newValue;
        }
        this.size++;
        return;
    }
    contains(value){
        let curr = this.head;
        while(curr !== null){
            if (curr.value === value){
                return true;
            }
            else{
                return false
            }
            curr = curr.next;
        }
    }


    valueAt(index){
        if(this._isEmpty()){
            throw "Empty"
        }
        if(index > this.size || index < 1){
            throw "Enter right value";
        }
        let curr = this.head;
        for(let i = 1; i < index; i++){
            curr = curr.next;
        }
        return curr.value;
        
    }

    insertAt(index, value){
        if (index < 1) throw "index must be greater than zero";

        if(index === 1){
           return this.insertFirst(value); 
        }

        if(index > this.size){
           return this.insertLast(value);
        }

        let curr = this.head;
        let count = 1;
        let newItem = new LinkNode(value);
        while(count < index-1){
            curr = curr.next;
            count++;
        }
        newItem.next = curr.next;
        curr.next = newItem;
        this.size++;
        return;
    }
    midValueofLinkedList(){
        if(this._isEmpty()){
            throw "Empty";
        }
        if(this.size === 1){
            return this.head.value;
        }
        let curr = this.head;
        let mid = parseInt(this.size / 2);
        for(let i = 1; i <= mid; i++){
            curr = curr.next;
        }
        return curr.value;
    }

    sameValue(value){
        let count = 0;
        let curr = this.head;
        while(curr !== null){
            if (curr.value === value){
                count++;
            }
            curr = curr.next;
        }
        return count;
    }

    deleteFirst(){
        if (this._isEmpty()){
            throw "Empty List nothing to delete"
        }
        if(this.head === this.tail){
            this._deleteLastNode();
            return;
        }
        let second = this.head.next;
        this.head.next = null;
        this.head = second;  
        this.size--;      
    }
    deleteLast(){
        if (this._isEmpty()){
            throw "Empty List nothing to delete"
        }
        if(this.head === this.tail){
            this._deleteLastNode();
            return;
        }
        let curr = this.head;
        let previous = this._getPrevious(curr);
        previous.next = null;
        this.tail = previous;
        this.size--;
    }

    deleteAt(index){
        if (index < 1 || index > this.size) throw "Invalid Position";
        if (index === 1){
            return this.deleteFirst();
        }
        if (index === this.size){
            return this.deleteLast();
        }
        let curr = this.head;
        let count = 1;
        let prev;
        while (count < index){
            prev = curr;
            curr = curr.next;
            count++;
        }
        console.log(curr);
        prev.next = curr.next;
        this.size--;
    }

    _deleteLastNode(){
        this.head=this.tail=null;
        this.size--;
    }
    _getPrevious(curr){
        let prev;
        while(curr.next !== null){
            prev = curr;
            curr = curr.next;
        }
        return prev;
    }

    toArray(){
        if(this._isEmpty()){
            throw "List is empty";
        }
        let curr = this.head;
        let arr = []
        while(curr !== null){
            arr.push(curr.value);
            curr = curr.next;
        }
        return arr;
    }

    reverse(){
        if (this._isEmpty()){
            throw "Empty"
        }
        if(this.head === this.tail){
            return this.head;
        }
        let prev = null;
        let curr = this.head;
        let last = curr;
        while(curr !== null){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
        this.tail = last;
        return this;

    }

    sort(){
        if(this._isEmpty()){
            throw "Empty"
        }
        if(this.size === 1){
            return this.head;
        }
        let prev = null;
        let curr = this.head;
    }


    printList(){
        let str = "";
        let curr = this.head;

        if(this._isEmpty()){
            console.log("Nothing to print, List is Empty");
        }

        while(curr !== null){
            str+= curr.value + "-->";
            curr = curr.next;
        }
        console.log(str);
    }

    _isEmpty(){
        return this.head === null;
    }
}

const list = new LinkedList();
list.insertLast(10);
list.insertLast(20);
list.insertLast(30);
list.insertLast(40);
list.insertLast(50);
list.reverse();
console.log(list.contains(0));

list.printList();
console.log(list);