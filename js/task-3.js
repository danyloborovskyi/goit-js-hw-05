const profile = {
    username: "Jacob",
    playTime: 300,
    changeUsername(newName) {
        if (this.username !== newName) {
            this.username = newName;
        }
    },
    updatePlayTime(hours) {
        if (this.playTime !== hours) {
            this.playTime += hours;
        }
    },
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`;
    },
};

console.log(profile.getInfo()); 
profile.changeUsername("Marco");

console.log(profile.getInfo());

profile.updatePlayTime(20);
console.log(profile.getInfo());

// const products = [
//   { name: "Apple", price: 10, quantity: 3 },
//   { name: "Banana", price: 5, quantity: 7 },
//   { name: "Orange", price: 8, quantity: 4 },
//   { name: "Mango", price: 15, quantity: 2 }
// ];

// const totalSum = products.reduce((sum, product) => {
//     return sum + (product.price * product.quantity)
// }, 0);

// console.log(totalSum);