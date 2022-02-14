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
            curr = curr.next;
        }
        return false;
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
        // console.log(curr);
        prev.next = curr.next;
        this.size--;
    }

    _deleteLastNode(){
        this.head=this.tail=null;
        this.size--;
    }
    _getPrevious(curr){//1-2-3-null
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
        if(this._isEmpty()){
            throw "List is empty"
        }
        if(this.head === this.tail){
            return this.head;
        }

        let current = this.head;
        let first = current;
        let prev = null;

        while(current !== null){
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
        this.tail = first;

    
    }

    sort(list){
        if(list === null || list.next === null){
            return list;
        }
        let left = list;
        let right = this.getMid(list);
        let temp = right.next;
        right.next = null;
        right = temp;

        const leftList = this.sort(left);
        const rightList = this.sort(right);
        return this.merge(leftList, rightList);
    }

    merge(left, right){
        let dummy = new LinkNode();
        let res = dummy;
        while(left && right){
            if (left.value < right.value){
                dummy.next = left;
                left = left.next;
            }
            else{
                dummy.next = right;
                right = right.next;
            }
            dummy = dummy.next;
        }
        if(left){
            dummy.next = left;
        }
        if(right){
            dummy.next = right;
        }
        return res.next;
    }

    getMid(list){
        if (list.next === null || list.next.next === null) return list;
        let slow = list;
        let fast = list;
        while(fast  && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    rotateLeft(llist, roatation){
        let rotate = this.size % roatation;
        let current = llist;
        let count = 1;
        while(current && rotate >= count){
            current = current.next;
            count++;
        }
        let beforeRotateelementNode = current.next;
        let currentBeforeRoatateElementNode = beforeRotateelementNode;
        current.next = null;

        while(beforeRotateelementNode.next){
            beforeRotateelementNode = beforeRotateelementNode.next;
        }
        beforeRotateelementNode.next = llist;
        llist = beforeRotateelementNode;
        return llist;

    }

    printListWIthval(head){
        let str = "";
        let curr = head;

        if(head === null){
            console.log("Nothing to print, List is Empty");
        }

        while(curr !== null){
            str+= curr.value + "-->";
            curr = curr.next;
        }
        console.log(str);
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
list.insertLast(2);
list.insertLast(1);
list.insertLast(3);
list.insertLast(1);
list.printList();
list.printListWIthval(list.rotateLeft(list.head, 5))
