class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
}