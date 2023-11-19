// Import necessary classes
import Dish from "./Dish.js";
import Menu from "./menu.js";
import User from "./user.js";
import order from "./order.js";
import Worker from "./worker.js";
import Restaurant from "./restManagment.js";

// Create menu and add dishes
let menu = new Menu();
let pasta = new Dish("Spaghetti Bolognese", 12, 30);
let pizza = new Dish("Margherita Pizza", 14, 25);
menu.addDish(pasta.name, pasta.price, pasta.preparationTime);
menu.addDish(pizza.name, pizza.price, pizza.preparationTime);

// Create workers
let chef1 = new Worker("C", "Chef");
let waiter1 = new Worker("aiter", "Waiter");

// Create restaurant
let restaurant = new Restaurant();

// Add workers to the restaurant
restaurant.addWorker(chef1.name, chef1.workerType, chef1.isFree);
restaurant.addWorker(waiter1.name, waiter1.workerType, waiter1.isFree);

// Create a user and assign a table
let user = new User("yrott", 1); // Assuming a user is assigned to table 1
console.log(`${user.name} is assigned to Table ${user.tableNumber}.`);

// User creates an order
let newOrder = restaurant.createOrder(user.tableNumber);
newOrder.addDish(pasta, 2);
newOrder.addDish(pizza, 1);
newOrder.addComments("No onions on the pizza, please.");

// Display menu
menu.displayMenu();

// Assign a chef to the order
restaurant.assignChefToOrder(newOrder);

// Assign a waiter to the table
restaurant.assignWaiterToTable(newOrder);

// Display total revenue
restaurant.displayTotalRevenue();
