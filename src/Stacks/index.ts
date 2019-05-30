export class Stack {
    private dataStore: any[];
    private top: number;
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }

    public push(element: any) {
        this.dataStore[this.top++] = element;
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