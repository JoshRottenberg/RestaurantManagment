import Dish from "./Dish.js";
// create an order class
export default class Order {
    constructor(tableNumber) {
        this.tableNumber = tableNumber;
        this.dishes = [];
        this.comments = "";
        this.orderPrice = 0;
        this.completed = false;
    }

    // create a method to add dishes to the order
    addDish(dish, quantity) {
        const totalDishPrice = dish.price * quantity;
        this.dishes.push({ name: dish.name, quantity, totalDishPrice });
        this.orderPrice += totalDishPrice;
        console.log(`Dish "${dish.name}" added to the order.`);
    }

    // add comments to the order
    addComments(comments) {
        this.comments = comments;
        console.log("Comments added to the order.");
    }

    // updateOrder(newTableNumber) {
    //     this.tableNumber = newTableNumber;
    //     console.log(``);
    // }

    // print price to client
    serveBill() {
        if (this.completed) {
            console.log(`Bill served, price is "${this.orderPrice}"`);
        } else {
            console.log("Cannot serve bilL");
        }
    }

    // mark order as completed
    completeOrder() {
        this.completed = true;
        console.log("Order marked as completed.");
    }
};