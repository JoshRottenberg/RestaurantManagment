import Dish from "./Dish.js";

// create a menu class - holds an array of dishes
export default class Menu {
    constructor() {
        this.dishes = [];
    }

    // create a dish and add it to the menu
    addDish(name, price, preparationTime) {
        const newDish = new Dish(name, price, preparationTime)
        this.dishes.push(newDish);
        console.log(`Dish "${Dish.name}" added to the menu.`);
    }

    // display the menu
    displayMenu() {
        console.log("Menu:");
        this.dishes.forEach((dish, index) => {
            console.log(`${index + 1}. ${dish.name} - NIS${dish.price}`);
        });
    }
}