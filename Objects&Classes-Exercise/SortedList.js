class List {
    constructor() {
        this.array = [];
        this.size = 0;
    }

    add(element) {
        this.array[this.array.length] = element;
        this.size++;
    };

    remove(index) {
        if (index >= 0 && index <= this.array.length - 1) {
            this.array.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (index >= 0 && index <= this.array.length - 1) {
            let element = this.array[index];
            return element;
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); // 6
list.remove(1);
console.log(list.get(1)); // 7
