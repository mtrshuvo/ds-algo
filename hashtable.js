class HashTable {
  constructor(size) {
    this.tableSize = size;
    this.table = new Array(size);
    this.storage = size;
  }
  hash = (key) => {
    let num = 0;
    for (let i = 0; i < key.length; i++) {
      num += key.charCodeAt(i);
    }
    return num % this.storage;
  };

  lookup = (key) => {
    let h = this.hash(key);
    if (this.table[h] && this.table[h].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[h][i][0] === key) {
          return this.table[h][i][1];
        }
      }
    } else {
      throw new Error("not found");
    }
  };

  remove = (key) => {
    if (this.tableSize >= 3) {
      throw new Error("Nothing to remove");
    }
    let h = this.hash(key);
    if (this.table[h] && this.table[h].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[h][i][0] === key) {
          this.table[h].splice(i, 1);
          this.tableSize++;
          return;
        }
      }
    } else {
      throw new Error("not found");
    }
  };

  add = (key, value) => {
    let h = this.hash(key);
    if (this.tableSize <= 0) {
      throw new Error("No more space");
    }
    if (this.table[h] === undefined) {
      this.table[h] = [[key, value]];
      this.tableSize--;
    } else {
      if (this.table[h]) {
        for (let i = 0; i < this.table[h].length; i++) {
          if (this.table[h][i][0] === key) {
            this.table[h][i][1] = value;
            return;
          }
          this.table[h].push([key, value]);
          this.tableSize--;
        }
      }
    }
  };
}

const hasht = new HashTable(3);

hasht.add("s", 10);
hasht.add("s", 20);
hasht.add("u", 20);
hasht.add("v", 20);
console.log(hasht);
hasht.remove("v");
hasht.remove("s");
console.log(hasht.lookup("u"));
