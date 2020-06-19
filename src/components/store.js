let store = {
    counter: 10,
    increment() {
        this.counter++;
    }
}

setInterval(() => {
    store.counter++;
}, 3000);

export default store; 