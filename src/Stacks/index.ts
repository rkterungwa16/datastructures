export class Stack {
    private dataStore: any[];
    private top: number;
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }

    public push(element: any) {
        // this.top++: Apply original value then increment;
        // ++this.top: Increment original value then apply value;
        this.dataStore[this.top] = element;
        this.top = this.top + 1;
    }

    public pop() {
        return this.dataStore[--this.top];
    }

    public peek() {
        return this.dataStore[this.top - 1];
    }

    public clear() {
        this.top = 0;
    }

    public length(): number {
        return this.top;
    }
}