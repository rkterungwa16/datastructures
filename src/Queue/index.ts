export class Queue {
    private dataStore: any[] = [];

    /**
     * Add an element to the start of the queue
     * @param element
     */
    public enqueue(element: any) {
        this.dataStore.push(element);
    }

    /**
     * Remove an element from the front of the queue
     */
    public dequeue() {
        return this.dataStore.shift();
    }

    /**
     * View the first element in a queue
     */
    public front() {
        return this.dataStore[0];
    }

    /**
     * View the last element in a queue
     */
    public back() {
        return this.dataStore[this.dataStore.length - 1]
    }

    public isEmpty() {
        return this.dataStore.length === 0;
    }
}
