import order from "./order.js";
import Worker from "./worker.js";
// import Order from "./order.js";
// restaurant Managment
export default  class Restaurant {
    constructor() {
        this.orders = [];
        this.workers = [];
        this.totalRevenue = 0;
    }

    // add a worker to the workers array
    addWorker(name, workerType, isFree) {
        let worker = new Worker(name, workerType, isFree);
        this.workers.push(worker);
        console.log(`${worker.workerType} ${worker.name} hired.`);
    }   
    
    // create an order
    createOrder(tableNumber) {
        let newOrder = new order(tableNumber);
        this.orders.push(newOrder);
        console.log(`Order created for Table ${tableNumber}.`);
        return newOrder;
    }

    // assign a chef to the order
    assignChefToOrder(order) {
        let freeChef = this.findFreeWorker("Chef");
        if (freeChef) {
            freeChef.setFreeStatus(false);
            console.log(`${freeChef.workerType} ${freeChef.name} is on ${order.tableNumber} order.`);
            // setTimeout() => {
            //     console.log(`Dishes are ready!`);
            //     freeChef.setFreeStatus(true);
            //     order.completeOrder();
            // }, 
        } else {
            console.log("No free chef");
        }
    }

    // assign a waiter to the table
    assignWaiterToTable(order) {
        let freeWaiter = this.findFreeWorker("Waiter");
        if (freeWaiter) {
            // freeWaiter.setFreeStatus(false);
            console.log(`${freeWaiter.workerType} ${freeWaiter.name} is on Table ${order.tableNumber}.`);
            order.serveBill();
            // Update total revenue
            this.totalRevenue += order.orderPrice;
            // Remove the order from the list
            this.removeOrder(order);
            freeWaiter.setFreeStatus(true);
        } else {
            console.log("No free waiter");
        }
    }

    // find a free worker
    findFreeWorker(workerType) {
        return this.workers.find(worker => worker.workerType === workerType && worker.isFree);
    }

    removeOrder(order) {
        this.orders = this.orders.filter(existingOrder => existingOrder !== order);
        console.log(`Order for Table ${order.tableNumber} completed and removed.`);
    }

    // display total revenue
    displayTotalRevenue() {
        console.log(`Total Revenue: $${this.totalRevenue}`);
    }
}