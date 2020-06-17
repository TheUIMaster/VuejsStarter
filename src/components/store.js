let store = {
    counter: 0,
    increment() {
        this.counter++;
    }
}

setInterval(() => {
    store.counter++;
}, 3000);

export default store; 